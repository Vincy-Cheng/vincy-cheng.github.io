import React from 'react';
import Tag from '../../components/Tag';
import Link from 'next/link';

export interface ProjectCardProps {
  name: string;
  tags: string[];
}

const ProjectCard = ({ name, tags }: ProjectCardProps) => {
  return (
    <Link
      className="rounded-xl min-w-[300px] max-w-[500px] p-2 dark:bg-primary-800 bg-primary-100 hover:scale-105 duration-300 space-y-2"
      href={`/project/${encodeURI(name)}`}
    >
      <div className="text-center dark:text-primary-300 text-primary-400 text-lg">
        {name}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {tags?.sort().map((tag) => (
          <Tag name={tag} key={name + '-tag-' + tag} />
        ))}
      </div>
    </Link>
  );
};

export default ProjectCard;
