import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import {
  Users,
  Award,
  Target,
  Zap,
  Camera,
  Film,
  Star,
  Globe,
} from "lucide-react";

const About = () => {
  const stats = [
    {
      number: "15+",
      label: "Lorem Ipsum",
      icon: <Award className="w-8 h-8" />,
    },
    {
      number: "200+",
      label: "Dolor Sit Amet",
      icon: <Film className="w-8 h-8" />,
    },
    {
      number: "50+",
      label: "Consectetur Elit",
      icon: <Users className="w-8 h-8" />,
    },
    {
      number: "24/7",
      label: "Adipiscing Elit",
      icon: <Zap className="w-8 h-8" />,
    },
  ];

  const values = [
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      icon: <Camera className="w-12 h-12" />,
    },
    {
      title: "Dolor Sit Amet",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      icon: <Star className="w-12 h-12" />,
    },
    {
      title: "Consectetur",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      icon: <Globe className="w-12 h-12" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Navbar transparent={false} />

      <div className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Lorem Ipsum Dolor Sit Amet
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 text-white">
                    Lorem Ipsum
                  </h2>
                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://94753630-f402-4c74-a9d5-3106094be1c4.canvases.tempo.build/logowaterplus.jpg"
                    alt="Lorem Ipsum Studio"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                  {/* Floating Brand Element */}
                  <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <div className="text-white font-bold text-2xl">Lorem</div>
                    <div className="text-cyan-300 text-lg">Ipsum</div>
                    <div className="text-slate-300 text-sm mt-2">Dolor Sit</div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-full blur-2xl"></div>
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Lorem Ipsum Dolor
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-white mb-3">
                    {stat.number}
                  </div>
                  <div className="text-slate-300 text-lg font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 text-white">
                Lorem Ipsum Consectetur
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-blue-400 mb-6 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    {value.title}
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed text-center">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-3xl p-12 sm:p-16 border border-slate-600 max-w-5xl mx-auto relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>

                <div className="relative z-10">
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Lorem Ipsum Mission
                  </h2>
                  <blockquote className="text-xl sm:text-2xl text-slate-300 leading-relaxed mb-8 italic">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
                      Lorem Ipsum
                    </button>
                    <button className="border border-slate-500 text-slate-300 hover:bg-slate-700 hover:text-white px-8 py-4 rounded-xl font-medium transition-all duration-300">
                      Dolor Sit Amet
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
