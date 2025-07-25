import React from "react";
import { Navigation } from "../components/nav";

const experiences = [
  {
    title: "Junior Software Engineer Intern",
    company: "Finbaze",
    date: "Starting in September 2025",
    description: "",
  },
  {
    title: "Freelance Support Engineer",
    company: "Euro Dragon",
    date: "2025 - Current",
    description: "Provided technical support and troubleshooting for clients, ensuring smooth operation of software products and resolving customer issues efficiently.",
  },
  {
    title: "Freelance Junior Software Engineer",
    company: "Finbaze",
    date: "2025 - Current",
    description: "Working at Finbaze, a startup currently in the MVP phasewhere I am responsible for developing and maintaining the core application.",
  },
  {
    title: "Owner",
    company: "wpflow",
    date: "2025 - Current",
    description: "Working on my own startup called wpflow which is a platform for creating wordpress plugins.",
  },
  {
    title: "IT Consultant",
    company: "A-booth",
    date: "2024 - 2025",
    description: "Consulted on IT infrastructure and digital solutions, helping the company optimize workflows and implement new technologies.",
  },
  {
    title: "Web Developer Intern",
    company: "Chiefs of IT",
    date: "2023 - 2023",
    description: "4 months of internship where I worked on designing figma designs and building them into a working websites.",
  },
  {
    title: "Web Developer Intern",
    company: "Gain Impact",
    date: "2022 - 2022",
    description: "4 months of internship where I worked on front-end projects and learned a lot about the web development process.",
  },
];

const education = [
  {
    degree: "Bsc Computer Science",
    school: "Hogeschool Utrecht",
    date: "2015 - Current",
  },
  {
    degree: "MBO Software Development",
    school: "Grafisch Lyceum Rotterdam",
    date: "2015 - 2019",
  },
];

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "UI/UX Design", "Wordpress", "Figma", "PHP", "MySQL",
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
      <Navigation />
      <main className="max-w-2xl mx-auto px-6 pt-32 pb-24">
        {/* Name and summary */}
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Experience</h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-xl mx-auto font-normal">Experienced software engineer with a passion for building minimal, scalable, and beautiful web products. Focused on developer experience, performance, and clean design.</p>
        </header>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-zinc-200 mb-4 border-b border-zinc-800 pb-1 tracking-tight">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-medium text-zinc-100 text-base font-display">{exp.title}</span>
                  <span className="text-zinc-400 text-sm font-mono mt-1 sm:mt-0">{exp.date}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-zinc-400 text-sm">{exp.company}</span>
                </div>
                <p className="text-zinc-300 text-base mt-2 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-zinc-200 mb-4 border-b border-zinc-800 pb-1 tracking-tight">Education</h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <span className="font-medium text-zinc-100 text-base font-display">{edu.degree}</span>
                <span className="text-zinc-400 text-sm font-mono">{edu.date}</span>
                <span className="text-zinc-400 text-sm">{edu.school}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xl font-semibold text-zinc-200 mb-4 border-b border-zinc-800 pb-1 tracking-tight">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-200 text-sm font-medium border border-zinc-700">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
} 