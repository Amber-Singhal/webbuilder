import { ChevronRight, ArrowUpRight, Plus } from "lucide-react";
import {
  FaReact,
  FaCode,
  FaMagic,
  FaRocket,
  FaBolt,
  FaCheckCircle,
} from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { MdAutoAwesome, MdSpeed, MdBuild } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import Link from "next/link";
import "./page-styles.css";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full relative overflow-hidden bg-[#050505]"
    >
      {/* Top Spotlight Background - Only at the top */}
      <div
        className="absolute w-full top-0 left-0 right-0 z-0 pointer-events-none"
        style={{
          height: "800px",
          background: `
            radial-gradient(
              ellipse 80% 50% at 50% -10%,
              rgba(255, 77, 0, 0.15) 0%,
              rgba(255, 77, 0, 0.05) 40%,
              rgba(0, 0, 0, 0) 80%
            )
          `,
        }}
      />

      {/* Main Content */}
      <main
        className="landing-page-wrapper w-full font-sans overflow-x-hidden relative z-10"
        style={{
          fontFamily:
            "var(--font-outfit), ui-sans-serif, system-ui, sans-serif",
          backgroundColor: "transparent",
        }}
      >
        {/* Navigation Header */}
        <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-serif text-white font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>Evi.</span>
          </div>
          <Link href="/chat">
            <button className="px-6 py-2 bg-[#FF4D00] text-white rounded-full hover:bg-[#ff6a2b] transition font-medium text-sm">
              Sign Up
            </button>
          </Link>
        </nav>

        <section className="py-20 px-6 relative">
          {/* Hero Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#FF4D00] opacity-10 blur-[120px] rounded-full pointer-events-none z-0" />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance text-white font-serif" style={{ fontFamily: 'var(--font-playfair)' }}>
              From Idea to Verified<br />
              Smart Contract in One Chat
            </h1>

            <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto text-balance">
              Don't code just chat the chain
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <Link href="/chat">
                <button className="px-8 py-4 bg-[#FF4D00] text-white rounded-full hover:bg-[#ff6a2b] transition font-semibold flex items-center gap-2 group text-lg shadow-[0_0_20px_rgba(255,77,0,0.3)]">
                  Start Building
                  <ArrowUpRight
                    size={20}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                  />
                </button>
              </Link>
            </div>

            {/* How It Works Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Card 1: Describe */}
              <div className="bg-white rounded-2xl p-8 text-left h-[400px] flex flex-col justify-end relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-6 left-6 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-neutral-200" />
                  <div className="w-2 h-2 rounded-full bg-neutral-200" />
                </div>
                <h3 className="text-3xl font-bold text-black mb-2 leading-tight">
                  Describe<br />your intent
                </h3>
                <p className="text-neutral-500 text-sm">
                  Create a DAO for community voting
                </p>
              </div>

              {/* Card 2: Generate (Red) */}
              <div className="bg-gradient-to-b from-[#FF4D00] to-[#cc3d00] rounded-2xl p-8 text-left h-[400px] flex flex-col justify-end relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-[0_10px_30px_rgba(255,77,0,0.3)]">
                <div className="absolute top-6 left-6 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                  EVI<br />generates<br />Solidity code
                </h3>
                <p className="text-white/80 text-sm">
                  AI writes, fixes, and optimizes smart contracts.
                </p>
              </div>

              {/* Card 3: Deploy (Black) */}
              <div className="bg-[#111] border border-white/10 rounded-2xl p-8 text-left h-[400px] flex flex-col justify-end relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-6 left-6 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                  EVI<br />deploys it<br />live
                </h3>
                <p className="text-neutral-400 text-sm">
                  On networks like Basecamp, Avalanche, or Boba.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Chat Section */}
        <section className="py-24 px-6 border-t border-white/5 bg-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-8xl font-serif italic text-white mb-16 opacity-90" style={{ fontFamily: 'var(--font-playfair)' }}>
              Featured chat
            </h2>

            <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF4D00] to-transparent opacity-50" />

              <p className="text-white text-lg mb-8 font-medium">GM GM! What you wanna ship on chain</p>

              <div className="bg-[#111] border border-white/10 rounded-xl p-4 mb-6 text-left h-32 flex items-start">
                <span className="text-neutral-500">Ask zap a question...</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 transition">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                  </button>
                  <button className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 transition">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
                  </button>
                </div>
                <button className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition flex items-center gap-2 text-sm font-medium">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                  Send
                </button>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {['Clone UI', 'Import Figma', 'Create Page', 'Improve'].map((action) => (
                  <button key={action} className="px-4 py-2 bg-[#111] border border-white/10 hover:border-[#FF4D00]/50 text-neutral-400 hover:text-white rounded-lg text-sm transition flex items-center gap-2">
                    {action === 'Clone UI' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>}
                    {action === 'Import Figma' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" /><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" /><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" /><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" /><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" /></svg>}
                    {action === 'Create Page' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>}
                    {action === 'Improve' && <IoSparkles size={14} />}
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-12 px-6 bg-black">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <span className="text-2xl font-serif text-white font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>Evi.</span>
              <span className="text-xs px-2 py-1 rounded-full border border-white/10 text-neutral-500">
                BETA
              </span>
            </div>
            <nav className="flex items-center gap-8 text-neutral-500 text-sm">
              <Link href="/" className="hover:text-[#FF4D00] transition">
                Home
              </Link>
              <Link href="/chat" className="hover:text-[#FF4D00] transition">
                Builder
              </Link>
              <a href="#" className="hover:text-[#FF4D00] transition">
                Docs
              </a>
              <a href="#" className="hover:text-[#FF4D00] transition">
                Twitter
              </a>
            </nav>
          </div>
        </footer>
      </main>
    </div>
  );
}
