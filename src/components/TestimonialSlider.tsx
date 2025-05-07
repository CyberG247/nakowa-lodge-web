
import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Business Traveler',
    comment: 'B. Nakowa Lodge exceeded all my expectations. The rooms are spacious and comfortable, and the staff went above and beyond to meet my needs. I will definitely be returning on my next business trip to Dutse.',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    id: 2,
    name: 'Michael Adamu',
    role: 'Family Vacation',
    comment: 'Our family had an amazing stay at B. Nakowa Lodge. The facilities are top-notch, and the attention to detail is impressive. The kids especially loved the swimming pool!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    name: 'Amina Hassan',
    role: 'Wedding Guest',
    comment: 'We chose B. Nakowa Lodge to host our wedding guests, and it was the perfect choice. The service was impeccable, and our guests are still talking about how beautiful the accommodations were.',
    avatar: 'https://randomuser.me/api/portraits/women/42.jpg',
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12 bg-accent-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">What Our Guests Say</h2>
          <div className="w-20 h-1 bg-accent-red mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full px-4"
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-6">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-full" 
                      />
                    </div>
                    <p className="text-gray-600 italic mb-6">"{testimonial.comment}"</p>
                    <h4 className="font-bold text-navy text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-accent-red w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
