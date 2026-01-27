import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32" ref={ref}>
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mono text-primary text-sm mb-4">05. What's Next?</p>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          
          <p className="max-w-md mx-auto text-muted-foreground mb-10">
            I'm currently looking for opportunities to work on impactful AI projects. 
            Whether you have a question or just want to say hi, I'll do my best to get back to you!
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              asChild
              size="lg"
              className="mono bg-transparent border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 text-base glow-primary animate-glow-pulse"
            >
              <a href="mailto:kxphan05@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Say Hello
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
