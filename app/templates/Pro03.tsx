import { Mail, Github, Linkedin, Twitter, ExternalLink, MapPin, Download, Eye } from 'lucide-react'

interface UserData {
  username?: string
  name: string
  title: string
  bio: string
  location?: string
  skills: string[]
  projects: Array<{
    title: string
    description: string
    image?: string
    link?: string
  }>
  socials: {
    linkedin?: string
    github?: string
    twitter?: string
    email?: string
  }
  themePreference?: string
}

interface Pro03Props {
  userData: UserData
}

export default function Pro03({ userData }: Pro03Props) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-yellow-400">{userData.name}</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-yellow-400 text-lg font-medium mb-4">Hello, I'm</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {userData.name.split(' ').map((word, index) => (
                <span key={index} className={index === 0 ? 'text-white' : 'text-gray-400'}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="text-2xl md:text-3xl text-yellow-400 mb-6 font-light">
              {userData.title}
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
              {userData.bio}
            </p>
            {userData.location && (
              <div className="flex items-center space-x-2 text-gray-400 mb-8">
                <MapPin className="w-5 h-5" />
                <span>{userData.location}</span>
              </div>
            )}
            
            <div className="flex space-x-4">
              {userData.socials.email && (
                <a
                  href={`mailto:${userData.socials.email}`}
                  className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
                >
                  Hire Me
                </a>
              )}
              <button className="px-6 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-8xl font-bold text-black">
              {userData.name.charAt(0)}
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-500/20 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {userData.skills.map((skill, index) => (
              <div
                key={index}
                className="group p-6 bg-black border border-gray-800 rounded-lg text-center hover:border-yellow-400 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
                  <span className="text-xl font-bold group-hover:text-black">{skill.charAt(0)}</span>
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-gray-400 text-lg">A selection of my recent projects</p>
          </div>
          
          <div className="space-y-12">
            {userData.projects.map((project, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-gray-900 rounded-lg p-8 h-64 flex items-center justify-center border border-gray-800">
                    <span className="text-gray-500 text-lg">Project Preview</span>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="text-yellow-400 text-sm font-medium mb-2">
                    PROJECT {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex space-x-4">
                    {project.link && (
                      <a
                        href={project.link}
                        className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Live</span>
                      </a>
                    )}
                    <a
                      href="#"
                      className="flex items-center space-x-2 text-gray-400 hover:text-white font-medium transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Build Something Great</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            {userData.socials.email && (
              <a
                href={`mailto:${userData.socials.email}`}
                className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Send Message</span>
              </a>
            )}
          </div>
          
          <div className="flex justify-center space-x-6">
            {userData.socials.github && (
              <a
                href={userData.socials.github}
                className="p-3 border border-gray-700 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            )}
            {userData.socials.linkedin && (
              <a
                href={userData.socials.linkedin}
                className="p-3 border border-gray-700 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            )}
            {userData.socials.twitter && (
              <a
                href={userData.socials.twitter}
                className="p-3 border border-gray-700 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}