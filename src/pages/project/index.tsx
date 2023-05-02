import React from 'react';
import ProjectCard from './ProjectCard';
import ScrollRow from '../../components/ScrollRow';
import { appProjects, otherProjects, webProjects } from './project-info';

type Props = {};

const Project = (props: Props) => {
  return (
    <div className="w-full">
      {webProjects.length > 0 && (
        <div>
          <div className="border-b border-primary-500 text-lg">
            Web development
          </div>
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
        </div>
      )}
      {appProjects.length > 0 && (
        <div>
          <div className="border-b border-primary-500 text-lg">
            App development
          </div>
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
        </div>
      )}
      {otherProjects.length > 0 && (
        <div>
          <div className="border-b border-primary-500 text-lg">
            Other Project
          </div>
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
        </div>
      )}
    </div>
  );
};

export default Project;
