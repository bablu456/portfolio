"use client";

import { motion } from "framer-motion";
import { Server, Code, Bot, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Backend & Architecture",
    icon: Server,
    skills: ["Java", "Spring Boot", "Hibernate", "Microservices", "RESTful APIs", "Node.js", "Express"]
  },
  {
    title: "AI Engineering & LLMs",
    icon: Bot,
    skills: ["Agentic Workflows", "RAG Pipelines", "LangChain", "OpenRouter", "Hugging Face", "ChromaDB"]
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "Supabase", "JWT Authentication"]
  },
  {
    title: "Frontend & UI",
    icon: Code,
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "JavaScript"]
  }
];

export function Skills() {
  return (
    <section className="py-24 px-4 bg-[#020617] relative border-t border-slate-800" id="skills">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-slate-400 text-lg">A comprehensive toolkit spanning full-stack development and AI orchestration.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/50 hover:border-slate-700 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                  <category.icon className="w-6 h-6 text-slate-300 group-hover:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-[#020617] border border-slate-700 text-slate-300 text-sm rounded-lg group-hover:border-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
