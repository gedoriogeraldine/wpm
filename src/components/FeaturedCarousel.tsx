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
      description: "A stunning blend of colors inspired by cosmic phenomena",
      image:
        "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=800&q=80",
      type: "product",
    },
    {
      id: 2,
      title: "Aria Moonlight",
      description:
        "Award-winning makeup artist specializing in avant-garde looks",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80",
      type: "artist",
    },
    {
      id: 3,
      title: "Luminous Serum",
      description: "Revolutionary formula for radiant, glowing skin",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80",
      type: "product",
    },
    {
      id: 4,
      title: "Marcus Rey",
      description: "Visionary stylist known for creating iconic runway looks",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
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
    <div className="w-full bg-black py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 text-center">
          Featured <span className="text-purple-400">Works</span>
        </h2>

        <div className="relative overflow-hidden">
          {/* Main carousel */}
          <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-xl">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-8 text-white"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{
                    y: currentIndex === index ? 0 : 50,
                    opacity: currentIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="inline-block px-3 py-1 mb-4 rounded-full bg-purple-600/80 text-xs uppercase tracking-wider">
                    {item.type === "artist"
                      ? "Featured Artist"
                      : "Featured Product"}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 max-w-xl">{item.description}</p>

                  <Button
                    variant="outline"
                    className="mt-6 border-purple-500 text-purple-400 hover:bg-purple-950/50 hover:text-purple-300"
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
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/50 border-purple-500/50 text-white hover:bg-purple-900/30"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/50 border-purple-500/50 text-white hover:bg-purple-900/30"
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Indicator dots */}
          <div className="flex justify-center mt-6 gap-2">
            {displayItems.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? "bg-purple-500 w-6" : "bg-gray-500"}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {displayItems.map((item, index) => (
            <Card
              key={item.id}
              className={`overflow-hidden cursor-pointer transition-all duration-300 ${currentIndex === index ? "ring-2 ring-purple-500" : "opacity-70"}`}
              onClick={() => handleDotClick(index)}
            >
              <CardContent className="p-0 relative aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                  <p className="text-white text-sm font-medium">{item.title}</p>
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
