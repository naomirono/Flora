import React, { useState } from 'react';
import Urban from '../assets/urban.JPG';
import Community from '../assets/community.JPG';
import School from '../assets/school.JPG';
import Gallery from './Gallery';

const Projects = () => {
  const projects = [
    {
      title: 'Urban Reforestation',
      description:
        'Help us transform urban areas by planting trees in parks, neighborhoods, and public spaces. Together, we can create greener and healthier cities for everyone to enjoy.',
      image: Urban,
    },
    {
      title: 'Community Forests',
      description:
        'Join our efforts to establish community-managed forests that provide sustainable livelihoods, protect biodiversity, and preserve natural resources for future generations.',
      image: Community,
    },
    {
      title: 'School Tree Planting',
      description:
        "Engage students and promote environmental education by organizing tree planting activities in schools. Together, let's nurture the next generation of environmental stewards.",
      image: School,
    },
  ];

  const [expandedProject, setExpandedProject] = useState(null);

  const handleProjectClick = (index) => {
    setExpandedProject(index === expandedProject ? null : index);
  };

  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto max-w-[1100px]">
        <h2 className="text-4xl font-bold mb-8 text-center">
          <span className="text-green-900">Projects </span>and{' '}
          <span className="text-green-900">Initiatives</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="p-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => handleProjectClick(index)}
              />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              {expandedProject === index ? (
                <p className="text-gray-700 mb-4">{project.description}</p>
              ) : null}
              <button
                className="bg-green-900 text-white rounded-md px-4 py-2 font-bold hover:bg-green-800"
                onClick={() => handleProjectClick(index)}
              >
                {expandedProject === index ? 'Read Less' : 'Learn More'}
              </button>
            </div>
          ))}
        </div>
        <Gallery />
      </div>
    </section>
  );
};

export default Projects;
