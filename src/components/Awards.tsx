import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Star, Users, Anchor, Heart } from "lucide-react";

const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const awards = [
    {
      title: "Lee Kuan Yew Award",
      achievement: "Mathematics and Science",
      year: "2022",
      icon: Star,
    },
    {
      title: "Singapore Chemistry Olympiad",
      achievement: "Gold Medal — Top 8 Nationwide",
      year: "2023",
      icon: Trophy,
    },
    {
      title: "Singapore Mathematical Olympiad",
      achievement: "Silver Award",
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
      title: "Subject Prizes",
      achievement: "Top in Level — Math, Physics, Chemistry, Combined Humanities",
      year: "2021",
      icon: Star,
    },
    {
      title: "Commanding Officer Coin",
      achievement: "Leadership Excellence",
      year: "2025",
      icon: Medal,
    },
  ];

  const leadership = [
    {
      title: "Unit Sergeant Major — NCC (Victoria School)",
      description:
        "Led weekly trainings and annual camps; received Outstanding Cadet Awards.",
      icon: Users,
    },
    {
      title: "Head of Training — Prefectorial Board (Victoria School)",
      description:
        "Facilitated monthly training sessions and annual camps.",
      icon: Users,
    },
    {
      title: "Dragon Boating — Raffles Institution",
      description:
        "Placed 3rd in National A-Division (2023).",
      icon: Anchor,
    },
    {
      title: "Tutor — Project Nova (Raffles Institution)",
      description:
        "Provided weekly tutoring for children of incarcerated parents.",
      icon: Heart,
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
            <span className="mono text-primary text-lg">05.</span>
            Awards & Leadership
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          {/* Awards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                className="card-glass p-5 group hover:border-primary/50 transition-colors duration-300 dragon-scale"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <award.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground text-sm leading-tight">
                      {award.title}
                    </h3>
                    <p className="text-accent text-sm mt-1">
                      {award.achievement}
                    </p>
                    <p className="mono text-xs text-muted-foreground mt-2">
                      {award.year}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Leadership & Activities */}
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="text-accent">⟡</span> Leadership & Activities
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {leadership.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-lg border border-border/30 hover:border-accent/30 transition-colors duration-300 group"
              >
                <div className="p-1.5 rounded bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-xs mt-1 leading-relaxed">
                    {item.description}
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

export default Awards;
