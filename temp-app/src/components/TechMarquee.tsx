"use client";

import { motion } from "framer-motion";

const techStack = [
  "Java", "Spring Boot", "Hibernate", "Microservices", "RESTful APIs", "PostgreSQL", "Supabase",
  "Apache Kafka", "Redis",
  "React", "Next.js", "Tailwind CSS", "Framer Motion",
  "Agentic Workflows", "RAG Pipelines", "LangChain", "OpenRouter", "Hugging Face", "Ollama",
  "n8n", "Cursor IDE"
];

export function TechMarquee() {
  return (
    <section className="py-20 border-y border-slate-800 bg-[#020617]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-sm uppercase tracking-widest text-slate-500 font-semibold text-center">Core Technical Stack</h2>
      </div>
      
      <div className="relative flex overflow-x-hidden w-full group">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#020617] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#020617] to-transparent z-10"></div>
        
        <div className="animate-marquee whitespace-nowrap flex items-center group-hover:[animation-play-state:paused]">
          {[...techStack, ...techStack].map((tech, i) => (
            <div
              key={i}
              className="mx-4 px-6 py-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-medium hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
