import React from 'react';
import { LightbulbIcon, Layers, Zap, Lock, Globe, LineChart } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      icon: <LightbulbIcon className="h-8 w-8 text-amber-500" />,
      title: "Smart Design",
      description: "AI-powered design suggestions that adapt to your brand and style preferences."
    },
    {
      icon: <Layers className="h-8 w-8 text-blue-500" />,
      title: "Component Library",
      description: "Extensive collection of pre-built components to accelerate your development process."
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-500" />,
      title: "Lightning Fast",
      description: "Optimized performance ensures your projects load quickly and run smoothly."
    },
    {
      icon: <Lock className="h-8 w-8 text-green-500" />,
      title: "Secure by Default",
      description: "Built-in security features protect your data and user information."
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-500" />,
      title: "Global CDN",
      description: "Deploy to our worldwide network for the fastest possible load times."
    },
    {
      icon: <LineChart className="h-8 w-8 text-rose-500" />,
      title: "Analytics",
      description: "Comprehensive analytics to understand user behavior and optimize performance."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-50 to-white"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Packed with Everything You Need</h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
            Our platform includes all the tools and features you need to create exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;