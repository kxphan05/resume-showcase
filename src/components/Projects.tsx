import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Bot, BookOpen } from "lucide-react";

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            title: "Gym Logs Telegram Bot",
            icon: Bot,
            link: "https://t.me/gymlogsbot",
            tags: ["Docker", "Fly.io", "Supabase", "Python"],
            bullets: [
                "Developed and deployed a workout-logging bot using AI-assisted coding, transitioning from a self-hosted Raspberry Pi environment to a scalable cloud architecture.",
                "Containerized the application using Docker for initial local deployment before migrating to Fly.io for cloud compute and Supabase (PostgreSQL) for managed data storage.",
            ],
        },
        {
            title: "CS50x Certification",
            icon: BookOpen,
            link: "https://github.com/me50/kxphan05/tree/cs50/problems/2024/x/project",
            tags: ["Flask", "SQL", "Algorithms", "CI/CD"],
            bullets: [
                "Gained foundational knowledge in sorting algorithms, Big O notation, and CI/CD principles.",
                "Project: Developed a web application to track IPPT scores using Flask and SQL.",
            ],
        },
    ];

    return (
        <section id="projects" className="py-20" ref={ref}>
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="flex items-center gap-4 text-2xl font-bold text-foreground mb-12">
                        <span className="mono text-primary text-lg">03.</span>
                        Projects
                        <span className="h-px bg-border flex-1 max-w-xs" />
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                                className="card-glass p-6 relative group dragon-scale overflow-hidden flex flex-col"
                            >
                                {/* Hover glow */}
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex-1 flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                                            <project.icon className="w-6 h-6" />
                                        </div>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>

                                    <h3 className="text-lg font-semibold text-foreground mb-3">
                                        {project.title}
                                    </h3>

                                    <div className="space-y-2 flex-1">
                                        {project.bullets.map((bullet, i) => (
                                            <p
                                                key={i}
                                                className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2"
                                            >
                                                <span className="text-accent mt-0.5 shrink-0">▹</span>
                                                {bullet}
                                            </p>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/30">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="mono text-xs px-2 py-1 rounded bg-secondary/80 text-accent/80"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
