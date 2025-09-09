import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { Radio, Video, Mic, Camera, Monitor, Headphones, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Live Streaming",
      description: "Professional live streaming solutions for events, conferences, and entertainment with multi-platform distribution.",
      features: ["Multi-camera setup", "Real-time switching", "Interactive chat", "HD/4K quality"],
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Production",
      description: "Full-service video production from pre-production planning to post-production editing and delivery.",
      features: ["Concept development", "Professional filming", "Post-production", "Color grading"],
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Audio Engineering",
      description: "Crystal clear audio production, mixing, and mastering for all your broadcasting and media needs.",
      features: ["Sound design", "Audio mixing", "Noise reduction", "Mastering"],
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Event Coverage",
      description: "Comprehensive event documentation with multiple camera angles and professional editing.",
      features: ["Multi-cam coverage", "Drone footage", "Live editing", "Same-day delivery"],
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Broadcast Solutions",
      description: "Complete broadcasting infrastructure setup and management for television and online platforms.",
      features: ["Studio setup", "Equipment rental", "Technical support", "Training"],
      image: "https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=800&q=80"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Podcast Production",
      description: "Professional podcast recording, editing, and distribution services for content creators.",
      features: ["Studio recording", "Remote recording", "Editing & mixing", "Distribution"],
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Navbar transparent={false} />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Comprehensive broadcasting and media production services designed to bring 
              your vision to life with professional quality and cutting-edge technology.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-800/30 hover:border-blue-600/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                  <div className="absolute top-4 left-4 text-blue-300">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-blue-200 mb-4 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-blue-300 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    variant="outline"
                    className="w-full border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-blue-900"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-blue-800/30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our professional 
              broadcasting and media production services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
              >
                Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900"
              >
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;