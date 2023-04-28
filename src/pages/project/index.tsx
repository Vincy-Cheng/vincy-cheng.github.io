import React from 'react';
import ProjectCard from './ProjectCard';
import ScrollRow from '../../components/ScrollRow';
import { appProjects, otherProjects, webProjects } from './project-info';

type Props = {};

const Project = (props: Props) => {
  return (
    <div className="w-full">
      {webProjects.length > 0 && (
        <ScrollRow>
          <>
            {webProjects.map((webProject) => (
              <ProjectCard
                key={'webProject-key-' + webProject.name}
                name={webProject.name}
                tags={webProject.tags}
              />
            ))}
          </>
        </ScrollRow>
      )}
      {appProjects.length > 0 && (
        <ScrollRow>
          <>
            {appProjects.map((appProject) => (
              <ProjectCard
                key={'appProject-key-' + appProject.name}
                name={appProject.name}
                tags={appProject.tags}
              />
            ))}
          </>
        </ScrollRow>
      )}
      {otherProjects.length > 0 && (
        <ScrollRow>
          <>
            {otherProjects.map((otherProject) => (
              <ProjectCard
                key={'otherProject-key-' + otherProject.name}
                name={otherProject.name}
                tags={otherProject.tags}
              />
            ))}
          </>
        </ScrollRow>
      )}
    </div>
  );
};

export default Project;
