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
    <div className="flex flex-col">
      <a href={url} className="text-md text-green-500 hover:text-green-800 decoration-transparent">
        {`-${title}`}
      </a>
      {tags && (
        <div className='flex gap-1 pl-4'>
          {tags.map((tag, index) => (
            <React.Fragment key={index}>
              <span className="text-sm text-orange-400">{tag}</span>
              {index < tags.length - 1 && <span className="text-sm text-orange-400">, </span>}
            </React.Fragment>
          ))}
        </div>
      )}
      <p className="pl-4 m-0 text-md">
        {description}
      </p>
    </div>
  );
};




export const ProjectsPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-1 px-4">
      <h3>Projects</h3>
      <p className="text-md">I&apos;m pretty much always tinkering with something, usually it is my gateway to learning new tech, all my projects are generally great learning experience, but naturally some are more complete than others. Below are a few of my favorites.</p>
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

