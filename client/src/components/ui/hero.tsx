import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedStars from './animated-stars';

export default function Hero() {
  const handleTryDemo = () => {
    // TODO: Navigate to demo page
    console.log('Try Demo clicked');
  };

  const handleLearnMore = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <AnimatedStars />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Predict Crop Yields
          <br />
          <span className="text-primary text-glow">with AI Precision</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Leverage AI and data-driven insights to forecast crop yields using soil health, weather patterns, and agricultural data.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            onClick={handleTryDemo}
            className="bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 glow-primary animate-float"
            size="lg"
            data-testid="button-try-demo"
          >
            Try Demo
          </Button>
          <Button 
            onClick={handleLearnMore}
            variant="outline"
            className="border-2 border-primary text-primary px-8 py-4 text-lg font-semibold hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_var(--primary)]"
            size="lg"
            data-testid="button-learn-more"
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
