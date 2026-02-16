import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500">
          About Me
        </h1>
        <div className="max-w-4xl mx-auto">
 <p className="text-xl text-gray-300 leading-relaxed text-justify">
  I am a passionate Full Stack Developer specializing in the MERN stack 
  (MongoDB, Express.js, React.js, and Node.js). I enjoy building scalable 
  backend systems, responsive user interfaces, and high-performance web 
  applications that solve real-world problems.

  With hands-on experience in API development, authentication systems, 
  file handling, and modern UI design using Tailwind CSS, I focus on writing 
  clean, maintainable, and efficient code. 

  My goal is to continuously improve my skills, contribute to impactful 
  projects, and build digital solutions that create real value.
</p>

        </div>
      </div>
    </div>
  );
};

export default About;