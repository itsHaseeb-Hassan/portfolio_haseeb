import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import realstate from "../assets/realstatewebsite.png";
import realstatedashboard from "../assets/realstatedashboard.png";
import digitalmarketer from "../assets/digitalmarketer.png";
import smarteyes from "../assets/smarteyes.png";
import landing1 from "../assets/fitness.PNG";
import dashboard1 from "../assets/exploreskill.PNG";
import fixify from "../assets/fixify.png"
const Projects = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const categories = [
    { id: "all", name: "All Projects", icon: "🎯" },
    { id: "web", name: "Web Development", icon: "💻" },
    { id: "design", name: "Design", icon: "🎨" },
  ];

  const projects = [
   {
    id: 1,
    category: "Web",
    title: "FixiFy Services",
    description: "Professional commercial and residential Services solutions",
    fullDescription:
      "FixiFy Cleaning Services provides tailored cleaning solutions for offices, commercial spaces, and homes. Utilizing eco-friendly products and trained professionals, we ensure spotless and hygienic environments, optimizing productivity and comfort for clients.",
    image: fixify,
    link:'https://fixify-three.vercel.app/',
    technologies: ["React", "Node js", "Mongo DB", "Tailwind CSS"],
    link: "https://fixify-cleaning.vercel.app/",
  },
    {
      id: 2,
      category: "web",
      title: "Real Estate Platform",
      description: "Advanced property search with interactive design",
      fullDescription:
        "Feature-rich platform with 3D tours, neighborhood insights, and smart recommendations.",
      image: realstate,
      link: "https://estate-vue.vercel.app/",
      technologies: ["React", "Google Maps", "Tailwind CSS"],
    },
    {
      id: 3,
      category: "design",
      title: "Real Estate Dashboard",
      description: "Data-driven analytics interface",
      fullDescription:
        "Complex data visualization dashboard simplifying business metrics.",
      image: realstatedashboard,
      link: "https://estate-vue-4wti.vercel.app/",
      technologies: ["React", "ReCharts", "Tailwind"],
    },
    {
      id: 4,
      category: "design",
      title: "Digital Marketer",
      description: "Personalized Portfolio",
      fullDescription:
        "Specialize in social media marketing, focusing on Facebook and Google Ads.",
      image: digitalmarketer,
      link: "https://portfolio-soban.vercel.app/",
      technologies: ["React", "CSS", "Tailwind CSS"],
    },
    {
      id: 5,
      category: "web",
      title: "SmartEyes Streaming App",
      description: "Real-time streaming platform",
      fullDescription:
        "A modern streaming app built with React, enabling users to watch live content with minimal latency.",
      image: smarteyes,
      link: "https://smart-eyes-streaming.vercel.app/",
      technologies: ["React", "Tailwind CSS", "Node.js"],
    },
    {
      id: 6,
      category: "design",
      title: "Landing Page 1",
      description: "Beautifully crafted landing page",
      fullDescription:
        "Designed with user engagement in mind, fully responsive and visually appealing.",
      image: landing1,
      link: "https://fitness-page-zeta.vercel.app/",
      technologies: ["React", "Tailwind CSS", "Figma"],
    },
    {
      id: 7,
      category: "design",
      title: "Dashboard Design 1",
      description: "Modern dashboard interface",
      fullDescription:
        "Creative dashboard with clear data visualization and interactive elements.",
      image: dashboard1,
      link: "https://xplore-skill-goap.vercel.app/",
      technologies: ["React", "Tailwind CSS", "Charts.js"],
    },
  ];

  // Filter projects by selected category
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handleViewProject = (project) => {
    if (project.link) {
      window.open(project.link, "_blank");
    } else {
      navigate(`/projects/${project.id}`);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="py-20 bg-gray-900 border-t border-gray-800 min-h-screen">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
            Our Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our innovative solutions that help businesses transform digitally.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentPage(1);
              }}
              className={`px-5 py-2 rounded-full font-medium transition-all
              ${
                selectedCategory === category.id
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-700 px-3 py-1 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Button */}
                <button
                  onClick={() => handleViewProject(project)}
                  className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded text-white text-sm transition"
                >
                  Visit Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 gap-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
             {"<"}
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
             {">"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects
