import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react'

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

interface Modern01Props {
  userData: UserData
}

export default function Modern01({ userData }: Modern01Props) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-4xl font-bold">
              {userData.name.charAt(0)}
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{userData.name}</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-4">{userData.title}</p>
              <p className="text-lg text-blue-50 max-w-2xl">{userData.bio}</p>
              {userData.location && (
                <div className="flex items-center justify-center md:justify-start space-x-2 mt-4 text-blue-100">
                  <MapPin className="w-4 h-4" />
                  <span>{userData.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-3">
            {userData.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {userData.projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                {project.image && (
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Project Image</span>
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Get In Touch</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-600 mb-6">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to work together!
            </p>
            <div className="flex flex-wrap gap-4">
              {userData.socials.email && (
                <a
                  href={`mailto:${userData.socials.email}`}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              )}
              {userData.socials.linkedin && (
                <a
                  href={userData.socials.linkedin}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              )}
              {userData.socials.github && (
                <a
                  href={userData.socials.github}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}
              {userData.socials.twitter && (
                <a
                  href={userData.socials.twitter}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                  <span>Twitter</span>
                </a>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}