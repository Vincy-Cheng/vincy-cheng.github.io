import Link from 'next/link';
import React from 'react';

interface Trick {
  name: string;
  route: string;
}
const tricks: Trick[] = [
  { name: 'Polygon slide in', route: 'polygon-slide-in' },
  { name: 'Vertical wavy text', route: 'vertical-wavy-text' },
  { name: 'Open Close Menu Icon', route: 'open-close-menu-icon' },
];

type Props = {};

const HTMLCSSTricks = (props: Props) => {
  return (
    <ol className="list-decimal list-inside">
      {tricks.map((trick) => (
        <Link
          href={`/html-css-tricks/${trick.route}`}
          key={trick.route}
          className=" hover:text-primary-500"
        >
          <li>{trick.name}</li>
        </Link>
      ))}
    </ol>
  );
};

export default HTMLCSSTricks;
