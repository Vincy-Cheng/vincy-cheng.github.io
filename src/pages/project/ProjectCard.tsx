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
      className="rounded-xl min-w-[320px] p-2 dark:bg-primary-800 bg-primary-100 hover:scale-110 duration-300"
      href={`/project/${encodeURI(name)}`}
    >
      <div className="rounded-md bg-red-200">
        {/* Thumb nail */} <div className="h-6"></div>
      </div>
      <div className="text-center text-primary-300">{name}</div>
      <div className="flex flex-wrap justify-center gap-2">
        {tags.map((tag) => (
          <Tag name={tag} key={name + '-tag-' + tag} />
        ))}
      </div>
    </Link>
  );
};

export default ProjectCard;
