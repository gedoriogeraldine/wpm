import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeaturedCarousel from "./FeaturedCarousel";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentArtistIndex, setCurrentArtistIndex] = useState(0);
  const [showWelcomePopup, setShowWelcomePopup] = useState(true);

  const artists = [
    {
      name: "Lorem Ipsum",
      specialty: "Dolor Sit Amet",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    },
    {
      name: "Consectetur Adipiscing",
      specialty: "Elit Sed Do",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    },
    {
      name: "Eiusmod Tempor",
      specialty: "Incididunt Ut",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePreviousArtist = () => {
    setCurrentArtistIndex((prev) => 
      prev === 0 ? artists.length - 1 : prev - 1
    );
  };

  const handleNextArtist = () => {
    setCurrentArtistIndex((prev) => 
      (prev + 1) % artists.length
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Improved Welcome Popup */}
      {showWelcomePopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-700 rounded-2xl p-8 sm:p-10 max-w-lg w-full border border-slate-600 shadow-2xl relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
            
            <div className="text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Welcome to WaterPlus Productions
                </h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <p className="text-slate-300 mb-8 text-base sm:text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <Button
                  onClick={() => setShowWelcomePopup(false)}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Explore Now
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowWelcomePopup(false)}
                  className="flex-1 border-slate-500 text-slate-300 hover:bg-slate-700 hover:text-white py-3 px-6 rounded-lg font-medium transition-all duration-300"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}

      <Navbar isScrolled={scrollY > 50} />

      <main>
        <HeroSection />

        {/* About Us Section - WaterPlus Productions */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                About WaterPlus Productions
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                    Our Vision
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    WaterPlus Productions stands at the forefront of creative excellence, delivering innovative content that captivates audiences worldwide. We specialize in high-quality film production, artistic collaborations, and cutting-edge visual storytelling.
                  </p>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Our commitment to excellence drives us to push boundaries and create memorable experiences that resonate with viewers across all platforms and mediums.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl p-6 border border-blue-500/20">
                    <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                    <div className="text-slate-300">Years of Excellence</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/20">
                    <div className="text-3xl font-bold text-purple-400 mb-2">200+</div>
                    <div className="text-slate-300">Projects Completed</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80"
                    alt="WaterPlus Productions Studio"
                    className="w-full h-96 lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                    <div className="text-white font-bold text-lg">WaterPlus</div>
                    <div className="text-cyan-300 text-sm">Productions</div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-full blur-2xl"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-xl"></div>
              </motion.div>
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-16 sm:mt-20 text-center"
            >
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-slate-600 max-w-4xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
                  Our Mission
                </h3>
                <p className="text-slate-300 text-lg sm:text-xl leading-relaxed">
                  "To create extraordinary visual experiences that inspire, entertain, and connect people through the power of storytelling. At WaterPlus Productions, we believe every project is an opportunity to make a lasting impact."
                </p>
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                    Learn More About Us
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Artists Section with Navigation */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-12 text-center"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Featured Artists
              </h2>
              <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto px-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>

            <div className="relative">
              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-slate-900/50 border-blue-500/50 text-white hover:bg-blue-900/30 w-10 h-10"
                onClick={handlePreviousArtist}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-slate-900/50 border-blue-500/50 text-white hover:bg-blue-900/30 w-10 h-10"
                onClick={handleNextArtist}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {artists.map((artist, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`bg-slate-700 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-900/20 transition duration-300 ${
                      currentArtistIndex === index ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <div className="h-48 sm:h-56 lg:h-64 overflow-hidden">
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="w-full h-full object-cover transition duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold mb-2">
                        {artist.name}
                      </h3>
                      <p className="text-blue-400 mb-3 sm:mb-4 text-sm sm:text-base">
                        {artist.specialty}
                      </p>
                      <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center text-sm sm:text-base">
                        Lorem Ipsum
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Watch Section - matching navbar "Watch" */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-4 sm:mb-6 text-white">
                  Watch
                </h2>
                <p className="text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-slate-300 mb-6 sm:mb-8 text-sm sm:text-base">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md transition duration-300 text-sm sm:text-base">
                  Lorem Ipsum
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="https://pbs.twimg.com/media/D3zD2EOU4AAk62O.jpg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-24 sm:w-32 h-24 sm:h-32 bg-blue-600 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-24 sm:w-32 h-24 sm:h-32 bg-cyan-600 rounded-full opacity-20 blur-xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Catalogue Section - matching navbar "Catalogue" */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Catalogue
              </h2>
              <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto px-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>

            <FeaturedCarousel />
          </div>
        </section>

        {/* Newsletter Section (formerly News & Events) */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-blue-800 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-cyan-800 to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6 text-white">
                Newsletter
              </h2>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto px-4">
                <input
                  type="email"
                  placeholder="Lorem ipsum email"
                  className="flex-grow px-4 py-2 sm:py-3 rounded-md bg-slate-700 border border-slate-600 focus:outline-none focus:border-blue-500 text-sm sm:text-base"
                />
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md transition duration-300 text-sm sm:text-base">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                Productions
              </h3>
              <p className="text-slate-400 mb-3 sm:mb-4 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <div className="flex justify-center sm:justify-start space-x-4">
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">
                Lorem Ipsum Links
              </h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition"
                  >
                    Artists
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition"
                  >
                    Watch
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition"
                  >
                    Catalogue
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">
                Lorem Ipsum
              </h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition"
                  >
                    Newsletter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition"
                  >
                    Lorem Ipsum
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition"
                  >
                    Dolor Sit Amet
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">
                Lorem Ipsum
              </h3>
              <address className="not-italic text-slate-400 text-sm sm:text-base">
                <p className="mb-2">123 Lorem Ipsum</p>
                <p className="mb-2">Dolor Sit Amet, Consectetur</p>
                <p className="mb-2">Adipiscing Elit</p>
                <p className="mb-2">Email: lorem@ipsum.com</p>
                <p>Phone: +1 (555) 123-4567</p>
              </address>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 sm:pt-8 mt-6 sm:mt-8 text-center">
            <p className="text-slate-500 text-sm sm:text-base">
              &copy; {new Date().getFullYear()} Lorem Ipsum Productions. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;