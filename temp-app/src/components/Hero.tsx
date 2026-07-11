"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, FileText } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-purple-900/20 to-[#020617] -z-10" />
      
      {/* Decorative blurred blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-2000 -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl mx-auto mt-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Available for Opportunities
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg">
          <span className="block text-3xl md:text-4xl text-slate-300 font-medium mb-4 tracking-normal">Hi, I&apos;m Bablu Kumar 👋</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 animate-gradient-x">
            Full Stack Engineer
          </span>
        </h1>

        <div className="mb-10 flex flex-col gap-6 items-center">
          <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            I build robust, scalable applications and am currently learning and upgrading my skills in <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-500">AI Engineering</span>.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 backdrop-blur-md shadow-xl"
          >
            <div className="p-2 bg-amber-500/20 rounded-full">
              <Bot className="w-5 h-5 text-amber-400" />
            </div>
            <p className="text-sm md:text-base text-slate-200 text-left">
              <span className="block font-bold text-amber-400 uppercase tracking-wider text-xs mb-1">Current Project</span>
              Building a Next.js AI SaaS Application
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 flex-wrap"
        >
          <a href="#projects" className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-slate-200 transition-colors w-full sm:w-auto justify-center">
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 bg-slate-900 border border-slate-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-colors w-full sm:w-auto justify-center">
            <FileText className="w-5 h-5 text-blue-400" />
            View Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
