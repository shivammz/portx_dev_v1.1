'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Crown, Globe, Code, RefreshCw } from 'lucide-react'
import Modal from './Modal'
import Modern01 from '../templates/Modern01'
import { demoUserA } from '../lib/demoData'

interface TemplatePreviewProps {
  userData: any
  onClose: () => void
}

export default function TemplatePreview({ userData, onClose }: TemplatePreviewProps) {
  const [showProModal, setShowProModal] = useState(false)
  const [showLiveModal, setShowLiveModal] = useState(false)
  const [showCodeModal, setShowCodeModal] = useState(false)
  const [subdomain, setSubdomain] = useState(userData?.name?.toLowerCase().replace(/\s+/g, '') || 'johndoe')

  const handleRegenerate = () => {
    // Simulate regeneration with slight variations
    console.log('Regenerating portfolio with AI variations...')
    // In production, this would call the AI service again
  }

  const handleMakeLive = (plan: 'free' | 'pro') => {
    console.log(`Making portfolio live with ${plan} plan on ${subdomain}.portfoliox.dev`)
    // In production, this would call the hosting API
    setShowLiveModal(false)
    onClose()
  }

  return (
    <Modal isOpen={true} onClose={onClose} size="full">
      <div className="flex h-full">
        {/* Preview Area */}
        <div className="flex-1 bg-white">
          <div className="h-full overflow-y-auto">
            <Modern01 userData={userData || demoUserA} />
          </div>
        </div>

        {/* Action Sidebar */}
        <div className="w-80 bg-gray-900 border-l border-gray-800 p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Your Portfolio</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close preview"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-4 flex-1">
            {/* Pro Upsell */}
            <motion.button
              onClick={() => setShowProModal(true)}
              className="w-full glass-dark p-4 rounded-lg text-left hover:bg-white/10 transition-colors group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <Crown className="w-6 h-6 text-yellow-500" />
                <span className="font-semibold text-white">Create a Pro Portfolio</span>
              </div>
              <p className="text-sm text-gray-400 group-hover:text-gray-300">
                Unlock premium templates, custom domains, and advanced features
              </p>
            </motion.button>

            {/* Make Live */}
            <motion.button
              onClick={() => setShowLiveModal(true)}
              className="w-full btn-primary text-left"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-3">
                <Globe className="w-6 h-6" />
                <span className="font-semibold">Make it Live</span>
              </div>
            </motion.button>

            {/* Get Code (Pro Only) */}
            <motion.button
              onClick={() => setShowCodeModal(true)}
              className="w-full glass-dark p-4 rounded-lg text-left opacity-50 cursor-not-allowed"
              disabled
            >
              <div className="flex items-center space-x-3 mb-2">
                <Code className="w-6 h-6 text-gray-500" />
                <span className="font-semibold text-gray-500">Get Code</span>
                <Crown className="w-4 h-4 text-yellow-500" />
              </div>
              <p className="text-sm text-gray-500">
                Download source code (Pro feature)
              </p>
            </motion.button>

            {/* Regenerate */}
            <motion.button
              onClick={handleRegenerate}
              className="w-full glass-dark p-4 rounded-lg text-left hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-3">
                <RefreshCw className="w-6 h-6 text-brand-purple" />
                <span className="font-semibold text-white">Regenerate</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                Try different AI variations
              </p>
            </motion.button>
          </div>

          <div className="text-xs text-gray-500 text-center pt-4 border-t border-gray-800">
            Preview Mode • Changes are not saved
          </div>
        </div>
      </div>

      {/* Pro Modal */}
      <Modal isOpen={showProModal} onClose={() => setShowProModal(false)} size="medium">
        <div className="p-6 text-center">
          <Crown className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Upgrade to Pro</h3>
          <div className="space-y-3 text-left mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-brand-purple rounded-full"></div>
              <span className="text-gray-300">Premium 3D templates</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-brand-purple rounded-full"></div>
              <span className="text-gray-300">Custom domain support</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-brand-purple rounded-full"></div>
              <span className="text-gray-300">Advanced analytics</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-brand-purple rounded-full"></div>
              <span className="text-gray-300">Source code download</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => setShowProModal(false)}
              className="flex-1 btn-secondary"
            >
              Maybe Later
            </button>
            <button className="flex-1 btn-primary">
              Upgrade Now
            </button>
          </div>
        </div>
      </Modal>

      {/* Make Live Modal */}
      <Modal isOpen={showLiveModal} onClose={() => setShowLiveModal(false)} size="medium">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-4">Go live on {subdomain}.portfoliox.dev</h3>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Choose your subdomain
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={subdomain}
                onChange={(e) => setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9]/g, ''))}
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                placeholder="your-name"
              />
              <span className="text-gray-400">.portfoliox.dev</span>
            </div>
          </div>

          <div className="space-y-4">
            <motion.button
              onClick={() => handleMakeLive('free')}
              className="w-full glass-dark p-4 rounded-lg text-left hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-white">Host for 24 hours</span>
                <span className="text-green-400 font-bold">FREE</span>
              </div>
              <p className="text-sm text-gray-400">
                Perfect for testing and sharing with friends
              </p>
            </motion.button>

            <motion.button
              onClick={() => handleMakeLive('pro')}
              className="w-full btn-primary text-left"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">Upgrade to keep it live</span>
                <span className="font-bold">$9/mo</span>
              </div>
              <p className="text-sm opacity-90">
                Permanent hosting + custom domain support
              </p>
            </motion.button>
          </div>

          <div className="flex justify-end space-x-4 mt-6 pt-4 border-t border-gray-700">
            <button
              onClick={() => setShowLiveModal(false)}
              className="px-6 py-2 text-gray-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>

      {/* Code Modal */}
      <Modal isOpen={showCodeModal} onClose={() => setShowCodeModal(false)} size="medium">
        <div className="p-6 text-center">
          <Code className="w-16 h-16 text-gray-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Source Code Download</h3>
          <p className="text-gray-400 mb-6">
            This feature is available for Pro subscribers. Upgrade to download your portfolio's source code as a ZIP file.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => setShowCodeModal(false)}
              className="flex-1 btn-secondary"
            >
              Close
            </button>
            <button className="flex-1 btn-primary">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </Modal>
    </Modal>
  )
}