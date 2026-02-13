import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      title: "Optimized Speaker Diarization",
      description:
        "Benchmarked embedding and segmentation models using the DiArt framework in an Agile environment. Identified a model that reduced the diarization error rate from 25% to 15%.",
    },
    {
      title: "LLM Throughput Analysis",
      description:
        "Conducted performance benchmarking of Qwen LLM variants on Azure Compute and evaluated throughput efficiency of pruned models.",
    },
    {
      title: "STT Reliability",
      description:
        "Developed and integrated a live microphone testing script for an in-house Speech-to-Text model into the production codebase via Gitlab CI.",
    },
    {
      title: "Research",
      description:
        "Explored PLDA statistical backend as a robust alternative to cosine similarity for speaker identification pipelines.",
    },
  ];

  return (
    <section id="experience" className="py-20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl font-bold text-foreground mb-12">
            <span className="mono text-primary text-lg">02.</span>
            Experience
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="card-glass p-8 relative overflow-hidden group dragon-scale">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    AI Engineering Intern{" "}
                    <span className="text-primary">
                      @ HTX Singapore
                    </span>
                  </h3>
                  <p className="mono text-sm text-muted-foreground mt-1">
                    Dec 2025 — Mar 2026
                  </p>
                </div>
                <a
                  href="https://www.htx.gov.sg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors mt-2 md:mt-0"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <h4 className="text-foreground font-medium flex items-start gap-2">
                      <span className="text-accent mt-1">▹</span>
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed pl-5">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
