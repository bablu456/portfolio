"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, FileText } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020617] to-[#020617] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-sm font-medium text-blue-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for Opportunities
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          <span className="block text-3xl md:text-4xl text-slate-300 font-medium mb-4">Hi, I&apos;m Bablu Kumar 👋</span>
          Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">AI Systems Engineer</span> <br className="hidden md:block" />
          & Full Stack Developer
        </h1>

        <div className="h-20 mb-8">
          <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto">
            From a non-technical background to architecting high-concurrency systems and autonomous AI agents.
          </p>
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
