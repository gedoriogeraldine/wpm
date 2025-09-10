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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://media.philstar.com/images/articles/top-male_2018-05-15_14-17-41.jpg",
      icon: <Star className="w-6 h-6" />,
    },
    {
      id: 2,
      name: "Beauty Products",
      title: "Premium Cosmetics Line",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://od2-image-api.abs-cbn.com/prod/20241027171048/a5cc2900f8ff172235a670177844478e4fd489521c21dc8e70a1f0cb8cb08614.jpg?w=1200&h=800",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      id: 3,
      name: "Artist Collaborations",
      title: "Celebrity Endorsements",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
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
    <div className="relative w-full min-h-screen h-[100vh] sm:h-[800px] lg:h-[900px] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 rounded-full bg-blue-600/10 blur-3xl"
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
          className="absolute top-1/4 -right-20 w-60 sm:w-72 lg:w-80 h-60 sm:h-72 lg:h-80 rounded-full bg-cyan-600/15 blur-3xl"
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
      <div className="relative h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center z-10 pt-16 sm:pt-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
            <motion.div
              className="flex items-center justify-center lg:justify-start space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
              <h2 className="text-xs sm:text-sm uppercase tracking-widest text-blue-300 font-medium">
                Premiere WaterPlus Productions
              </h2>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Lorem Ipsum
            </motion.h1>

            <motion.div
              className="space-y-3 sm:space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-200 font-medium">
                & lorem ipsum dolor sit amit
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-blue-300/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg text-sm sm:text-base"
              >
                Explore Artists <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 text-sm sm:text-base"
              >
                Shop Beauty
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-96"
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
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                      <div className="text-blue-300">{currentService.icon}</div>
                      <h3 className="text-white font-bold text-sm sm:text-lg">
                        {currentService.name}
                      </h3>
                    </div>
                    <p className="text-blue-100 text-xs sm:text-sm">
                      {currentService.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Service indicators */}
        <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center">
          <div className="flex items-center space-x-2 sm:space-x-3 bg-black/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3">
            {services.map((service, index) => (
              <button
                key={service.id}
                className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1 sm:py-2 rounded-full transition-all duration-300 ${
                  index === currentServiceIndex
                    ? "bg-blue-500/30 text-blue-300"
                    : "text-blue-400/60 hover:text-blue-300"
                }`}
                onClick={() => setCurrentServiceIndex(index)}
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5">{service.icon}</div>
                <span className="text-xs sm:text-sm font-medium hidden sm:block">
                  {service.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
