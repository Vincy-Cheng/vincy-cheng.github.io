import Link from 'next/link';
import React from 'react';

export interface Content {
  name: string;
  route: string;
}

type Props = {
  parent?: string;
  content: Content[];
};

const ContentPage = ({ content, parent }: Props) => {
  return (
    <>
      {content.map((c) => (
        <Link
          href={`/${parent}/${c.route}`}
          key={c.route}
          className=" hover:text-primary-500"
        >
          <li>{c.name}</li>
        </Link>
      ))}
    </>
  );
};

export default ContentPage;
