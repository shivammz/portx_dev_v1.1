'use client'

import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Globe, 
  Link, 
  FileText, 
  Search, 
  Code,
  Zap,
  Shield,
  Smartphone
} from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'AI Personalization',
    description: 'Our AI analyzes your resume and creates a personalized portfolio that highlights your unique strengths and experience.',
    color: 'text-brand-purple'
  },
  {
    icon: Zap,
    title: 'Instant Generation',
    description: 'From resume upload to live website in under 60 seconds. No coding, no design skills required.',
    color: 'text-brand-pink'
  },
  {
    icon: Globe,
    title: 'Instant Hosting',
    description: 'Your portfolio goes live immediately on a custom subdomain. Share it instantly with potential employers.',
    color: 'text-brand-blue'
  },
  {
    icon: Link,
    title: 'Custom Subdomains',
    description: 'Get your own professional subdomain like yourname.portfoliox.dev. Upgrade for custom domain support.',
    color: 'text-green-400'
  },
  {
    icon: FileText,
    title: 'Resume-to-Website',
    description: 'Upload your resume and watch as AI transforms it into a beautiful, professional portfolio website.',
    color: 'text-yellow-400'
  },
  {
    icon: Search,
    title: 'SEO-Ready Output',
    description: 'Every portfolio is optimized for search engines with proper meta tags, structured data, and fast loading.',
    color: 'text-red-400'
  },
  {
    icon: Code,
    title: 'Export Source Code',
    description: 'Pro users can download the complete source code of their portfolio for further customization.',
    color: 'text-indigo-400'
  },
  {
    icon: Shield,
    title: 'Professional Quality',
    description: 'Designer-grade templates that look professional and help you stand out from the competition.',
    color: 'text-purple-400'
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimized',
    description: 'All portfolios are fully responsive and look perfect on desktop, tablet, and mobile devices.',
    color: 'text-cyan-400'
  }
]

export default function Features() {
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
            Everything you need to build your perfect portfolio
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Powerful features designed to help you create a professional portfolio 
            that showcases your skills and lands you your dream job.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                className="glass p-6 rounded-lg hover:bg-white/10 transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gradient transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className="btn-primary text-lg px-8 py-4">
            Start Building Your Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  )
}