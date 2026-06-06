"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    title: "RideFlow Management System",
    description: "A highly scalable transportation/ride backend focusing on real-time location tracking and geospatial queries.",
    tags: ["Spring Boot", "Kafka", "Redis"],
    github_url: "https://github.com/bablu456/rideflow-ai-backend"
  },
  {
    title: "UPI Lite Payment Engine",
    description: "Architected a robust backend logic system focusing on atomic transactions and ACID compliance for money transfers.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Kafka"],
    github_url: "https://github.com/bablu456/Upi-lite-payment-engine"
  },
  {
    title: "Blooms Blog Management System",
    description: "A Core Java project evolving into an API-driven platform. Features include blog creation, categories, user roles, comments, and search.",
    tags: ["Core Java", "OOP", "JDBC"],
    github_url: "https://github.com/bablu456/blooms-blog-management-system"
  },
  {
    title: "Mini Amazon Backend",
    description: "A robust E-Commerce Backend API built with Java 17, Spring Boot 3, and MongoDB. Follows strict 3-Layer Architecture.",
    tags: ["Java 17", "Spring Boot 3", "MongoDB"],
    github_url: "https://github.com/bablu456/mini-amazon-backend"
  },
  {
    title: "Movie-Zone",
    description: "A modern, responsive web application showcasing clean UI design, reusable components, and optimized performance.",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    github_url: "https://github.com/bablu456/Movie-Zone"
  },
  {
    title: "Digital Twin AI Portfolio",
    description: "A RAG-based personal web application that allows recruiters to chat with an AI clone.",
    tags: ["Next.js", "React", "LangChain"],
    github_url: "https://github.com/bablu456/ai-landing-neuralai"
  },
  {
    title: "BiharRozgar.in AI Integration",
    description: "Implemented a sophisticated AI chatbot driven by a custom RAG system to assist users dynamically with employment opportunities.",
    tags: ["Python", "RAG", "Next.js", "LangChain"],
    github_url: "https://github.com/bablu456/biharrozgar.in"
  }
];

export function Projects() {
  return (
    <section className="py-24 px-4 bg-[#020617]" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 text-lg max-w-2xl">A selection of my architectural builds, from scalable high-concurrency systems to autonomous AI agents.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/50 hover:border-slate-600 transition-all cursor-pointer flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-400" />
                </div>
                <div className="flex gap-2">
                  <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white transition-colors">
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-full group-hover:border-slate-700">
                    {tag}
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
