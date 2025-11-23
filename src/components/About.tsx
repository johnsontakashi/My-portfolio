'use client'
import { useState } from 'react'

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 rounded-full overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                <img 
                  src="/images/avartar.jpg" 
                  alt="Johnson Takashi"
                  className="w-full h-full object-cover object-center"
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
            </div>
            
            {/* Floating elements around photo */}
            <div className="absolute top-10 -right-5 w-20 h-20 bg-indigo-600/20 rounded-lg rotate-12 blur-sm"></div>
            <div className="absolute bottom-10 -left-5 w-16 h-16 bg-purple-600/20 rounded-full blur-sm"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Hello! I&apos;m Johnson Takashi
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I&apos;m a passionate full-stack developer with expertise in web and mobile application development. 
                  I love creating digital experiences that are not only functional but also beautiful and intuitive.
                </p>
                <p>
                  With years of experience in modern technologies, I specialize in building scalable applications 
                  using React, Next.js, Node.js, and various other cutting-edge tools. I&apos;m always eager to learn 
                  new technologies and take on challenging projects.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing my knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 card-hover">
                <h4 className="text-3xl font-bold gradient-text mb-2">50+</h4>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 card-hover">
                <h4 className="text-3xl font-bold gradient-text mb-2">5+</h4>
                <p className="text-gray-400">Years Experience</p>
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="pt-6">
              <button className="px-6 py-3 bg-gray-900 border border-indigo-500 text-indigo-400 rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300 font-semibold">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About