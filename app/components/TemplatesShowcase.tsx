'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, Crown } from 'lucide-react'
import Modal from './Modal'
import Modern01 from '../templates/Modern01'
import Modern02 from '../templates/Modern02'
import Pro03 from '../templates/Pro03'
import Photo04 from '../templates/Photo04'
import { demoUserA, demoUserB } from '../lib/demoData'

const templates = [
  {
    id: 'modern01',
    name: 'Modern Minimal',
    category: 'Minimal',
    component: Modern01,
    userData: demoUserA,
    isPro: false,
    preview: '/images/template-1.png'
  },
  {
    id: 'modern02',
    name: 'Gradient Pro',
    category: 'Modern',
    component: Modern02,
    userData: demoUserB,
    isPro: false,
    preview: '/images/template-2.png'
  },
  {
    id: 'pro03',
    name: 'Executive Dark',
    category: 'Pro',
    component: Pro03,
    userData: demoUserA,
    isPro: true,
    preview: '/images/template-3.png'
  },
  {
    id: 'photo04',
    name: 'Photo Focus',
    category: 'Photo',
    component: Photo04,
    userData: demoUserB,
    isPro: true,
    preview: '/images/template-1.png'
  }
]

export default function TemplatesShowcase() {
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null)

  return (
    <section id="templates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Choose Your Perfect Template
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional, modern templates designed to showcase your skills and experience. 
            Each template is fully responsive and optimized for performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="glass rounded-lg overflow-hidden">
                {/* Preview Image */}
                <div className="relative aspect-[3/4] bg-gray-800 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 p-4">
                    {/* Mock template preview */}
                    <div className="h-full flex flex-col">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-8 h-8 bg-gradient-brand rounded-full"></div>
                        <div className="flex-1">
                          <div className="h-2 bg-white/20 rounded w-3/4 mb-1"></div>
                          <div className="h-1.5 bg-white/10 rounded w-1/2"></div>
                        </div>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="h-1.5 bg-white/10 rounded w-full"></div>
                        <div className="h-1.5 bg-white/10 rounded w-4/5"></div>
                        <div className="h-1.5 bg-white/10 rounded w-3/5"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 flex-1">
                        <div className="bg-white/5 rounded"></div>
                        <div className="bg-white/5 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.button
                      className="btn-primary flex items-center space-x-2"
                      onClick={() => setSelectedTemplate(template)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye className="w-4 h-4" />
                      <span>Preview</span>
                    </motion.button>
                  </div>

                  {/* Pro Badge */}
                  {template.isPro && (
                    <div className="absolute top-3 right-3 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                      <Crown className="w-3 h-3" />
                      <span>PRO</span>
                    </div>
                  )}
                </div>

                {/* Template Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">
                      {template.name}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-brand-purple/20 text-brand-purple rounded-full">
                      {template.category}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Perfect for {template.category.toLowerCase()} portfolios
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Template Preview Modal */}
        {selectedTemplate && (
          <Modal 
            isOpen={!!selectedTemplate} 
            onClose={() => setSelectedTemplate(null)} 
            size="full"
          >
            <div className="h-full bg-white overflow-y-auto">
              <selectedTemplate.component userData={selectedTemplate.userData} />
            </div>
          </Modal>
        )}
      </div>
    </section>
  )
}