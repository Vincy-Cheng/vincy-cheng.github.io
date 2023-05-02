import React from 'react';
import { useRouter } from 'next/router';
import { appProjects, otherProjects, webProjects } from './project-info';

export interface ProjectInfoProps {}

const ProjectInfo = ({}: ProjectInfoProps) => {
  const router = useRouter();
  const { name } = router.query;

  const info =
    webProjects.find((webProject) => webProject.name === name) ??
    appProjects.find((appProject) => appProject.name === name) ??
    otherProjects.find((otherProject) => otherProject.name === name);
  return (
    <div className="space-y-2">
      <div className="text-lg">{info?.name}</div>
      <div>{info?.description}</div>
      <div className="pt-5">
        <p>GitHub Link:</p>

        <a href={info?.link} className="underline text-sm">
          {info?.link}
        </a>
      </div>
    </div>
  );
};

export default ProjectInfo;
