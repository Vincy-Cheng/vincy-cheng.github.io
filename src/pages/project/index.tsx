import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import ScrollRow from '../../components/ScrollRow';
import {
  IProjectInfo,
  appProjects,
  otherProjects,
  webProjects,
} from './project-info';
import { Search } from 'tabler-icons-react';

type Props = {};

enum EProjectType {
  web = 'Web development',
  app = 'App development',
  other = 'Other Project',
}

const Project = (props: Props) => {
  const originalProjects: { type: EProjectType; content: IProjectInfo[] }[] = [
    { type: EProjectType.web, content: webProjects },
    { type: EProjectType.app, content: appProjects },
    { type: EProjectType.other, content: otherProjects },
  ];
  const [projects, setProjects] =
    useState<{ type: EProjectType; content: IProjectInfo[] }[]>(
      originalProjects,
    );

  return (
    <div className="w-full">
      <div className="absolute right-0 mr-2 p-2 flex items-center space-x-2 shadow rounded-full w-fit bg-primary-600 dark:shadow-primary-500">
        {/* Search bar */}
        <Search className="text-secondary-50" />
        <input
          type="text"
          className="outline-none bg-transparent text-secondary-100 placeholder:text-secondary-400"
          placeholder="Searching tag"
          onChange={(e) => {
            setProjects(
              originalProjects.map((project) => ({
                type: project.type,
                content: project.content.filter((p) =>
                  p.tags.some((tag) => tag.includes(e.target.value)),
                ),
              })),
            );
          }}
        />
      </div>

      <div className="pt-5">
        {projects.map((project, index) => (
          <div key={project.type + index}>
            {project.content.length > 0 && (
              <>
                {' '}
                <div className="border-b border-primary-500 text-lg ">
                  {project.type}
                </div>
                <ScrollRow>
                  <>
                    {project.content.map((projectDetail) => (
                      <ProjectCard
                        key={project.type + '-key-' + projectDetail.name}
                        name={projectDetail.name}
                        tags={projectDetail.tags}
                      />
                    ))}
                  </>
                </ScrollRow>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
