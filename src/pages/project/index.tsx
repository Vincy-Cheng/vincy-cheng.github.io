import React from 'react';
import ProjectCard from './ProjectCard';
import ScrollRow from '../../components/ScrollRow';

type Props = {};

const Project = (props: Props) => {
  return (
    <div>
      <ScrollRow>
        <>
          {/* <ProjectCard
            name={'Test'}
            tags={[
              'TypeScript',
              'JavaScript',
              'HTML',
              'CSS',
              'SQL',
              'JavaScript',
              'HTML',
              'CSS',
            ]}
          />
          <ProjectCard
            name={'Test'}
            tags={[
              'SQL',
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
              'SQL',
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
              'SQL',
              'JavaScript',
              'HTML',
              'CSS',
              'TypeScript',
              'JavaScript',
              'HTML',
              'CSS',
            ]}
          /> */}
        </>
      </ScrollRow>
    </div>
  );
};

export default Project;
