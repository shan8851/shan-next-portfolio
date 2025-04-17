import { projectsData } from "@/app/data/projects";
import React from "react";

export interface ProjectProps {
  title: string;
  description: string;
  tags?: string[];
  url: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, tags, url }) => {
  return (
    <div className="flex flex-col gap-2 border-b mb-3">
      <div className="flex gap-4 items-center">
        <a href={url} className="text-md font-bold no-underline text-pink-400 hover:underline">
          {title}
        </a>
        {tags && (
          <div className="flex gap-1">
            {tags.map((tag, index) => (
              <span key={index} className="text-xs bg-slate-300 dark:bg-slate-700 py-0.5 px-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <p className="mt-2 mb-4 text-md">{description}</p>
    </div>
  );
};

export const ProjectsPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-green-400">Tinkering</h3>
      <p className="text-md">
        I treat projects like prototypes: quick builds to explore new patterns, tools, or mental models. Some grow into
        real tools, others are pure learning. Either way, they’re a core part of how I stay sharp and push deeper into
        the stack.
      </p>

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
