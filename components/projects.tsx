import { projectsData } from '@/app/data/projects';
import React from 'react';

export interface ProjectProps {
  title: string;
  description: string;
  tags?: string[];
  url: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, tags, url }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4 items-center">
        <a href={url} className="text-md font-bold underline">
        {title}
        </a>
        {tags && (
          <div className='flex gap-1'>
          {tags.map((tag, index) => (
          <span key={index} className="text-xs bg-slate-700 py-0.5 px-1 rounded-md">
            {tag}
          </span>
        ))}
        </div>
        )}
      </div>
      <p className="mt-2 mb-4 text-sm">
        {description}
      </p>
    </div>
  );
};



export const ProjectsPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3>Projects</h3>
      <p>I&apos;m pretty much always tinkering with something, usually it is my gatewat to learning new tech, all my projects are generally great learning experience, but naturally some are more complete than others. Below are a few of my favorites.</p>
      <div>
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

