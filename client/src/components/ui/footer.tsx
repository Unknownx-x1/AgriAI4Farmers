import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-primary/20 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      
      <div className="container mx-auto px-6 text-center">
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="footer-text"
        >
          © 2025 AgriAI. All rights reserved. Contact:{' '}
          <a 
            href="mailto:hello@agriai.com" 
            className="text-primary hover:text-accent transition-colors duration-300 hover:drop-shadow-[0_0_8px_var(--primary)]"
            data-testid="contact-email"
          >
            hello@agriai.com
          </a>
        </motion.p>
      </div>
    </footer>
  );
}
