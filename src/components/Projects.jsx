import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedProject, setExpandedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🎯' },
    { id: 'web', name: 'Web Development', icon: '💻' },
  ];

  const projects = [
    {
      id: 1,
      category: 'web',
      title: 'E-Commerce Platform',
      description: 'A modern, high-performance online shopping experience',
      fullDescription: 'Built with React, Node.js, and Stripe, this platform handles thousands of transactions daily with seamless checkout and real-time inventory management.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'Stripe', 'Tailwind'],
      stats: { sales: '+250%', users: '50K+', rating: '4.9' },
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      category: 'design',
      title: 'Creative Agency',
      description: 'Bold, expressive brand identity and website',
      fullDescription: 'Complete brand overhaul including logo design, color palette, typography, and a fully animated website that tells their unique story.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600',
      technologies: ['Figma', 'GSAP', 'Next.js', 'Framer'],
      stats: { engagement: '+180%', pages: '15+', awards: '3' },
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      category: 'mobile',
      title: 'Event Booking App',
      description: 'Smooth, intuitive event discovery platform',
      fullDescription: 'Cross-platform mobile app with real-time updates, push notifications, and seamless ticket purchasing for events of all sizes.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'Firebase', 'Redux'],
      stats: { downloads: '100K+', events: '5K+', rating: '4.8' },
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 4,
      category: 'web',
      title: 'Real Estate Platform',
      description: 'Advanced property search with interactive maps',
      fullDescription: 'Feature-rich platform with 3D virtual tours, neighborhood insights, and AI-powered property recommendations.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600',
      technologies: ['Angular', 'Google Maps', 'MongoDB'],
      stats: { listings: '10K+', visits: '200K+', leads: '+85%' },
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      category: 'design',
      title: 'SaaS Dashboard',
      description: 'Data-driven analytics interface',
      fullDescription: 'Complex data visualization dashboard that simplifies business metrics into intuitive, actionable insights.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['D3.js', 'Vue.js', 'Tailwind'],
      stats: { efficiency: '+60%', users: '500+', uptime: '99.9%' },
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      category: 'mobile',
      title: 'Fitness Tracker',
      description: 'Personalized health and wellness companion',
      fullDescription: 'AI-powered fitness app with custom workout plans, nutrition tracking, and real-time progress analytics.',
      image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Flutter', 'TensorFlow', 'Firebase'],
      stats: { users: '250K+', workouts: '1M+', rating: '4.9' },
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const handleViewProject = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500">
            Our Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of innovative solutions that have helped businesses 
            transform their digital presence and achieve remarkable results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                group relative px-6 py-3 rounded-full font-semibold text-lg
                transition-all duration-500 transform hover:scale-110
                ${selectedCategory === category.id 
                  ? 'bg-gradient-to-r from-sky-500 to-purple-500 text-white shadow-2xl shadow-purple-500/50' 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }
              `}
            >
              <span className="flex items-center gap-2">
                <span className="text-2xl">{category.icon}</span>
                {category.name}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
              style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-sm font-semibold text-white border border-white/20">
                  {categories.find(c => c.id === project.category)?.name}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-purple-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-xl font-bold text-purple-400">{value}</div>
                      <div className="text-xs text-gray-500 uppercase">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <button
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  className="w-full px-4 py-3 bg-gradient-to-r from-sky-500 to-purple-500 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
                >
                  {expandedProject === project.id ? 'Show Less' : 'Read More'}
                </button>

                {/* Expanded Details */}
                <div className={`
                  transition-all duration-500 overflow-hidden mt-4
                  ${expandedProject === project.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  <div className="p-4 bg-gray-900/50 rounded-lg border border-purple-500/30">
                    <p className="text-gray-300 text-sm mb-3">
                      {project.fullDescription}
                    </p>
                    <button
                      onClick={() => handleViewProject(project.id)}
                      className="text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors duration-300"
                    >
                      View Full Project Details →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate('/projects')}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <span>View All Projects</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;