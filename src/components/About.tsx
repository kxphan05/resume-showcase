import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { label: "Python", category: "tech" },
  { label: "Git", category: "tech" },
  { label: "Docker", category: "tech" },
  { label: "Linux", category: "tech" },
  { label: "Azure", category: "tech" },
  { label: "SQL", category: "tech" },
  { label: "Machine Learning", category: "ai" },
  { label: "Statistical Modeling", category: "ai" },
  { label: "Speech-to-Text", category: "ai" },
  { label: "Speaker Diarization", category: "ai" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl font-bold text-foreground mb-8">
            <span className="mono text-primary text-lg">01.</span>
            About Me
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4 text-muted-foreground">
              <p>
                Analytical problem-solver and{" "}
                <span className="text-accent">Turing AI Scholar</span>{" "}
                specializing in Python and machine learning. I'm an innovative
                thinker with a keen interest in{" "}
                <span className="text-primary">artificial intelligence</span> and{" "}
                <span className="text-primary">scalable cloud solutions</span>.
              </p>
              <p>
                Currently pursuing a Bachelor of Science in Computer Science at{" "}
                <span className="text-primary">
                  Nanyang Technological University
                </span>{" "}
                as part of the prestigious Turing AI Scholars Programme — an
                exclusive program offered to only 40 scholars each year.
              </p>
              <p>
                My recent experience at{" "}
                <span className="text-primary">HTX Singapore</span> has allowed me
                to work on cutting-edge AI systems including speaker diarization,
                LLM optimization, and speech-to-text technologies in an Agile
                environment.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-foreground font-medium mb-4">Tech Stack</h3>
              <ul className="space-y-2">
                {skills.map((skill, index) => (
                  <motion.li
                    key={skill.label}
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span
                      className={
                        skill.category === "ai"
                          ? "text-accent"
                          : "text-primary"
                      }
                    >
                      ▹
                    </span>
                    {skill.label}
                  </motion.li>
                ))}
              </ul>

              <h3 className="text-foreground font-medium mt-6 mb-3">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Independent Learner", "Team Player", "Leadership"].map(
                  (s) => (
                    <span
                      key={s}
                      className="text-xs mono px-2 py-1 rounded bg-secondary text-muted-foreground border border-border/50"
                    >
                      {s}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
