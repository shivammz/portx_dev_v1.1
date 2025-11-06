'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FileText, Palette, Sparkles, Rocket } from 'lucide-react'
import Modal from './Modal'
import TemplatePreview from './TemplatePreview'

interface ProgressBuilderProps {
  userData: any
  onClose: () => void
}

const stages = [
  {
    icon: FileText,
    label: 'Parsing',
    description: 'Reading your resume...',
    duration: 1000
  },
  {
    icon: Palette,
    label: 'Selecting Template',
    description: 'Designing a premium layout...',
    duration: 1500
  },
  {
    icon: Sparkles,
    label: 'Personalizing',
    description: 'Placing projects & polishing copy...',
    duration: 1200
  },
  {
    icon: Rocket,
    label: 'Rendering',
    description: 'Finishing touches...',
    duration: 800
  }
]

export default function ProgressBuilder({ userData, onClose }: ProgressBuilderProps) {
  const [currentStage, setCurrentStage] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let stageIndex = 0
    let progressValue = 0

    const runStages = async () => {
      for (let i = 0; i < stages.length; i++) {
        setCurrentStage(i)
        
        // Animate progress for current stage
        const stageProgress = (i + 1) * (100 / stages.length)
        const startProgress = i * (100 / stages.length)
        
        const animateProgress = () => {
          const duration = stages[i].duration
          const steps = 60 // 60fps
          const increment = (stageProgress - startProgress) / steps
          let currentProgress = startProgress
          
          const interval = setInterval(() => {
            currentProgress += increment
            setProgress(Math.min(currentProgress, stageProgress))
            
            if (currentProgress >= stageProgress) {
              clearInterval(interval)
            }
          }, duration / steps)
        }
        
        animateProgress()
        await new Promise(resolve => setTimeout(resolve, stages[i].duration))
      }
      
      setIsComplete(true)
    }

    runStages()
  }, [])

  if (isComplete) {
    return <TemplatePreview userData={userData} onClose={onClose} />
  }

  return (
    <Modal isOpen={true} onClose={onClose} size="medium">
      <div className="p-8 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">
            Building Your Portfolio
          </h2>
          <p className="text-gray-400 mb-8">
            Our AI is crafting your perfect portfolio...
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-800 rounded-full h-3 mb-4">
            <motion.div
              className="bg-gradient-brand h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
          <div className="text-sm text-gray-400">
            {Math.round(progress)}% Complete
          </div>
        </div>

        {/* Stages */}
        <div className="space-y-6">
          {stages.map((stage, index) => {
            const Icon = stage.icon
            const isActive = index === currentStage
            const isCompleted = index < currentStage
            
            return (
              <motion.div
                key={stage.label}
                className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 ${
                  isActive 
                    ? 'glass border border-brand-purple/50' 
                    : isCompleted 
                    ? 'glass-dark' 
                    : 'opacity-50'
                }`}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`p-3 rounded-full ${
                  isActive 
                    ? 'bg-brand-purple text-white' 
                    : isCompleted 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-700 text-gray-400'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                <div className="flex-1 text-left">
                  <h3 className={`font-semibold ${
                    isActive ? 'text-white' : isCompleted ? 'text-green-400' : 'text-gray-400'
                  }`}>
                    {stage.label}
                  </h3>
                  <p className={`text-sm ${
                    isActive ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    {isActive ? stage.description : stage.label}
                  </p>
                </div>

                {isActive && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-brand-purple border-t-transparent rounded-full"
                  />
                )}

                {isCompleted && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="mt-8 text-sm text-gray-500"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Please wait while we create your portfolio...
        </motion.div>
      </div>
    </Modal>
  )
}