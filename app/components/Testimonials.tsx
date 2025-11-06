'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Frontend Developer',
    company: 'Google',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    quote: 'PortfolioX helped me land my dream job at Google. The AI-generated portfolio was stunning and professional. I got 3x more interview requests after switching to my PortfolioX portfolio.',
    rating: 5,
    featured: true
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Full Stack Developer',
    company: 'Microsoft',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    quote: 'From resume to live website in under 2 minutes. The quality is incredible and saved me weeks of work. The templates are modern and the customization options are perfect.',
    rating: 5,
    featured: true
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'UX Designer',
    company: 'Airbnb',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    quote: 'The templates are gorgeous and the customization options are perfect. As a designer, I appreciate the attention to detail and the clean, modern aesthetic.',
    rating: 5,
    featured: false
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Product Manager',
    company: 'Stripe',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    quote: 'Professional, fast, and exactly what I needed. The AI understood my resume perfectly and created a portfolio that truly represents my experience and skills.',
    rating: 5,
    featured: false
  },
  {
    id: 5,
    name: 'Lisa Park',
    role: 'Software Engineer',
    company: 'Netflix',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    quote: 'I was skeptical about AI-generated portfolios, but PortfolioX exceeded my expectations. The result was better than what I could have built myself.',
    rating: 5,
    featured: true
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'DevOps Engineer',
    company: 'Amazon',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    quote: 'The hosting is instant and reliable. I love that I can share my portfolio immediately after creating it. The subdomain feature is a nice touch.',
    rating: 5,
    featured: false
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const featuredTestimonials = testimonials.filter(t => t.featured)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Join thousands of successful professionals
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how PortfolioX has helped developers, designers, and other professionals 
            land their dream jobs with stunning portfolios.
          </p>
        </motion.div>

        {/* Featured Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="glass rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-brand-purple/20" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="text-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center space-x-1 mb-6">
                  {[...Array(featuredTestimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl lg:text-2xl text-white font-medium mb-8 leading-relaxed">
                  "{featuredTestimonials[currentIndex].quote}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={featuredTestimonials[currentIndex].image}
                    alt={featuredTestimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="text-white font-semibold text-lg">
                      {featuredTestimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-400">
                      {featuredTestimonials[currentIndex].role} at {featuredTestimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 glass p-3 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 glass p-3 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-brand-purple' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="glass p-6 rounded-lg hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to join them?
          </h3>
          <p className="text-gray-400 mb-8">
            Create your professional portfolio in seconds and start getting noticed by top companies.
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Create Your Portfolio Now
          </button>
        </motion.div>
      </div>
    </section>
  )
}