// projects.tsx
import { projectsData } from '@/app/data/projects';
import React from 'react';

export interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  url: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, tags, url }) => {
  return (
    <div className="flex flex-col p-4 border-2 border-slate-700 rounded-md">
      <a href={url} className="text-xl font-bold underline">
        {title}
      </a>
      <p className="mt-2 mb-4">
        {description}
      </p>
      <div className="flex flex-wrap">
        {tags.map((tag, index) => (
          <span key={index} className="mr-2 mb-2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};



export const ProjectsPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3>Projects</h3>
      <div className="grid grid-cols-3 gap-4">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
};

