"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2 } from "lucide-react";

const experiences = [
  {
    title: "Founding Engineer (Full Stack & AI)",
    company: "Rent Eco",
    period: "May 2026 - Present",
    description: [
      "Architected a 'Zero-UI' agentic commerce system where a central AI assistant handles end-to-end user operations and complex inventory rentals.",
      "Engineered a decoupled hybrid microservices ecosystem using Node.js/Express for high-speed CRUD alongside a Python/FastAPI service for heavy AI orchestration.",
      "Developed an advanced RAG pipeline utilizing ChromaDB and LLM function calling to translate vague user queries into automated database transactions.",
      "Solved critical e-commerce race conditions and 'double-booking' issues by implementing Redis distributed locks and database-level transaction safety.",
      "Leading the MVP backend roadmap, establishing stateless JWT authentication, robust multi-tenant data structures, and automated KYC API integrations."
    ],
    icon: Building2
  },
  {
    title: "Strategy & Growth Partner / AI-First Full Stack Developer",
    company: "Coding Age",
    period: "Remote, Part-time",
    description: [
      "Serving as the AI Curriculum & Vibe Coding Architect.",
      "Pivoted the institute's curriculum to include modern stacks (v0.dev, CodiumAI, Agentic AI, GitHub, LinkedIn branding).",
      "Driving high-level technical strategy, faculty training, and collaborative product-based ecosystems."
    ],
    icon: Briefcase
  }
];

export function Experience() {
  return (
    <section className="py-24 px-4 bg-[#020617] relative" id="experience">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Experience & Agency</h2>
          <p className="text-slate-400 text-lg">Building tech ecosystems and leading AI automation.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-500/20 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-800 rounded-xl">
                  <exp.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">
                    <span className="font-medium text-blue-400">{exp.company}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-slate-300 text-sm leading-relaxed flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
