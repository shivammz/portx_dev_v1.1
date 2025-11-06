'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Trash2 } from 'lucide-react'
import Modal from './Modal'
import ProgressBuilder from './ProgressBuilder'

interface Project {
  title: string
  description: string
  imageUrl: string
}

interface FormData {
  fullName: string
  role: string
  location: string
  bio: string
  profilePhoto: string
  skills: string[]
  projects: Project[]
  linkedin: string
  github: string
  twitter: string
  email: string
  themePreference: string
}

interface ManualFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function ManualForm({ isOpen, onClose }: ManualFormProps) {
  const [showProgress, setShowProgress] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    role: '',
    location: '',
    bio: '',
    profilePhoto: '',
    skills: [''],
    projects: [{ title: '', description: '', imageUrl: '' }],
    linkedin: '',
    github: '',
    twitter: '',
    email: '',
    themePreference: 'modern'
  })

  const addSkill = () => {
    if (formData.skills.length < 6) {
      setFormData(prev => ({ ...prev, skills: [...prev.skills, ''] }))
    }
  }

  const removeSkill = (index: number) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }))
  }

  const updateSkill = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.map((skill, i) => i === index ? value : skill)
    }))
  }

  const addProject = () => {
    if (formData.projects.length < 3) {
      setFormData(prev => ({
        ...prev,
        projects: [...prev.projects, { title: '', description: '', imageUrl: '' }]
      }))
    }
  }

  const removeProject = (index: number) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index)
    }))
  }

  const updateProject = (index: number, field: keyof Project, value: string) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.map((project, i) => 
        i === index ? { ...project, [field]: value } : project
      )
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Convert form data to user JSON format
    const userJson = {
      username: formData.fullName.toLowerCase().replace(/\s+/g, ''),
      name: formData.fullName,
      title: formData.role,
      bio: formData.bio,
      location: formData.location,
      skills: formData.skills.filter(skill => skill.trim() !== ''),
      projects: formData.projects.filter(project => project.title.trim() !== ''),
      socials: {
        linkedin: formData.linkedin,
        github: formData.github,
        twitter: formData.twitter,
        email: formData.email
      },
      themePreference: formData.themePreference
    }
    
    console.log('Generated user data:', userJson)
    setShowProgress(true)
  }

  if (showProgress) {
    return <ProgressBuilder userData={formData} onClose={onClose} />
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="large">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Create Your Portfolio</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close form"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-h-96 overflow-y-auto">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Role/Title *
              </label>
              <input
                type="text"
                required
                value={formData.role}
                onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                placeholder="Frontend Developer"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Location
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent"
              placeholder="San Francisco, CA"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Bio (1-2 lines) *
            </label>
            <textarea
              required
              rows={2}
              value={formData.bio}
              onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent"
              placeholder="I build modern, fast, accessible frontends that users love."
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Top Skills (up to 6)
            </label>
            <div className="space-y-2">
              {formData.skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => updateSkill(index, e.target.value)}
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                    placeholder="React"
                  />
                  {formData.skills.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSkill(index)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
              {formData.skills.length < 6 && (
                <button
                  type="button"
                  onClick={addSkill}
                  className="flex items-center space-x-2 text-brand-purple hover:text-brand-pink transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Skill</span>
                </button>
              )}
            </div>
          </div>

          {/* Projects */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Projects (up to 3)
            </label>
            <div className="space-y-4">
              {formData.projects.map((project, index) => (
                <div key={index} className="glass p-4 rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-300">Project {index + 1}</span>
                    {formData.projects.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeProject(index)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) => updateProject(index, 'title', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                    placeholder="Project Title"
                  />
                  <textarea
                    rows={2}
                    value={project.description}
                    onChange={(e) => updateProject(index, 'description', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                    placeholder="Brief description of the project"
                  />
                  <input
                    type="url"
                    value={project.imageUrl}
                    onChange={(e) => updateProject(index, 'imageUrl', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                    placeholder="Image URL (optional)"
                  />
                </div>
              ))}
              {formData.projects.length < 3 && (
                <button
                  type="button"
                  onClick={addProject}
                  className="flex items-center space-x-2 text-brand-purple hover:text-brand-pink transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Project</span>
                </button>
              )}
            </div>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="url"
              value={formData.linkedin}
              onChange={(e) => setFormData(prev => ({ ...prev, linkedin: e.target.value }))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent"
              placeholder="LinkedIn URL"
            />
            <input
              type="url"
              value={formData.github}
              onChange={(e) => setFormData(prev => ({ ...prev, github: e.target.value }))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent"
              placeholder="GitHub URL"
            />
            <input
              type="url"
              value={formData.twitter}
              onChange={(e) => setFormData(prev => ({ ...prev, twitter: e.target.value }))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent"
              placeholder="Twitter URL"
            />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent"
              placeholder="Email"
            />
          </div>

          {/* Theme Preference */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Theme Preference
            </label>
            <select
              value={formData.themePreference}
              onChange={(e) => setFormData(prev => ({ ...prev, themePreference: e.target.value }))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent"
            >
              <option value="minimal">Minimal</option>
              <option value="modern">Modern</option>
              <option value="pro">Pro</option>
            </select>
          </div>

          <div className="flex justify-end space-x-4 pt-4 border-t border-gray-700">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-gray-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}