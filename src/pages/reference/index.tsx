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
    text: 'Idea to make the scroll row',
    link: 'https://stackoverflow.com/questions/56392199/make-a-button-to-scroll-horizontally-in-div',
  },
];

const Reference = (props: Props) => {
  return (
    <div>
      {references.map((reference) => (
        <div key={reference.link}>
          <a
            target="_blank"
            href={reference.link}
            className="hover:text-sky-600"
          >
            {reference.text}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Reference;
