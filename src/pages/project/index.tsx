import React from 'react';
import ProjectCard from './ProjectCard';

type Props = {};

const Project = (props: Props) => {
  return (
    <div className="bg-green-200 flex gap-2">
      <ProjectCard
        name={'Test'}
        tags={[
          'TypeScript',
          'JavaScript',
          'HTML',
          'CSS',
          'TypeScript',
          'JavaScript',
          'HTML',
          'CSS',
        ]}
      />
      <ProjectCard
        name={'Test'}
        tags={[
          'TypeScript',
          'JavaScript',
          'HTML',
          'CSS',
          'TypeScript',
          'JavaScript',
          'HTML',
          'CSS',
        ]}
      />
    </div>
  );
};

export default Project;
