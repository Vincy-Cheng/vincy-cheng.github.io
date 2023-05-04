import React from 'react';
import Error from 'next/error';
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

  if (!info) {
    return <Error statusCode={404} />;
  }
  return (
    <div className="space-y-2">
      <div className="text-lg">{info?.name}</div>
      <div className="text-primary-500 dark:text-primary-400 pb-5">
        #{info?.tags.join('#')}
      </div>
      <div className="bg-secondary-100 dark:bg-secondary-800 p-2 rounded-xl border border-secondary-200 dark:border-secondary-700">
        {info?.description}
      </div>

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
