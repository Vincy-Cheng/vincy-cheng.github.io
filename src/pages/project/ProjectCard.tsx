import React from 'react';
import Tag from '../../components/Tag';

type ProjectCardProps = {
  name: string;
  tags: string[];
  thumbNailPath?: string;
};

const ProjectCard = ({ name, tags }: ProjectCardProps) => {
  return (
    <div className="rounded-xl max-w-80 bg-blue-200 p-2">
      <div className="rounded-md">
        {/* Thumb nail */} <div className="h-6 bg-red-200"></div>
      </div>
      <div className="text-center">{name}</div>
      <div className="flex flex-wrap justify-center gap-2 w-80">
        {tags.map((tag) => (
          <Tag name={tag} key={'tag-' + tag} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
