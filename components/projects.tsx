import { projectsData } from '@/app/data/projects';
import React from 'react';

export interface ProjectProps {
  title: string;
  description: string;
  tags?: string[];
  url: string;
  isLast?: boolean;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  tags,
  url,
  isLast,
}) => {
  return (
    <div
      className={`flex flex-col gap-2 pb-4 ${
        !isLast ? 'border-b border-border' : ''
      }`}
    >
      <div className="flex items-center justify-between flex-wrap gap-3">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium text-text hover:text-purple transition-colors"
        >
          {title}
        </a>
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-surface text-textSecondary px-2 py-0.5 rounded-md border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <p className="text-sm text-textSecondary leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export const ProjectsPage: React.FC = () => {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h3 className="text-green font-semibold tracking-tight text-xl">
          Tinkering
        </h3>
        <p className="text-base text-textSecondary mt-2 leading-loose">
          I treat projects like prototypes: quick builds to explore new
          patterns, tools, or mental models. Some grow into real tools, others
          are pure learning. Either way, they’re a core part of how I stay sharp
          and push deeper into the stack.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            url={project.url}
            isLast={index === projectsData.length - 1}
          />
        ))}
      </div>
    </section>
  );
};
