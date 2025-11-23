'use client'
import { useState } from 'react'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [visibleProjects, setVisibleProjects] = useState(6)
  const [showCodeModal, setShowCodeModal] = useState(false)
  const [showGithubModal, setShowGithubModal] = useState(false)
  const PROJECTS_PER_PAGE = 6

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL featuring real-time inventory management and payment processing.',
      image: '/images/standard1.png',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'fullstack',
      githubUrl: 'https://github.com/johnsontakashi/ecommerce',
      liveUrl: 'https://wolfandbadger.com',
      featured: true
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'A responsive social media analytics dashboard built with Next.js and TypeScript, featuring real-time data visualization.',
      image: '/images/standard2.png',
      technologies: ['Next.js', 'TypeScript', 'Chart.js', 'Tailwind'],
      category: 'frontend',
      githubUrl: 'https://github.com/johnsontakashi/social-dashboard',
      liveUrl: 'https://poosting.com/',
      featured: true
    },
    {
      id: 3,
      title: 'Task Management Mobile App',
      description: 'A cross-platform mobile app for task management with offline capabilities and real-time synchronization.',
      image: '/images/standard6.png',
      technologies: ['React Native', 'Firebase', 'Redux', 'AsyncStorage'],
      category: 'mobile',
      githubUrl: 'https://github.com/johnsontakashi/task-app',
      liveUrl: 'https://mylifeorganized.net',
      featured: false
    },
    {
      id: 4,
      title: 'AI-Powered Chatbot',
      description: 'An intelligent chatbot API built with Python and FastAPI, integrated with natural language processing capabilities.',
      image: '/images/standard4.png',
      technologies: ['Python', 'FastAPI', 'OpenAI', 'Docker'],
      category: 'backend',
      githubUrl: 'https://github.com/johnsontakashi/ai-chatbot',
      liveUrl: 'https://nomi.ai',
      featured: false
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      description: 'A comprehensive real estate platform with property listings, virtual tours, and advanced search functionality.',
      image: '/images/standard3.png',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Google Maps'],
      category: 'fullstack',
      githubUrl: 'https://github.com/johnsontakashi/realestate',
      liveUrl: 'https://propertiesmt.com',
      featured: true
    },
    {
      id: 6,
      title: 'Weather Forecast App',
      description: 'A beautiful weather application with location-based forecasts and interactive weather maps.',
      image: '/images/standard5.png',
      technologies: ['React', 'Weather API', 'Leaflet', 'CSS3'],
      category: 'frontend',
      githubUrl: 'https://github.com/johnsontakashi/weather-app',
      liveUrl: 'https://weawow.com',
      featured: false
    },
    {
      id: 7,
      title: 'E-Commerce Site (WordPress)',
      description: 'A comprehensive e-commerce solution built with WordPress, WooCommerce, and custom themes featuring payment gateway integration and inventory management.',
      image: '/images/standard7.png',
      technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'Custom Themes'],
      category: 'fullstack',
      githubUrl: 'https://github.com/johnsontakashi/wordpress-ecommerce',
      liveUrl: 'https://www.woolcouturecompany.com/',
      featured: false
    },
    {
      id: 8,
      title: 'E-Commerce Platform (PHP/Laravel)',
      description: 'A robust e-commerce platform developed with PHP Laravel framework featuring advanced admin dashboard, multi-vendor support, and real-time analytics.',
      image: '/images/standard8.png',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'Stripe API'],
      category: 'fullstack',
      githubUrl: 'https://github.com/johnsontakashi/laravel-ecommerce',
      liveUrl: 'https://daalder.com/',
      featured: false
    },
    {
      id: 9,
      title: 'Custom CMS & E-Commerce',
      description: 'A bespoke content management system with integrated e-commerce functionality, built from scratch with modern PHP architecture and RESTful APIs.',
      image: '/images/standard9.png',
      technologies: ['PHP', 'MySQL', 'jQuery', 'REST API', 'PayPal Integration'],
      category: 'fullstack',
      githubUrl: 'https://github.com/johnsontakashi/custom-cms-ecommerce',
      liveUrl: 'https://demo.bagisto.com/',
      featured: false
    },
    // Frontend MVP Projects
    {
      id: 10,
      title: 'SaaS Landing Page MVP',
      description: 'A modern, conversion-optimized landing page for SaaS products with interactive demos, pricing tables, and customer testimonials.',
      image: '/images/standard10.png',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Stripe'],
      category: 'frontend',
      githubUrl: 'https://github.com/johnsontakashi/saas-landing-mvp',
      liveUrl: 'https://shipped.club/',
      featured: false
    },
    {
      id: 11,
      title: 'Analytics Dashboard MVP',
      description: 'An interactive analytics dashboard with real-time visitor tracking, performance metrics, and comprehensive data visualization for business insights.',
      image: '/images/standard11.png',
      technologies: ['Vue.js', 'Chart.js', 'Firebase', 'CSS3', 'Google Analytics'],
      category: 'frontend',
      githubUrl: 'https://github.com/johnsontakashi/analytics-dashboard-mvp',
      liveUrl: 'https://www.web-stat.com/',
      featured: false
    },
    {
      id: 12,
      title: 'Event Booking MVP',
      description: 'A sleek event booking interface with calendar integration, seat selection, and payment processing for conferences and workshops.',
      image: '/images/standard12.png',
      technologies: ['React', 'TypeScript', 'Material-UI', 'Calendar API', 'PayPal'],
      category: 'frontend',
      githubUrl: 'https://github.com/johnsontakashi/event-booking-mvp',
      liveUrl: 'https://www.ticketbud.com/',
      featured: false
    },
    // Backend Projects
    {
      id: 13,
      title: 'Multi-Tenant API Gateway',
      description: 'A scalable API gateway with multi-tenant architecture, rate limiting, authentication, and real-time monitoring for enterprise applications.',
      image: '/images/standard13.png',
      technologies: ['Node.js', 'Express', 'Redis', 'JWT', 'Docker', 'MongoDB'],
      category: 'backend',
      githubUrl: 'https://github.com/johnsontakashi/api-gateway',
      liveUrl: 'https://www.krakend.io/',
      featured: false
    },
    {
      id: 14,
      title: 'Microservices Architecture',
      description: 'A distributed microservices system with service discovery, load balancing, and automated deployment pipeline for high-traffic applications.',
      image: '/images/standard14.png',
      technologies: ['Python', 'FastAPI', 'Docker', 'Kubernetes', 'PostgreSQL', 'RabbitMQ'],
      category: 'backend',
      githubUrl: 'https://github.com/johnsontakashi/microservices-system',
      liveUrl: 'https://www.qovery.com/',
      featured: false
    },
    // Mobile Apps
    {
      id: 15,
      title: 'Fitness Tracker (Flutter)',
      description: 'A comprehensive fitness tracking app with workout plans, progress tracking, nutrition logging, and social features built with Flutter.',
      image: '/images/standard15.png',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Google Fit API', 'Stripe'],
      category: 'mobile',
      githubUrl: 'https://github.com/johnsontakashi/fitness-tracker-flutter',
      liveUrl: 'https://www.jefit.com/',
      featured: false
    },
    {
      id: 16,
      title: 'Food Delivery App (React Native)',
      description: 'A full-featured food delivery application with real-time tracking, payment integration, and restaurant management dashboard.',
      image: '/images/standard16.png',
      technologies: ['React Native', 'Redux', 'Firebase', 'Maps API', 'Stripe'],
      category: 'mobile',
      githubUrl: 'https://github.com/johnsontakashi/food-delivery-rn',
      liveUrl: 'https://www.deliverclub.com/',
      featured: false
    },
    {
      id: 17,
      title: 'Language Learning App (Flutter)',
      description: 'An interactive language learning platform with AI-powered pronunciation feedback, gamification, and offline content support.',
      image: '/images/standard17.png',
      technologies: ['Flutter', 'Dart', 'TensorFlow Lite', 'SQLite', 'Audio API'],
      category: 'mobile',
      githubUrl: 'https://github.com/johnsontakashi/language-learning-flutter',
      liveUrl: 'https://www.talky-app.com/',
      featured: false
    },
    {
      id: 18,
      title: 'Expense Manager (React Native)',
      description: 'A smart expense tracking app with receipt scanning, budget alerts, category insights, and multi-currency support.',
      image: '/images/standard18.png',
      technologies: ['React Native', 'Expo', 'AsyncStorage', 'Camera API', 'Chart.js'],
      category: 'mobile',
      githubUrl: 'https://github.com/johnsontakashi/expense-manager-rn',
      liveUrl: 'https://monee-app.com/',
      featured: false
    },
    {
      id: 19,
      title: 'Social Media App (Flutter)',
      description: 'A modern social media platform with real-time messaging, story features, video sharing, and advanced privacy controls.',
      image: '/images/standard19.png',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Storage', 'WebRTC'],
      category: 'mobile',
      githubUrl: 'https://github.com/johnsontakashi/social-media-flutter',
      liveUrl: 'https://www.yubo.live/',
      featured: false
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const featuredProjects = projects.filter(project => project.featured)
  const displayedProjects = filteredProjects.slice(0, visibleProjects)
  const hasMoreProjects = visibleProjects < filteredProjects.length

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + PROJECTS_PER_PAGE)
  }

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter)
    setVisibleProjects(PROJECTS_PER_PAGE) // Reset to show first 6 projects when filter changes
  }

  const handleCodeClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowCodeModal(true)
  }

  const handleGithubClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowGithubModal(true)
  }

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-xl card-hover border border-gray-700"
              >
                <div className="h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="text-center text-gray-400 hidden">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 4h16v12H4V4zm2 2v8h12V6H6z"/>
                      <path d="M2 18h20v2H2v-2z"/>
                    </svg>
                    <p className="text-sm">Project Screenshot</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-indigo-600/20 text-indigo-300 text-xs rounded-full border border-indigo-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={handleCodeClick}
                      className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 text-gray-300 text-center rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm"
                    >
                      Code
                    </button>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-indigo-600 text-white text-center rounded-lg hover:bg-indigo-700 transition-colors duration-300 text-sm"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilterChange(category.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-xl card-hover border border-gray-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="text-center text-gray-400 hidden">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16v12H4V4zm2 2v8h12V6H6z"/>
                    <path d="M2 18h20v2H2v-2z"/>
                  </svg>
                  <p className="text-sm">Project Screenshot</p>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-600/20 text-indigo-300 text-xs rounded-full border border-indigo-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={handleCodeClick}
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 text-gray-300 text-center rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm"
                  >
                    Code
                  </button>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-indigo-600 text-white text-center rounded-lg hover:bg-indigo-700 transition-colors duration-300 text-sm"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {hasMoreProjects && (
          <div className="text-center mt-12">
            <button
              onClick={loadMoreProjects}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View More Projects ({filteredProjects.length - visibleProjects} remaining)
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Want to see more of my work? Check out my GitHub for additional projects and contributions.
          </p>
          <button
            onClick={handleGithubClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-semibold"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </button>
        </div>
      </div>

      {/* Custom Code Access Modal */}
      {showCodeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
            <div className="p-6">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M12 7C13.4 7 14.8 8.6 14.8 10.2V11H16V18H8V11H9.2V10.2C9.2 8.6 10.6 7 12 7M12 8.2C11.2 8.2 10.4 8.7 10.4 10.2V11H13.6V10.2C13.6 8.7 12.8 8.2 12 8.2Z"/>
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white text-center mb-3">
                Code Access Required
              </h3>

              {/* Message */}
              <p className="text-gray-300 text-center leading-relaxed mb-6">
                First, click <span className="text-indigo-400 font-semibold">Live Demo</span> to check out the site. 
                If you like it, ask the administrator for permission to use the site&apos;s code.
              </p>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setShowCodeModal(false)}
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-all duration-300 font-medium"
                >
                  Got It
                </button>
                <button
                  onClick={() => {
                    setShowCodeModal(false)
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
                >
                  Contact Admin
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GitHub Access Modal */}
      {showGithubModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
            <div className="p-6">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white text-center mb-3">
                GitHub Access Required
              </h3>

              {/* Message */}
              <p className="text-gray-300 text-center leading-relaxed mb-6">
                Before accessing, please review the project and request approval for the relevant information.
              </p>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setShowGithubModal(false)}
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-all duration-300 font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowGithubModal(false)
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
                >
                  Request Access
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects