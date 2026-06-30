import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Priya Agarwal",
    location: "Agra, UP",
    initials: "P",
    color: "bg-green-800",
    text: "The frozen green peas from Shri Balaji are absolutely amazing. No ice crystals, bright green color, and they taste fresh. We've switched from market-bought completely!",
  },
  {
    name: "Vikas Gupta",
    location: "Mathura, UP",
    initials: "V",
    color: "bg-orange-500",
    text: "Their soya chaap is perfect for restaurant use. Consistent quality, great texture, and the pricing makes sense for bulk orders. Highly recommended for food business!",
  },
  {
    name: "Amit Verma",
    location: "Delhi NCR",
    initials: "A",
    color: "bg-green-900",
    text: "I use their french fries for my snack shop. Crispy, golden, no sogginess. Customers love them. Delivery is always on time and packaging is excellent too!",
  },
  {
    name: "Neha Sharma",
    location: "Kanpur, UP",
    initials: "N",
    color: "bg-pink-600",
    text: "Their sweet corn is a staple in my kitchen now. So sweet, juicy, and perfect for soups and salads. It saves me so much prep time during busy mornings.",
  },
  {
    name: "Ravi Kumar",
    location: "Agra, UP",
    initials: "R",
    color: "bg-blue-600",
    text: "Best frozen paneer I have ever used. It stays remarkably soft after thawing, unlike other brands that get rubbery. My catering clients always compliment the dishes.",
  },
  {
    name: "Sunita Singh",
    location: "Lucknow, UP",
    initials: "S",
    color: "bg-purple-600",
    text: "The mixed vegetables are a lifesaver. The dice is perfectly uniform, and they hold their shape well in curries. Excellent quality control from Shri Balaji.",
  },
  {
    name: "Rahul Jain",
    location: "Jaipur, RJ",
    initials: "R",
    color: "bg-red-600",
    text: "Fantastic frozen momos! My cafe customers keep asking for more. They steam up beautifully and don't break apart. A highly profitable addition to our menu.",
  },
  {
    name: "Pooja Desai",
    location: "Noida, UP",
    initials: "P",
    color: "bg-teal-600",
    text: "I buy their frozen aloo tikki for quick evening snacks for the kids. They crisp up perfectly in the air fryer with zero hassle. Truly great taste and convenience.",
  }
];

const Testimonials = () => {
  // Start the index in the middle of our duplicated array to allow backwards sliding immediately
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // We duplicate the list 3 times: [Buffer Left] + [Actual Display] + [Buffer Right]
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  // The Magic Trick: When the CSS sliding animation finishes, check if we hit a buffer.
  // If we did, instantly (with transition turned off) snap back to the middle matching set.
  const handleTransitionEnd = () => {
    if (currentIndex >= testimonials.length * 2) {
      // Reached the right side
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - testimonials.length);
    } else if (currentIndex <= 0) {
      // Reached the left side
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + testimonials.length);
    }
  };

  return (
    <div className="text-center my-16 px-4 max-w-6xl mx-auto carousel-container relative">
      
      {/* We removed the CSS transition from here and put it in the inline style below so React can toggle it */}
      <style>{`
        .carousel-container {
          --visible-cards: 1;
        }
        @media (min-width: 768px) {
          .carousel-container { --visible-cards: 2; }
        }
        @media (min-width: 1024px) {
          .carousel-container { --visible-cards: 3; }
        }
        .carousel-track {
          display: flex;
        }
        .carousel-item {
          flex: 0 0 calc(100% / var(--visible-cards));
          padding: 0 12px;
        }
      `}</style>

      <p className="text-2xl font-medium text-gray-800">
        What Our Customers Say
      </p>
      <p className="text-gray-400 mt-2 mb-10">
        Real feedback from our happy clients
      </p>

      {/* Controls and Track Container */}
      <div className="relative flex items-center justify-center group">
        
        {/* Left Arrow */}
        <button 
          onClick={prevSlide}
          className="absolute -left-5 md:-left-10 z-10 bg-white shadow-md hover:bg-gray-50 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110 focus:outline-none"
          aria-label="Previous testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Hidden Overflow Wrapper */}
        <div className="overflow-hidden w-full py-4 -mx-3">
          
          {/* The Sliding Track */}
          <div 
            className="carousel-track" 
            onTransitionEnd={handleTransitionEnd}
            style={{ 
              transform: `translateX(calc(-100% / var(--visible-cards) * ${currentIndex}))`,
              // This is where React dynamically toggles the slide effect on or off
              transition: isTransitioning ? 'transform 0.6s ease-in-out' : 'none'
            }}
          >
            {extendedTestimonials.map((item, index) => (
              <div key={index} className="carousel-item">
                
                {/* Individual Card */}
                <div className=" bg-white shadow-lg rounded-2xl p-6  text-left flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="text-orange-400 text-lg mb-3">
                    ⭐⭐⭐⭐⭐
                  </div>

                  <p className="text-gray-600 italic mb-6 flex-grow">
                    "{item.text}"
                  </p>

                  <div className="flex items-center gap-3 mt-auto">
                    <div className={`${item.color} text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shrink-0`}>
                      {item.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-400">
                        📍 {item.location}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextSlide}
          className="absolute -right-5 md:-right-10 z-10 bg-white shadow-md hover:bg-gray-50 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110 focus:outline-none"
          aria-label="Next testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>
    </div>
  );
};

export default Testimonials;