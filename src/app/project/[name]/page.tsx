'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Error from 'next/error';

import {
  appProjects,
  otherProjects,
  webProjects,
} from '../../_hard-code.data.ts/project-info';
import BackIconButton from '../../components/BackIconButton';
import Spinner from '../../components/Spinner';
import clsx from 'clsx';
import { useParams, useRouter } from 'next/navigation';

export interface ProjectInfoProps {}

const ProjectInfo = ({}: ProjectInfoProps) => {
  const router = useRouter();

  let { name } = useParams();
  name = decodeURIComponent(name as string);

  const info =
    webProjects.find((webProject) => webProject.name === name) ??
    appProjects.find((appProject) => appProject.name === name) ??
    otherProjects.find((otherProject) => otherProject.name === name);

  const [reveal, setReveal] = useState<boolean[]>(
    info?.screenshot.map(() => false) ?? [],
  );

  if (!info) {
    return <Error statusCode={404} title="page Not Found" />;
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-5 ">
        <BackIconButton router={router} />
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

      {info?.screenshot.map((image, index) => (
        <div key={image} className="w-full text-center">
          <Image
            src={image}
            alt={'/'}
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto h-auto max-h-[50rem] min-h-[10rem]"
            onError={() =>
              setReveal((prev) => {
                const tmp = [...prev];
                tmp[index] = true;
                return tmp;
              })
            }
            onLoad={() => {
              setReveal((prev) => {
                const tmp = [...prev];
                tmp[index] = true;
                return tmp;
              });
            }}
          />

          <span className={clsx('', reveal[index] ? 'hidden' : 'inline-block')}>
            <Spinner />
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProjectInfo;
