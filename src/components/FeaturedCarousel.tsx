import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface FeaturedItem {
  id: number;
  title: string;
  description: string;
  image: string;
  type: "artist" | "product";
}

interface FeaturedCarouselProps {
  items?: FeaturedItem[];
}

const FeaturedCarousel = ({ items = [] }: FeaturedCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Default items if none are provided
  const defaultItems: FeaturedItem[] = [
    {
      id: 1,
      title: "Ethereal Collection",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=800&q=80",
      type: "product",
    },
    {
      id: 2,
      title: "Aria Moonlight",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80",
      type: "artist",
    },
    {
      id: 3,
      title: "Luminous Serum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80",
      type: "product",
    },
    {
      id: 4,
      title: "Marcus Rey",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      type: "artist",
    },
  ];

  const displayItems = items.length > 0 ? items : defaultItems;

  // Auto-advance carousel
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % displayItems.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying, displayItems.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? displayItems.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % displayItems.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="w-full bg-slate-900 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-6 sm:mb-8 text-center">
          Featured <span className="text-blue-400">Works</span>
        </h2>

        <div className="relative overflow-hidden">
          {/* Main carousel */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-xl">
            {displayItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{
                  opacity: currentIndex === index ? 1 : 0,
                  scale: currentIndex === index ? 1 : 1.1,
                  zIndex: currentIndex === index ? 10 : 0,
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{
                    y: currentIndex === index ? 0 : 50,
                    opacity: currentIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="inline-block px-3 py-1 mb-3 sm:mb-4 rounded-full bg-blue-600/80 text-xs uppercase tracking-wider">
                    {item.type === "artist"
                      ? "Featured Artist"
                      : "Featured Product"}
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 max-w-xl text-sm sm:text-base mb-4 sm:mb-6">{item.description}</p>

                  <Button
                    variant="outline"
                    className="border-blue-500 text-blue-400 hover:bg-blue-950/50 hover:text-blue-300 text-sm sm:text-base"
                  >
                    Discover More
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-slate-900/50 border-blue-500/50 text-white hover:bg-blue-900/30 w-8 h-8 sm:w-10 sm:h-10"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-slate-900/50 border-blue-500/50 text-white hover:bg-blue-900/30 w-8 h-8 sm:w-10 sm:h-10"
            onClick={handleNext}
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>

          {/* Indicator dots */}
          <div className="flex justify-center mt-4 sm:mt-6 gap-2">
            {displayItems.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? "bg-blue-500 w-4 sm:w-6" : "bg-slate-500"}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {displayItems.map((item, index) => (
            <Card
              key={item.id}
              className={`overflow-hidden cursor-pointer transition-all duration-300 bg-slate-800 border-slate-700 ${currentIndex === index ? "ring-2 ring-blue-500" : "opacity-70"}`}
              onClick={() => handleDotClick(index)}
            >
              <CardContent className="p-0 relative aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-2 sm:p-3">
                  <p className="text-white text-xs sm:text-sm font-medium">{item.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarousel;