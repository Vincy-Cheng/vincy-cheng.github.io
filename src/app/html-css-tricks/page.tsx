'use client';
import React from 'react';
import ContentPage, { Content } from '../components/ContentPage';

const tricks: Content[] = [
  { name: 'Polygon slide in', route: 'polygon-slide-in' },
  { name: 'Vertical wavy text', route: 'vertical-wavy-text' },
  { name: 'Open Close Menu Icon', route: 'open-close-menu-icon' },
];

type Props = {};

const HTMLCSSTricks = (props: Props) => {
  return (
    <ol className="list-decimal list-inside">
      <ContentPage parent="html-css-tricks" content={tricks} />
    </ol>
  );
};

export default HTMLCSSTricks;
