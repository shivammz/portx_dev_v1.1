// Frontend PDF parsing utility using pdfjs-dist
// This is a stub implementation for demonstration purposes
// In production, you would use the actual pdfjs-dist library

export interface ExtractedText {
  text: string
  pages: number
  metadata?: {
    title?: string
    author?: string
    subject?: string
    creator?: string
  }
}

export async function extractTextFromPDF(file: File): Promise<ExtractedText> {
  // Simulate PDF text extraction
  // In production, this would use pdfjs-dist:
  /*
  import * as pdfjsLib from 'pdfjs-dist'
  
  pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`
  
  const arrayBuffer = await file.arrayBuffer()
  const pdf = await pdfjsLib.getDocument(arrayBuffer).promise
  
  let fullText = ''
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i)
    const textContent = await page.getTextContent()
    const pageText = textContent.items.map(item => item.str).join(' ')
    fullText += pageText + '\n'
  }
  
  return {
    text: fullText,
    pages: pdf.numPages,
    metadata: pdf.metadata
  }
  */

  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 1500))

  // Return mock extracted text based on file name or default
  const mockText = `
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

  return {
    text: mockText.trim(),
    pages: 2,
    metadata: {
      title: file.name,
      author: 'John Doe',
      subject: 'Resume',
      creator: 'PDF Creator'
    }
  }
}

export function validatePDFFile(file: File): boolean {
  const validTypes = ['application/pdf']
  const maxSize = 10 * 1024 * 1024 // 10MB

  if (!validTypes.includes(file.type)) {
    throw new Error('Please upload a valid PDF file')
  }

  if (file.size > maxSize) {
    throw new Error('File size must be less than 10MB')
  }

  return true
}