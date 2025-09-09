import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { Play, ExternalLink, Calendar, Users } from "lucide-react";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "live-streaming", name: "Live Streaming" },
    { id: "video-production", name: "Video Production" },
    { id: "events", name: "Event Coverage" },
    { id: "corporate", name: "Corporate" }
  ];

  const projects = [
    {
      id: 1,
      title: "Tech Conference 2024",
      category: "live-streaming",
      description: "Multi-day technology conference with 5,000+ attendees streamed globally",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      stats: { viewers: "50K+", duration: "3 days", cameras: "8 cameras" },
      tags: ["Live Streaming", "Multi-Camera", "Interactive"]
    },
    {
      id: 2,
      title: "Corporate Brand Film",
      category: "video-production",
      description: "Premium brand documentary showcasing company culture and values",
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80",
      stats: { duration: "5 min", views: "2M+", awards: "3 awards" },
      tags: ["Documentary", "Corporate", "Cinematic"]
    },
    {
      id: 3,
      title: "Music Festival Live",
      category: "events",
      description: "Three-stage music festival with live streaming and broadcast coverage",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
      stats: { attendees: "25K", streams: "100K+", stages: "3 stages" },
      tags: ["Music", "Festival", "Multi-Stage"]
    },
    {
      id: 4,
      title: "Product Launch Event",
      category: "corporate",
      description: "High-profile product launch with global streaming and media coverage",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=800&q=80",
      stats: { reach: "1M+", languages: "5 languages", platforms: "10 platforms" },
      tags: ["Product Launch", "Global", "Multi-Platform"]
    },
    {
      id: 5,
      title: "Educational Webinar Series",
      category: "live-streaming",
      description: "Weekly educational content series with interactive Q&A sessions",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      stats: { episodes: "52 episodes", participants: "10K+", engagement: "95%" },
      tags: ["Education", "Series", "Interactive"]
    },
    {
      id: 6,
      title: "Documentary Series",
      category: "video-production",
      description: "Award-winning documentary series exploring modern technology impact",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
      stats: { episodes: "6 episodes", runtime: "45 min each", awards: "5 awards" },
      tags: ["Documentary", "Series", "Award-Winning"]
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
              Our Portfolio
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Explore our collection of successful broadcasting and media production 
              projects that showcase our expertise and creativity.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                    : "border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-blue-900"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm text-white border-white/30"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </div>
                    
                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-blue-600/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-blue-200 mb-4 text-sm leading-relaxed">{project.description}</p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {Object.entries(project.stats).map(([key, value], statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="text-blue-300 text-xs uppercase tracking-wider mb-1">
                            {key}
                          </div>
                          <div className="text-white font-semibold text-sm">{value}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-blue-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>2024</span>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-blue-300 hover:text-white p-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-blue-800/30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Let's discuss your next broadcasting or media production project 
              and bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
              >
                Start Your Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;