import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Play, Star, Sparkles, Heart } from "lucide-react";

interface Service {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

interface HeroSectionProps {
  services?: Service[];
}

const HeroSection = ({
  services = [
    {
      id: 1,
      name: "Filipino Artists",
      title: "Pinoy Teleserye & Movies",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=80",
      icon: <Star className="w-6 h-6" />,
    },
    {
      id: 2,
      name: "Beauty Products",
      title: "Premium Cosmetics Line",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      id: 3,
      name: "Artist Collaborations",
      title: "Celebrity Endorsements",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
      icon: <Heart className="w-6 h-6" />,
    },
  ],
}: HeroSectionProps) => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length]);

  const currentService = services[currentServiceIndex];

  return (
    <div className="relative w-full h-[800px] overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-pink-600/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-purple-600/15 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative h-full w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-center z-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 space-y-6">
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Play className="w-5 h-5 text-pink-300" />
              <h2 className="text-sm md:text-base uppercase tracking-widest text-pink-300 font-medium">
                Premiere WaterPlus Productions
              </h2>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Filipino Artists
            </motion.h1>
            
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-xl md:text-2xl text-pink-200 font-medium">
                & Premium Beauty Products
              </p>
              <p className="text-lg text-pink-300/80 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </motion.div>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-lg"
              >
                Explore Artists <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pink-300 text-pink-300 hover:bg-pink-300 hover:text-pink-900"
              >
                Shop Beauty
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            className="w-full md:w-1/2 h-80 md:h-96"
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={currentService.image}
                  alt={currentService.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="text-pink-300">
                        {currentService.icon}
                      </div>
                      <h3 className="text-white font-bold text-lg">{currentService.name}</h3>
                    </div>
                    <p className="text-pink-100 text-sm">{currentService.description}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Service indicators */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="flex items-center space-x-3 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3">
            {services.map((service, index) => (
              <button
                key={service.id}
                className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
                  index === currentServiceIndex 
                    ? "bg-pink-500/30 text-pink-300" 
                    : "text-pink-400/60 hover:text-pink-300"
                }`}
                onClick={() => setCurrentServiceIndex(index)}
              >
                {service.icon}
                <span className="text-sm font-medium hidden sm:block">{service.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;