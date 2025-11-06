'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Upload, User, Zap, Globe } from 'lucide-react'
import CTAs from './CTAs'

export default function Hero() {
  const steps = [
    { icon: User, label: 'Input', description: 'Resume or manual entry' },
    { icon: Zap, label: 'Build', description: 'AI generates your site' },
    { icon: Globe, label: 'Live', description: 'Instant hosting' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-purple/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-pink/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Build your portfolio in{' '}
              <span className="text-gradient">seconds</span> using your resume or telling a bit about yourself
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              AI-powered, designer-grade portfolios — instantly. No design skills required.
            </motion.p>

            {/* 3-Step Process */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {steps.map((step, index) => (
                <div key={step.label} className="flex items-center space-x-3">
                  <div className="glass p-3 rounded-full">
                    <step.icon className="w-6 h-6 text-brand-purple" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">{step.label}</div>
                    <div className="text-sm text-gray-400">{step.description}</div>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-gray-500 hidden sm:block" />
                  )}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <CTAs />
            </motion.div>
          </motion.div>

          {/* Right Content - Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Device Frame */}
              <motion.div
                className="glass p-4 rounded-2xl shadow-2xl"
                animate={{ 
                  rotateY: [0, 5, 0],
                  rotateX: [0, -2, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  {/* Browser Bar */}
                  <div className="flex items-center space-x-2 p-3 bg-gray-800 border-b border-gray-700">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-gray-700 rounded px-3 py-1 text-xs text-gray-300">
                      john.portfoliox.dev
                    </div>
                  </div>
                  
                  {/* Portfolio Preview */}
                  <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-brand rounded-full"></div>
                      <div>
                        <div className="h-4 bg-white/20 rounded w-32 mb-2"></div>
                        <div className="h-3 bg-white/10 rounded w-24"></div>
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="h-3 bg-white/10 rounded w-full"></div>
                      <div className="h-3 bg-white/10 rounded w-3/4"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-20 bg-white/5 rounded-lg"></div>
                      <div className="h-20 bg-white/5 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 glass p-3 rounded-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Zap className="w-6 h-6 text-brand-purple" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 glass p-3 rounded-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Globe className="w-6 h-6 text-brand-blue" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}