import React from 'react';

type TagProps = {
  name: string;
};

const Tag = ({ name }: TagProps) => {
  return <div className="rounded-full bg-primary-300 p-2 w-fit">{name}</div>;
};

export default Tag;
