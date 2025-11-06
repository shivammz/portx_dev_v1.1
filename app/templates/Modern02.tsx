import { Mail, Github, Linkedin, Twitter, ExternalLink, MapPin } from 'lucide-react'

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

interface Modern02Props {
  userData: UserData
}

export default function Modern02({ userData }: Modern02Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-40 h-40 mx-auto mb-8 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center text-6xl font-bold">
            {userData.name.charAt(0)}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            {userData.name}
          </h1>
          <p className="text-2xl md:text-3xl text-purple-200 mb-6">{userData.title}</p>
          <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            {userData.bio}
          </p>
          {userData.location && (
            <div className="flex items-center justify-center space-x-2 text-purple-200 mb-8">
              <MapPin className="w-5 h-5" />
              <span>{userData.location}</span>
            </div>
          )}
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {userData.socials.email && (
              <a
                href={`mailto:${userData.socials.email}`}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            )}
            {userData.socials.github && (
              <a
                href={userData.socials.github}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
            )}
            {userData.socials.linkedin && (
              <a
                href={userData.socials.linkedin}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            )}
            {userData.socials.twitter && (
              <a
                href={userData.socials.twitter}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {userData.skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 bg-white/10 backdrop-blur-sm rounded-lg text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userData.projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-full h-48 bg-gradient-to-br from-pink-500/20 to-violet-500/20 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-white/60">Project Preview</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-pink-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-purple-100 mb-4 leading-relaxed">
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    className="inline-flex items-center space-x-2 text-pink-400 hover:text-pink-300 font-medium transition-colors"
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

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and collaborate on innovative projects. 
            Let's create something amazing together!
          </p>
          
          {userData.socials.email && (
            <a
              href={`mailto:${userData.socials.email}`}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full text-white font-semibold hover:from-pink-600 hover:to-violet-600 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </a>
          )}
        </div>
      </section>
    </div>
  )
}