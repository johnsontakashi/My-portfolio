'use client'
import { useState } from 'react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'Next.js', level: 90, icon: '▲' },
        { name: 'TypeScript', level: 88, icon: '🔷' },
        { name: 'Tailwind CSS', level: 92, icon: '💨' },
        { name: 'JavaScript', level: 95, icon: '⚡' },
        { name: 'CSS/SCSS', level: 90, icon: '🎨' },
      ]
    },
    backend: {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90, icon: '🟢' },
        { name: 'Express.js', level: 85, icon: '🚂' },
        { name: 'Python', level: 82, icon: '🐍' },
        { name: 'PostgreSQL', level: 88, icon: '🐘' },
        { name: 'MongoDB', level: 85, icon: '🍃' },
        { name: 'GraphQL', level: 80, icon: '📊' },
      ]
    },
    mobile: {
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', level: 88, icon: '📱' },
        { name: 'Flutter', level: 75, icon: '🦋' },
        { name: 'iOS Development', level: 70, icon: '🍎' },
        { name: 'Android', level: 72, icon: '🤖' },
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 95, icon: '📝' },
        { name: 'Docker', level: 80, icon: '🐳' },
        { name: 'AWS', level: 75, icon: '☁️' },
        { name: 'Vercel', level: 90, icon: '▲' },
        { name: 'Figma', level: 85, icon: '🎨' },
        { name: 'VS Code', level: 95, icon: '💻' },
      ]
    }
  }

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {skillCategories[category as keyof typeof skillCategories].title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="text-white font-semibold">{skill.name}</h3>
                  </div>
                  <span className="text-indigo-400 font-bold">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 max-w-3xl mx-auto">
            I'm constantly learning and adapting to new technologies. These skills represent my current expertise, 
            but I'm always excited to explore new frameworks, languages, and tools that can help solve complex problems.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills