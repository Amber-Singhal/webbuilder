from langchain_core.messages import HumanMessage, SystemMessage
from .graph_state import GraphState
from .agent import llm_gemini_flash
from .formatters import create_formatted_message
import json
from .graph_nodes import safe_send_socket, store_message

async def designer_node(state: GraphState) -> GraphState:
    """
    Designer node: Creates a comprehensive design system and UI/UX guidelines
    """
    try:
        socket = state.get("socket")
        plan = state.get("plan", {})
        
        if socket:
            await safe_send_socket(socket, 
                {
                    "e": "designer_started",
                    "message": "Designing the application aesthetics...",
                }
            )

        design_prompt = f"""
        You are an expert UI/UX Designer and Design System Architect.
        
        YOUR TASK:
        Create a comprehensive design system for the application based on the implementation plan.
        
        IMPLEMENTATION PLAN:
        {json.dumps(plan, indent=2)}
        
        REQUIREMENTS:
        1. Choose a modern, premium color palette (primary, secondary, accent, background, text colors).
        2. Define typography (font families, sizes, weights).
        3. Define component styles (buttons, cards, inputs, navigation).
        4. Define spacing and layout guidelines.
        5. Suggest specific Tailwind CSS classes for key elements.
        6. Ensure the design is "Most Powerful" - vibrant, dynamic, and professional.
        
        OUTPUT FORMAT:
        Return a JSON object with the following structure:
        {{
            "theme": {{
                "colors": {{ ... }},
                "typography": {{ ... }},
                "spacing": {{ ... }}
            }},
            "components": {{
                "Button": {{ "base": "...", "variants": {{ ... }} }},
                "Card": {{ "base": "..." }},
                "Input": {{ "base": "..." }},
                ...
            }},
            "layout": {{ ... }},
            "animations": {{ ... }}
        }}
        """

        messages = [
            SystemMessage(
                content="You are an expert UI/UX Designer. Create premium, modern design systems."
            ),
            HumanMessage(content=design_prompt),
        ]

        if socket:
            await safe_send_socket(socket, {"e": "thinking", "message": "Creating design system..."})

        # Store thinking message
        await store_message(
            chat_id=state.get("project_id"),
            role="assistant",
            content="Creating design system...",
            event_type="thinking"
        )

        response = await llm_gemini_flash.ainvoke(messages)
        
        try:
            design_system = json.loads(response.content)
        except json.JSONDecodeError:
            # Fallback if JSON parsing fails
            design_system = {
                "theme": {},
                "components": {},
                "raw_output": response.content
            }

        new_state = state.copy()
        new_state["design_system"] = design_system
        new_state["current_node"] = "designer"
        new_state["execution_log"].append(
            {"node": "designer", "status": "completed", "design_system": design_system}
        )

        # Create formatted design message
        formatted_design_msg = create_formatted_message(
            "designer_complete",
            design_system,
            message="Design system created successfully"
        )
        
        if socket:
            await safe_send_socket(socket, formatted_design_msg)

        # Store design completion
        await store_message(
            chat_id=state.get("project_id"),
            role="assistant",
            content=formatted_design_msg.get("formatted", json.dumps(design_system, indent=2)),
            event_type="designer_complete"
        )

        return new_state

    except Exception as e:
        error_msg = f"Designer node error: {str(e)}"
        print(error_msg)

        new_state = state.copy()
        new_state["current_node"] = "designer"
        new_state["error_message"] = error_msg
        new_state["execution_log"].append(
            {"node": "designer", "status": "error", "error": error_msg}
        )

        if socket:
            await safe_send_socket(socket, {"e": "designer_error", "message": error_msg})

        return new_state
