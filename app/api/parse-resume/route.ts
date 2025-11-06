import { NextRequest, NextResponse } from 'next/server'
import { mockParsedResume } from '../../lib/demoData'

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json()

    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: 'Invalid request: text is required' },
        { status: 400 }
      )
    }

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    // In production, this would:
    // 1. Call OpenAI API to parse the resume text
    // 2. Extract structured data (name, skills, experience, etc.)
    // 3. Return formatted JSON
    
    // For now, we'll use simple regex patterns and return mock data
    const parsedData = parseResumeText(text)

    return NextResponse.json(parsedData)
  } catch (error) {
    console.error('Error parsing resume:', error)
    return NextResponse.json(
      { error: 'Failed to parse resume' },
      { status: 500 }
    )
  }
}

function parseResumeText(text: string) {
  // Simple regex-based parsing for demo purposes
  // In production, this would use OpenAI or other NLP services
  
  const lines = text.split('\n').map(line => line.trim()).filter(Boolean)
  
  // Extract name (usually first line or after certain keywords)
  let name = 'John Doe'
  const namePatterns = [
    /^([A-Z][a-z]+ [A-Z][a-z]+)$/,
    /^([A-Z][A-Z\s]+)$/
  ]
  
  for (const line of lines.slice(0, 5)) {
    for (const pattern of namePatterns) {
      const match = line.match(pattern)
      if (match) {
        name = match[1]
        break
      }
    }
    if (name !== 'John Doe') break
  }

  // Extract title/role
  let title = 'Software Developer'
  const titleKeywords = ['developer', 'engineer', 'designer', 'manager', 'analyst', 'consultant']
  for (const line of lines.slice(0, 10)) {
    const lowerLine = line.toLowerCase()
    if (titleKeywords.some(keyword => lowerLine.includes(keyword))) {
      title = line
      break
    }
  }

  // Extract email
  let email = 'john@example.com'
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/
  for (const line of lines) {
    const match = line.match(emailRegex)
    if (match) {
      email = match[1]
      break
    }
  }

  // Extract location
  let location = 'San Francisco, CA'
  const locationPatterns = [
    /([A-Z][a-z]+,\s*[A-Z]{2})/,
    /([A-Z][a-z]+,\s*[A-Z][a-z]+)/
  ]
  for (const line of lines) {
    for (const pattern of locationPatterns) {
      const match = line.match(pattern)
      if (match) {
        location = match[1]
        break
      }
    }
    if (location !== 'San Francisco, CA') break
  }

  // Extract skills (look for skills section or bullet points)
  const skills = []
  const skillsSection = text.toLowerCase().includes('skills')
  if (skillsSection) {
    const skillKeywords = [
      'react', 'javascript', 'typescript', 'python', 'java', 'node.js', 'next.js',
      'html', 'css', 'tailwind', 'bootstrap', 'vue', 'angular', 'express',
      'mongodb', 'postgresql', 'mysql', 'aws', 'docker', 'git', 'figma'
    ]
    
    for (const keyword of skillKeywords) {
      if (text.toLowerCase().includes(keyword)) {
        skills.push(keyword.charAt(0).toUpperCase() + keyword.slice(1))
      }
    }
  }

  // If no skills found, use defaults
  if (skills.length === 0) {
    skills.push('JavaScript', 'React', 'Node.js', 'HTML/CSS')
  }

  // Extract bio from summary section
  let bio = 'Experienced developer passionate about creating great user experiences.'
  const summaryIndex = text.toLowerCase().indexOf('summary')
  if (summaryIndex !== -1) {
    const summarySection = text.substring(summaryIndex, summaryIndex + 500)
    const summaryLines = summarySection.split('\n').slice(1, 4)
    if (summaryLines.length > 0) {
      bio = summaryLines.join(' ').trim()
    }
  }

  // Extract social links
  const socials = {
    linkedin: '',
    github: '',
    twitter: '',
    email: email
  }

  const linkedinMatch = text.match(/linkedin\.com\/in\/([a-zA-Z0-9-]+)/)
  if (linkedinMatch) {
    socials.linkedin = `https://linkedin.com/in/${linkedinMatch[1]}`
  }

  const githubMatch = text.match(/github\.com\/([a-zA-Z0-9-]+)/)
  if (githubMatch) {
    socials.github = `https://github.com/${githubMatch[1]}`
  }

  // Generate projects based on experience section
  const projects = [
    {
      title: 'Web Application',
      description: 'Built a modern web application with React and Node.js',
      image: '/images/template-1.png',
      link: '#'
    },
    {
      title: 'Mobile App',
      description: 'Developed a mobile application with React Native',
      image: '/images/template-2.png',
      link: '#'
    }
  ]

  return {
    username: name.toLowerCase().replace(/\s+/g, ''),
    name,
    title,
    bio: bio.length > 200 ? bio.substring(0, 200) + '...' : bio,
    location,
    skills: skills.slice(0, 6), // Limit to 6 skills
    projects,
    socials,
    themePreference: 'modern'
  }
}