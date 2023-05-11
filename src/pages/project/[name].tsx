import React from 'react';
import Image from 'next/image';
import Error from 'next/error';
import { useRouter } from 'next/router';
import {
  appProjects,
  otherProjects,
  webProjects,
} from '../../hard-code.data.ts/project-info';
import { ChevronLeft } from 'tabler-icons-react';

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
      <div className="flex items-center space-x-5">
        <ChevronLeft
          className="cursor-pointer rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-700"
          onClick={() => {
            router.back();
          }}
        />
        <p className="text-lg">{info?.name}</p>
      </div>
      <div className="text-primary-500 dark:text-primary-400 pb-5 break-words">
        #{info?.tags.join('#')}
      </div>
      <div className="bg-secondary-50 dark:bg-secondary-800 p-2 rounded-xl border border-secondary-200 dark:border-secondary-700">
        {info?.description}
      </div>

      <div className="pt-5">
        <p>GitHub Link:</p>

        <a href={info?.link} className="underline text-sm">
          {info?.link}
        </a>
      </div>
      <div>
        {info?.screenshot.map((image) => (
          <Image src={image} key={image} alt={''} />
        ))}
      </div>
    </div>
  );
};

export default ProjectInfo;
