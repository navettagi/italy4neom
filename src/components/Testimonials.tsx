import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Product Designer",
      company: "DesignCraft",
      content: "This platform has completely transformed our workflow. The collaboration features alone have cut our design time in half, and the integration with our existing tools was seamless.",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "CTO",
      company: "TechFlow Inc.",
      content: "As a company with distributed teams, finding a platform that allows us to collaborate effectively was challenging. This solution not only solved that problem but enhanced our entire development process.",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Frontend Developer",
      company: "WebSolutions",
      content: "The component library and design system tools have revolutionized how we approach building consistent UIs. Our development velocity has increased dramatically while maintaining quality.",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 4
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50 relative">
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-slate-50"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Designers & Developers</h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
            Don't just take our word for it. See what our customers have to say about their experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="min-w-full px-4">
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`}
                          />
                        ))}
                      </div>
                      <p className="text-slate-700 text-lg md:text-xl italic mb-6">"{testimonial.content}"</p>
                      <div className="flex items-center">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="h-12 w-12 rounded-full mr-4"
                        />
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-slate-500 text-sm">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-slate-700" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-slate-700" />
            </button>
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 w-2 rounded-full mx-1 ${
                  i === activeIndex ? 'bg-slate-800 w-6' : 'bg-slate-300'
                } transition-all`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;