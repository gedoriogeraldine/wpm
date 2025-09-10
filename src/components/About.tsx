import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { Users, Award, Target, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { number: "100+", label: "Lorem Ipsum", icon: <Award className="w-6 h-6" /> },
    { number: "50+", label: "Dolor Sit Amet", icon: <Users className="w-6 h-6" /> },
    { number: "15+", label: "Consectetur Adipiscing", icon: <Target className="w-6 h-6" /> },
    { number: "24/7", label: "Elit Sed Do", icon: <Zap className="w-6 h-6" /> },
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
              About Us
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h2 className="text-4xl font-serif font-bold text-white mb-6">Lorem Ipsum Dolor</h2>
              <p className="text-blue-200 text-lg leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-blue-300 text-lg leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=80"
                alt="Lorem ipsum"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-blue-800/30"
              >
                <div className="text-blue-400 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Values Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold text-white mb-12">Lorem Ipsum Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-blue-800/30">
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Lorem Ipsum</h3>
                <p className="text-blue-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-blue-800/30">
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Dolor Sit</h3>
                <p className="text-blue-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-blue-800/30">
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Consectetur</h3>
                <p className="text-blue-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;