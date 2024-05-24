import React from 'react';
import { references } from '../_hard-code.data.ts/reference.data';

type Props = {};

export interface IReference {
  text: string;
  link: string;
}

const Reference = (props: Props) => {
  return (
    <ol className="list-decimal list-inside">
      {references.map((reference) => (
        <li key={reference.link}>
          <a
            target="_blank"
            href={reference.link}
            className="hover:text-sky-600"
          >
            {reference.text}
          </a>
        </li>
      ))}
    </ol>
  );
};

export default Reference;
