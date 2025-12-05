"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authApi, chatApi, type UserData } from "@/api";
import {
  ChatNavbar,
  ChatInputBox,
  StatusBadge,
  PromotionBanner,
} from "@/components/chat";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("auth_token");
    const user = localStorage.getItem("user_data");

    if (!token) {
      router.push("/signin");
      return;
    }

    setIsAuthenticated(true);

    if (user) {
      try {
        const parsed: UserData = JSON.parse(user);
        setUserData(parsed);

        // Fetch fresh user data from API to get updated token count
        authApi
          .getCurrentUser()
          .then((freshData) => {
            console.log("Refreshed user data:", freshData);
            const updatedUser = { ...parsed, ...freshData };
            localStorage.setItem("user_data", JSON.stringify(updatedUser));
            setUserData(updatedUser);
          })
          .catch((err) => {
            console.error("Failed to fetch fresh user data:", err);
          });
      } catch (err) {
        console.warn("Invalid user_data in localStorage, clearing.", err);
        localStorage.removeItem("user_data");
        // Don't clear token here as it might still be valid
      }
    }
  }, [router]);

  const handleSignOut = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_data");
    setIsAuthenticated(false);
    setUserData(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    setError("");

    try {
      const response = await chatApi.createChat(input.trim());
      router.push(`/chat/${response.chat_id}`);
    } catch (err) {
      console.error("Error creating chat:", err);
      setError("Failed to create chat. Please try again.");
      setIsLoading(false);
    }
  };

  const handleStartChat = () => {
    // Focus input or scroll to input
    const inputElement = document.querySelector('input[type="text"]') as HTMLInputElement;
    if (inputElement) {
      inputElement.focus();
    }
  };

  return (
    <div className="min-h-screen w-full relative bg-black">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 77, 0, 0.15), transparent 70%), #000000",
        }}
      />

      <ChatNavbar
        isAuthenticated={isAuthenticated}
        userData={userData}
        onSignOut={handleSignOut}
      />

      <div className="relative z-10 min-h-[calc(100vh-60px)] flex flex-col items-center justify-center px-4">
        <div className="flex-1 flex flex-col items-center justify-center p-4 text-center w-full max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-8 italic" style={{ fontFamily: 'var(--font-playfair)' }}>
            GM GM! What you wanna ship on chain
          </h1>

          <div className="w-full max-w-2xl mx-auto">
            <div className="bg-[#111] border border-white/10 rounded-xl p-4 mb-6 text-left h-32 flex items-start cursor-text hover:border-white/20 transition" onClick={handleStartChat}>
              <span className="text-neutral-500">Ask zap a question...</span>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {['Clone UI', 'Import Figma', 'Create Page', 'Improve'].map((action) => (
                <button key={action} onClick={() => setInput(action)} className="px-4 py-2 bg-[#111] border border-white/10 hover:border-[#FF4D00]/50 text-neutral-400 hover:text-white rounded-lg text-sm transition flex items-center gap-2">
                  {action}
                </button>
              ))}
            </div>

            <ChatInputBox
              input={input}
              isLoading={isLoading}
              onInputChange={setInput}
              onSubmit={handleSubmit}
            />

            {error && (
              <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm text-center">
                {error}
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 text-center pb-8">
          <p className="text-sm text-white/50">
            Get access to the best AI Agent. +30M users choose Evi.
            <a href="#" className="text-[#FF4D00] hover:text-[#ff6a2b] ml-2">
              Upgrade plan
            </a>
          </p>
        </div>
      </div>
      <PromotionBanner />
    </div>
  );
}
