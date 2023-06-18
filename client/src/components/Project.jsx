import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Urban Reforestation',
      description: 'Help us transform urban areas by planting trees in parks, neighborhoods, and public spaces. Together, we can create greener and healthier cities for everyone to enjoy.',
      imageUrl: '/path/to/urban-reforestation.jpg',
    },
    {
      title: 'Community Forests',
      description: 'Join our efforts to establish community-managed forests that provide sustainable livelihoods, protect biodiversity, and preserve natural resources for future generations.',
      imageUrl: '/path/to/community-forests.jpg',
    },
    {
      title: 'School Tree Planting',
      description: 'Engage students and promote environmental education by organizing tree planting activities in schools. Together, let\'s nurture the next generation of environmental stewards.',
      imageUrl: '/path/to/school-tree-planting.jpg',
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects and Initiatives</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <button className="bg-green-900 text-white rounded-md px-4 py-2 font-bold hover:bg-green-800">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
