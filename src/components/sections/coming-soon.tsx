"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  ArrowRight,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Loader2,
  Check,
} from "lucide-react";

// Brand Palette
const colors = {
  black: "#000000",
  red: "#c62828",
  white: "#ffffff",
  gray: "#9ca3af",
  darkGray: "#171717",
};

const ComingSoonSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 2000);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-black font-sans text-white overflow-hidden selection:bg-red-700 selection:text-white">
      {/* --- BACKGROUND ANIMATIONS --- */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        {/* The "Core" - A pulsating red orb */}
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[50vh] w-[50vh] rounded-full bg-red-700 blur-[100px] opacity-20 animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[30vh] w-[30vh] rounded-full bg-red-600 blur-[80px] opacity-30 animate-pulse-fast"></div>
        </div>

        {/* Grid Lines - subtle technical feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
      </div>

      {/* --- MAIN CONTAINER --- */}
      <div
        className={`relative z-10 w-full max-w-5xl px-6 transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header / Logo */}
        <header className="mb-20 flex flex-col items-center justify-center text-center relative">
          {/* Background Outline Text (Subtle) */}
          <span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[14rem] font-black text-transparent pointer-events-none select-none opacity-5 blur-sm"
            style={{ WebkitTextStroke: "2px #c62828" }}
          >
            BELIEF
          </span>

          {/* Coming Soon Tag */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 backdrop-blur-md relative z-20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-red-400 uppercase">
              Coming Soon
            </span>
          </div>

          <h1 className="relative z-10 flex flex-col items-center font-black uppercase leading-[0.9]">
            <span className="text-7xl sm:text-8xl md:text-9xl tracking-tighter text-white drop-shadow-2xl">
              SELF
            </span>
            <span className="text-7xl sm:text-8xl md:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-800 drop-shadow-2xl">
              BELIEF
            </span>
          </h1>

          <div className="mt-8 flex items-center gap-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-900/50"></div>
            <p className="text-sm font-bold tracking-[0.5em] text-zinc-400 uppercase">
              Foundation
            </p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-900/50"></div>
          </div>
        </header>

        {/* Central Content Card */}
        <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-xl shadow-2xl shadow-red-900/10">
          <div className="p-8 sm:p-12 text-center">
            <h2 className="mb-6 text-2xl font-light leading-relaxed text-zinc-200">
              &ldquo;The only limit to our realization of tomorrow will be our
              doubts of today.&rdquo;
            </h2>

            {/* Countdown - Minimal Inline */}
            <div className="my-10 flex flex-wrap justify-center gap-8 sm:gap-12">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div
                  key={unit}
                  className="flex flex-col items-center group cursor-default"
                >
                  <div className="relative">
                    <span className="text-4xl font-bold text-white sm:text-5xl tabular-nums tracking-tighter group-hover:text-red-500 transition-colors duration-300">
                      {value.toString().padStart(2, "0")}
                    </span>
                    {/* Decorative dot */}
                    <div className="absolute -right-3 top-1 h-1 w-1 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="mt-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    {unit}
                  </span>
                </div>
              ))}
            </div>

            {/* Input Form - Floating Style */}
            <div className="mx-auto w-full max-w-sm">
              {status === "success" ? (
                <div className="flex items-center justify-center gap-2 rounded-full border border-green-900/30 bg-green-900/10 py-3 px-6 text-green-400 animate-fade-in">
                  <Check className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    We&apos;ll be in touch soon.
                  </span>
                </div>
              ) : (
                <div className="group relative">
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-red-600 to-zinc-600 opacity-30 blur transition duration-500 group-hover:opacity-70"></div>
                  <form
                    onSubmit={handleSubmit}
                    className="relative flex items-center rounded-full bg-black p-1 ring-1 ring-zinc-800"
                  >
                    <div className="pl-4 text-zinc-500">
                      <Mail className="h-4 w-4" />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="Join the movement..."
                      className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="flex h-10 items-center gap-2 rounded-full bg-red-700 px-6 text-xs font-bold uppercase tracking-wide text-white transition-all hover:bg-red-600 hover:pr-5 active:scale-95 disabled:opacity-50"
                    >
                      {status === "loading" ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          Notify
                          <ArrowRight className="h-3 w-3" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>

          {/* Progress Bar Bottom */}
          <div className="h-1 w-full bg-black">
            <div className="h-full w-[35%] bg-gradient-to-r from-red-900 via-red-600 to-red-900 animate-shimmer"></div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 flex flex-col items-center justify-center gap-6">
          <div className="flex gap-8">
            {[
              {
                Icon: Instagram,
                href: "https://www.instagram.com/selfbelieffoundation",
              }, // Update your Instagram ID here
              { Icon: Twitter, href: "#" },
              { Icon: Facebook, href: "#" },
              { Icon: Linkedin, href: "#" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href !== "#" ? "_blank" : undefined}
                rel={href !== "#" ? "noopener noreferrer" : undefined}
                className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition-all hover:border-red-600 hover:text-white"
              >
                <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-widest text-zinc-600">
            © 2025 Self Belief Foundation
          </p>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.2;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }
        @keyframes pulse-fast {
          0%,
          100% {
            opacity: 0.2;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1.05);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
        .animate-pulse-fast {
          animation: pulse-fast 4s infinite ease-in-out;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ComingSoonSection;
