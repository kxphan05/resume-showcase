import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Star } from "lucide-react";

const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const awards = [
    {
      title: "Singapore Chemistry Olympiad",
      achievement: "Gold Medal, Top 8 Nationwide",
      year: "2023",
      icon: Trophy,
    },
    {
      title: "Lee Kuan Yew Award",
      achievement: "Mathematics and Science",
      year: "2022",
      icon: Star,
    },
    {
      title: "Singapore Mathematical Olympiad",
      achievement: "Silver Award",
      year: "2023",
      icon: Medal,
    },
    {
      title: "National A-Division Dragon Boating",
      achievement: "Team Overall 3rd",
      year: "2023",
      icon: Medal,
    },
    {
      title: "Singapore Chemistry League",
      achievement: "Team Overall 2nd",
      year: "2023",
      icon: Medal,
    },
    {
      title: "NCC Outstanding Cadet Award",
      achievement: "Leadership Excellence",
      year: "2021",
      icon: Star,
    },
  ];

  return (
    <section id="awards" className="py-20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl font-bold text-foreground mb-12">
            <span className="mono text-primary text-lg">04.</span>
            Awards & Achievements
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                className="card-glass p-5 group hover:border-primary/50 transition-colors duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <award.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground text-sm leading-tight">
                      {award.title}
                    </h3>
                    <p className="text-primary text-sm mt-1">{award.achievement}</p>
                    <p className="mono text-xs text-muted-foreground mt-2">{award.year}</p>
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

export default Awards;
