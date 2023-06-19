import React from 'react';

type Props = {};

interface IReference {
  text: string;
  link: string;
}
const references: IReference[] = [
  {
    text: 'Idea to make the scroll row',
    link: 'https://stackoverflow.com/questions/56392199/make-a-button-to-scroll-horizontally-in-div',
  },
  {
    text: 'Way to restrict number to a certain range (by creating Range interface)',
    link: 'https://stackoverflow.com/questions/39494689/is-it-possible-to-restrict-number-to-a-certain-range/70307091#70307091',
  },
];

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
