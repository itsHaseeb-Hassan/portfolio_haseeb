import React from 'react';
import { useParams } from 'react-router-dom';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  const { id } = useParams();
  
  if (id) {
    return <div>Project Details Page - Coming Soon</div>;
  }

  return <Projects />;
};

export default ProjectsPage;