'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Upload } from 'lucide-react'
import ManualForm from './ManualForm'
import ResumeUpload from './ResumeUpload'

export default function CTAs() {
  const [showManualForm, setShowManualForm] = useState(false)
  const [showResumeUpload, setShowResumeUpload] = useState(false)

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <motion.button
          className="btn-primary flex items-center space-x-2 w-full sm:w-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowManualForm(true)}
        >
          <User className="w-5 h-5" />
          <span>Create My Portfolio</span>
        </motion.button>

        <motion.button
          className="btn-secondary flex items-center space-x-2 w-full sm:w-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowResumeUpload(true)}
        >
          <Upload className="w-5 h-5" />
          <span>Upload Resume (Auto Build)</span>
        </motion.button>
      </div>

      {/* Modals */}
      <ManualForm 
        isOpen={showManualForm} 
        onClose={() => setShowManualForm(false)} 
      />
      <ResumeUpload 
        isOpen={showResumeUpload} 
        onClose={() => setShowResumeUpload(false)} 
      />
    </>
  )
}