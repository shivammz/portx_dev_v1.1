'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { X, Upload, FileText, Edit3 } from 'lucide-react'
import Modal from './Modal'
import ProgressBuilder from './ProgressBuilder'

interface ResumeUploadProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResumeUpload({ isOpen, onClose }: ResumeUploadProps) {
  const [file, setFile] = useState<File | null>(null)
  const [extractedText, setExtractedText] = useState('')
  const [parsedData, setParsedData] = useState<any>(null)
  const [isExtracting, setIsExtracting] = useState(false)
  const [isParsing, setIsParsing] = useState(false)
  const [showProgress, setShowProgress] = useState(false)
  const [editableData, setEditableData] = useState<any>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (selectedFile: File) => {
    setFile(selectedFile)
    setIsExtracting(true)
    
    try {
      // Simulate PDF text extraction using pdfjs-dist
      // In production, this would use actual PDF.js library
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const mockExtractedText = `
John Doe
Frontend Developer
San Francisco, CA
john.doe@email.com
LinkedIn: linkedin.com/in/johndoe
GitHub: github.com/johndoe

SUMMARY
Experienced frontend developer with 5+ years building modern web applications using React, TypeScript, and Node.js. Passionate about creating accessible, performant user experiences.

SKILLS
• React, TypeScript, JavaScript
• Next.js, Node.js, Express
• Tailwind CSS, Styled Components
• Git, Docker, AWS
• Figma, Adobe Creative Suite

EXPERIENCE
Senior Frontend Developer | TechCorp | 2022-Present
• Led development of customer dashboard serving 10k+ users
• Improved page load times by 40% through optimization
• Mentored 3 junior developers

Frontend Developer | StartupXYZ | 2020-2022
• Built responsive web applications using React and TypeScript
• Collaborated with design team to implement pixel-perfect UIs
• Implemented automated testing reducing bugs by 30%

PROJECTS
E-commerce Platform
Built a full-stack e-commerce platform with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.

Task Management App
Developed a collaborative task management application with real-time updates using Socket.io and React. Supports team collaboration and project tracking.

EDUCATION
Bachelor of Science in Computer Science
University of California, Berkeley | 2016-2020
      `
      
      setExtractedText(mockExtractedText)
    } catch (error) {
      console.error('Error extracting text:', error)
    } finally {
      setIsExtracting(false)
    }
  }

  const handleParseResume = async () => {
    setIsParsing(true)
    
    try {
      // Call stub API route
      const response = await fetch('/api/parse-resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: extractedText }),
      })
      
      const parsed = await response.json()
      setParsedData(parsed)
      setEditableData(parsed)
    } catch (error) {
      console.error('Error parsing resume:', error)
    } finally {
      setIsParsing(false)
    }
  }

  const handleContinue = () => {
    setShowProgress(true)
  }

  if (showProgress) {
    return <ProgressBuilder userData={editableData} onClose={onClose} />
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="large">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Upload Resume</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close upload"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {!file && (
          <div className="text-center">
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
              className="hidden"
            />
            
            <motion.div
              className="glass-dark border-2 border-dashed border-gray-600 rounded-lg p-12 cursor-pointer hover:border-brand-purple transition-colors"
              whileHover={{ scale: 1.02 }}
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Drop your resume here
              </h3>
              <p className="text-gray-400 mb-4">
                or click to browse files
              </p>
              <p className="text-sm text-gray-500">
                Supports PDF, DOC, DOCX files
              </p>
            </motion.div>
          </div>
        )}

        {file && !extractedText && isExtracting && (
          <div className="text-center py-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-brand-purple border-t-transparent rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-white mb-2">
              Extracting text from your resume...
            </h3>
            <p className="text-gray-400">
              This may take a few moments
            </p>
          </div>
        )}

        {extractedText && !parsedData && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <FileText className="w-6 h-6 text-green-500" />
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Text extracted successfully!
                </h3>
                <p className="text-gray-400">
                  Review the extracted content below
                </p>
              </div>
            </div>

            <div className="glass-dark rounded-lg p-4 max-h-64 overflow-y-auto">
              <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                {extractedText}
              </pre>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => {
                  setFile(null)
                  setExtractedText('')
                }}
                className="px-6 py-2 text-gray-400 hover:text-white transition-colors"
              >
                Upload Different File
              </button>
              <button
                onClick={handleParseResume}
                disabled={isParsing}
                className="btn-primary flex items-center space-x-2"
              >
                {isParsing ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Parsing...</span>
                  </>
                ) : (
                  <>
                    <span>Parse Resume</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {parsedData && editableData && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Edit3 className="w-6 h-6 text-brand-purple" />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Review & Edit Your Information
                  </h3>
                  <p className="text-gray-400">
                    Make any necessary adjustments before continuing
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-dark rounded-lg p-6 max-h-96 overflow-y-auto space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={editableData.name || ''}
                    onChange={(e) => setEditableData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={editableData.title || ''}
                    onChange={(e) => setEditableData(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Bio
                </label>
                <textarea
                  rows={3}
                  value={editableData.bio || ''}
                  onChange={(e) => setEditableData(prev => ({ ...prev, bio: e.target.value }))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Skills
                </label>
                <input
                  type="text"
                  value={editableData.skills?.join(', ') || ''}
                  onChange={(e) => setEditableData(prev => ({ 
                    ...prev, 
                    skills: e.target.value.split(',').map(s => s.trim()) 
                  }))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                  placeholder="React, TypeScript, Node.js"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => {
                  setParsedData(null)
                  setEditableData(null)
                }}
                className="px-6 py-2 text-gray-400 hover:text-white transition-colors"
              >
                Back to Text
              </button>
              <button
                onClick={handleContinue}
                className="btn-primary"
              >
                Continue to Builder
              </button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  )
}