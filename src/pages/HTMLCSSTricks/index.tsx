import Link from 'next/link';
import React from 'react';

interface Trick {
  name: string;
  route: string;
}
const tricks: Trick[] = [{ name: 'Polygon slide in', route: 'PolygonSlideIn' }];

type Props = {};

const HTMLCSSTricks = (props: Props) => {
  return (
    <ol className="list-decimal list-inside">
      {tricks.map((trick) => (
        <Link
          href={`/HTMLCSSTricks/${trick.route}`}
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
