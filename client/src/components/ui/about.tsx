import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-muted/20 to-background relative">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-primary mb-8 text-glow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About AgriAI
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          data-testid="about-description"
        >
          AgriAI leverages artificial intelligence to empower farmers with data-driven decisions, driving sustainable agricultural practices and improved crop yields.
        </motion.p>
      </div>
    </section>
  );
}
