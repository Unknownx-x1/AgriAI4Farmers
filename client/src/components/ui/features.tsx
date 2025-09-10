import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import SoilIcon from '@/components/icons/soil-icon';
import WeatherIcon from '@/components/icons/weather-icon';
import AIIcon from '@/components/icons/ai-icon';

const features = [
  {
    id: 'soil-insights',
    icon: SoilIcon,
    title: 'Soil Insights',
    description: 'Analysis of soil pH, nutrients, and moisture',
    color: 'primary',
  },
  {
    id: 'weather-forecasting', 
    icon: WeatherIcon,
    title: 'Weather Forecasting',
    description: 'Real-time and long-term climate predictions',
    color: 'secondary',
  },
  {
    id: 'ai-predictions',
    icon: AIIcon,
    title: 'AI Predictions',
    description: 'Machine learning models for accurate yield forecasts',
    color: 'accent',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              data-testid={`feature-card-${feature.id}`}
            >
              <Card className="glass-card neon-border rounded-xl p-8 h-full hover:border-primary/50 transition-all duration-500 group">
                <CardContent className="p-0">
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      className={`w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-${feature.color}/10 group-hover:bg-${feature.color}/20 transition-colors duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                    </motion.div>
                    <h3 className={`text-2xl font-bold text-foreground mb-4 group-hover:text-${feature.color} transition-colors duration-300`}>
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
