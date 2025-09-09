import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "info@waterplus.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "123 Media Street, Studio City, CA 91604",
      description: "Our main production facility"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "24/7 Support Available",
      description: "Emergency services available"
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
              Contact Us
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your vision to life? Get in touch with our team of 
              broadcasting and media production experts.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-800/30"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-serif font-bold text-white mb-6">
                Get a Free Quote
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-blue-300 text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/10 border-blue-700/50 text-white placeholder-blue-300/50"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-blue-300 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/10 border-blue-700/50 text-white placeholder-blue-300/50"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-blue-300 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-white/10 border-blue-700/50 text-white placeholder-blue-300/50"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-blue-300 text-sm font-medium mb-2">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-blue-700/50 text-white rounded-md px-3 py-2"
                    >
                      <option value="" className="bg-slate-800">Select a service</option>
                      <option value="live-streaming" className="bg-slate-800">Live Streaming</option>
                      <option value="video-production" className="bg-slate-800">Video Production</option>
                      <option value="audio-engineering" className="bg-slate-800">Audio Engineering</option>
                      <option value="event-coverage" className="bg-slate-800">Event Coverage</option>
                      <option value="broadcast-solutions" className="bg-slate-800">Broadcast Solutions</option>
                      <option value="podcast-production" className="bg-slate-800">Podcast Production</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-blue-300 text-sm font-medium mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white/10 border-blue-700/50 text-white placeholder-blue-300/50 min-h-[120px]"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                >
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-800/30">
                <h2 className="text-3xl font-serif font-bold text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-blue-200 mb-8 leading-relaxed">
                  We're here to help bring your broadcasting and media production 
                  vision to life. Reach out to us through any of the channels below.
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-blue-400 mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                        <p className="text-blue-300 font-medium">{info.details}</p>
                        <p className="text-blue-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-800/30">
                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                  Our Location
                </h3>
                <div className="bg-blue-900/30 rounded-xl h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                    <p className="text-blue-300">Interactive Map</p>
                    <p className="text-blue-400 text-sm">Coming Soon</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;