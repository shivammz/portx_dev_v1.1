'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star, Users, Zap } from 'lucide-react'

export default function TrustLayer() {
  const companies = [
    'Google', 'Microsoft', 'Apple', 'Meta', 'Netflix', 'Spotify', 'Airbnb', 'Uber'
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Frontend Developer',
      company: 'TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      quote: 'PortfolioX helped me land my dream job at Google. The AI-generated portfolio was stunning and professional.',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      role: 'Full Stack Developer',
      company: 'StartupXYZ',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      quote: 'From resume to live website in under 2 minutes. The quality is incredible and saved me weeks of work.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      company: 'DesignStudio',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      quote: 'The templates are gorgeous and the customization options are perfect. Highly recommend!',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Product Manager',
      company: 'InnovateCo',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      quote: 'Professional, fast, and exactly what I needed. The AI understood my resume perfectly.',
      rating: 5
    }
  ]

  const portfolioExamples = [
    {
      name: 'Alex Thompson',
      role: 'React Developer',
      template: 'Modern',
      image: '/images/template-1.png',
      url: 'alex.portfoliox.dev'
    },
    {
      name: 'Maria Garcia',
      role: 'UI/UX Designer',
      template: 'Creative',
      image: '/images/template-2.png',
      url: 'maria.portfoliox.dev'
    },
    {
      name: 'James Wilson',
      role: 'Full Stack Dev',
      template: 'Professional',
      image: '/images/template-3.png',
      url: 'james.portfoliox.dev'
    },
    {
      name: 'Lisa Park',
      role: 'Frontend Engineer',
      template: 'Minimal',
      image: '/images/template-1.png',
      url: 'lisa.portfoliox.dev'
    },
    {
      name: 'Ryan Davis',
      role: 'Backend Developer',
      template: 'Dark',
      image: '/images/template-2.png',
      url: 'ryan.portfoliox.dev'
    },
    {
      name: 'Sophie Brown',
      role: 'Product Designer',
      template: 'Elegant',
      image: '/images/template-3.png',
      url: 'sophie.portfoliox.dev'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section A: Company Logos */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-8">
            Trusted by creators & teams
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <motion.div
                key={company}
                className="text-xl font-semibold text-gray-400 hover:text-white transition-colors cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section B: Resume → Website Transformation */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl p-8 lg:p-12 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Resume Side */}
              <motion.div
                className="text-center"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="glass-dark p-6 rounded-lg max-w-sm mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-white text-black p-4 rounded text-xs space-y-2">
                    <div className="font-bold text-center">JOHN DOE</div>
                    <div className="text-center text-gray-600">Frontend Developer</div>
                    <div className="border-t pt-2 space-y-1">
                      <div>📧 john@email.com</div>
                      <div>📱 (555) 123-4567</div>
                      <div>🌐 linkedin.com/in/johndoe</div>
                    </div>
                    <div className="border-t pt-2">
                      <div className="font-semibold">EXPERIENCE</div>
                      <div className="text-xs">Senior Developer at TechCorp</div>
                      <div className="text-xs">Frontend Dev at StartupXYZ</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 mt-4 font-medium">Your Resume</p>
              </motion.div>

              {/* Arrow */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-8 h-8 text-brand-purple" />
                </motion.div>
              </div>

              {/* Website Side */}
              <motion.div
                className="text-center"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="glass-dark p-4 rounded-lg max-w-sm mx-auto transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded text-xs">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 bg-gradient-brand rounded-full"></div>
                      <div>
                        <div className="text-white font-bold">John Doe</div>
                        <div className="text-gray-400">Frontend Developer</div>
                      </div>
                    </div>
                    <div className="space-y-2 mb-3">
                      <div className="h-2 bg-white/20 rounded w-full"></div>
                      <div className="h-2 bg-white/20 rounded w-3/4"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-12 bg-white/10 rounded"></div>
                      <div className="h-12 bg-white/10 rounded"></div>
                    </div>
                  </div>
                </div>
                <p className="text-white mt-4 font-medium">Beautiful Live Site</p>
              </motion.div>
            </div>

            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-white font-semibold">
                From resume to a beautiful live site — instant.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Section C: Testimonials Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Loved by developers worldwide
            </h2>
            <p className="text-gray-400 text-lg">
              See what our users are saying about their experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="glass p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section D: Generated Portfolios Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              See real portfolios created in seconds
            </h2>
            <p className="text-gray-400 text-lg">
              Browse through portfolios built by our AI
            </p>
          </div>

          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-6 w-max">
              {portfolioExamples.map((portfolio, index) => (
                <motion.div
                  key={portfolio.name}
                  className="glass p-4 rounded-lg w-80 flex-shrink-0 cursor-pointer hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-gray-800 rounded-lg p-3 mb-4 h-48 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-brand rounded-full mx-auto mb-3"></div>
                      <div className="text-white font-semibold">{portfolio.name}</div>
                      <div className="text-gray-400 text-sm">{portfolio.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">{portfolio.name}</div>
                      <div className="text-gray-400 text-sm">{portfolio.template} Template</div>
                    </div>
                    <div className="text-brand-purple text-sm font-medium">
                      {portfolio.url}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <motion.button
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More Examples
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}