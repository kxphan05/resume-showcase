import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Python",
  "Machine Learning",
  "Speech-to-Text",
  "Git & CI/CD",
  "Docker",
  "Statistical Modeling",
  "LLM Fine-tuning",
  "Data Science",
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
                I'm an enthusiastic learner with an inclination towards technical analysis, 
                whether it's deducing structures in Chemistry or constructing proofs in Mathematics. 
                I'm an innovative and analytical problem-solver with a keen interest in{" "}
                <span className="text-primary">artificial intelligence</span> and{" "}
                <span className="text-primary">machine learning</span>.
              </p>
              <p>
                Currently pursuing a Bachelor of Science in Computer Science at{" "}
                <span className="text-primary">Nanyang Technological University</span> as part of the 
                prestigious Turing AI Scholars Programme — an exclusive program offered to only 40 scholars each year.
              </p>
              <p>
                My recent experience at{" "}
                <span className="text-primary">HTX Singapore</span> has allowed me to work on 
                cutting-edge AI systems including speaker diarization, LLM optimization, and 
                speech-to-text technologies.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-foreground font-medium mb-4">Tech Stack</h3>
              <ul className="grid grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary">▹</span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
