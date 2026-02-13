import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      school: "Nanyang Technological University",
      degree: "Bachelor of Science in Computer Science",
      period: "Aug 2026 — Expected Dec 2030",
      highlight: "Turing AI Scholars Programme",
      description:
        "One of only 40 scholars selected annually for this exclusive program.",
    },
    {
      school: "Raffles Institution",
      degree: "A Levels",
      period: "Feb 2022 — Dec 2023",
      highlight: "90 Rank Points, 8 Distinctions",
      description:
        "Including H3 Mathematics and H3 Chemistry. Member of Raffles Academy (Chemistry), exploring subjects beyond the standard curriculum.",
    },
  ];

  return (
    <section id="education" className="py-20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl font-bold text-foreground mb-12">
            <span className="mono text-primary text-lg">04.</span>
            Education
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="card-glass p-6 relative group overflow-hidden dragon-scale"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 pl-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        {edu.school}
                      </h3>
                      <p className="text-muted-foreground">{edu.degree}</p>
                    </div>
                    <span className="mono text-sm text-primary">
                      {edu.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="text-foreground font-medium">
                      {edu.highlight}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
