import { Mail, Github, Linkedin, Twitter, ExternalLink, MapPin, Camera, Heart } from 'lucide-react'

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

interface Photo04Props {
  userData: UserData
}

export default function Photo04({ userData }: Photo04Props) {
  // Mock gallery images for demonstration
  const galleryImages = [
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=300&fit=crop'
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section with Large Photo */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-white text-center px-6">
          <div className="max-w-4xl mx-auto">
            <div className="w-48 h-48 mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-6xl font-bold border-4 border-white/30">
              {userData.name.charAt(0)}
            </div>
            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
              {userData.name}
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-6 text-rose-100">
              {userData.title}
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-rose-50">
              {userData.bio}
            </p>
            {userData.location && (
              <div className="flex items-center justify-center space-x-2 mt-6 text-rose-100">
                <MapPin className="w-5 h-5" />
                <span>{userData.location}</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light mb-6 text-gray-800">About Me</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {userData.bio}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I believe in creating meaningful digital experiences that not only look beautiful 
                but also solve real problems and make a positive impact.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-rose-200 to-pink-300 rounded-2xl flex items-center justify-center">
                <Camera className="w-16 h-16 text-rose-600" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-rose-400 rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16 text-gray-800">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {userData.skills.map((skill, index) => (
              <div
                key={index}
                className="group p-6 text-center hover:bg-rose-50 rounded-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  {skill.charAt(0)}
                </div>
                <span className="text-gray-700 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16 text-gray-800">Featured Work</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userData.projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <div className="w-full h-64 bg-gradient-to-br from-rose-200 to-pink-300 flex items-center justify-center">
                    <span className="text-rose-600 font-medium">Project Image</span>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Heart className="w-8 h-8 mx-auto mb-2" />
                      <span className="text-sm">View Project</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-rose-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    className="inline-flex items-center space-x-2 text-rose-600 hover:text-rose-700 font-medium transition-colors"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16 text-gray-800">Gallery</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                style={{ aspectRatio: index % 3 === 0 ? '1/1.2' : '1/1' }}
              >
                <div className="w-full h-full bg-gradient-to-br from-rose-200 to-pink-300 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-rose-600" />
                </div>
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-8 text-gray-800">Let's Create Together</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always excited to collaborate on new projects and bring creative ideas to life. 
            Let's discuss your vision and make it reality.
          </p>
          
          {userData.socials.email && (
            <a
              href={`mailto:${userData.socials.email}`}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-medium hover:from-rose-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 mb-8"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </a>
          )}
          
          <div className="flex justify-center space-x-6">
            {userData.socials.github && (
              <a
                href={userData.socials.github}
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-rose-50 transition-all duration-300"
              >
                <Github className="w-6 h-6 text-gray-700" />
              </a>
            )}
            {userData.socials.linkedin && (
              <a
                href={userData.socials.linkedin}
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-rose-50 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 text-gray-700" />
              </a>
            )}
            {userData.socials.twitter && (
              <a
                href={userData.socials.twitter}
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-rose-50 transition-all duration-300"
              >
                <Twitter className="w-6 h-6 text-gray-700" />
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}