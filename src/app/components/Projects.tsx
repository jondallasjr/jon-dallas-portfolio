"use client";

import { Card } from './Card';

export const Projects = () => {
  // Example project data
  const projects = [
    {
      title: "AI-Powered Resume Rewriter",
      description:
        "Developed a custom AI tool that reduces resume rewrite costs by 87% using OpenAI's GPT-4 and advanced prompt engineering.",
      technologies: ["OpenAI API", "Coda.io", "React"],
    },
    {
      title: "Automated Property Descriptions",
      description:
        "Built a low-code solution that generates property descriptions in seconds, saving 80% of the time previously spent on manual writing.",
      technologies: ["Coda.io", "OpenAI API", "JavaScript"],
    },
    {
      title: "SEO Traffic Booster",
      description:
        "Created an AI-driven SEO tool that increased organic traffic by 10.5% through automated keyword optimization and content suggestions.",
      technologies: ["React", "OpenAI API", "TypeScript"],
    },
  ];

  return (
    <Card>
      <h3 className="heading">Projects</h3>
      <p className="body-text mb-6">
        Here are some of the projects I've worked on, showcasing my expertise in AI integration, low-code development, and process optimization.
      </p>

      {/* Project List */}
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {project.title}
            </h4>
            <p className="body-text mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};