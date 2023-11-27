import React from 'react';
import ContentPage, { Content } from '../../components/ContentPage';

type Props = {};

const miniGames: Content[] = [
  { name: 'Virtual Piano', route: 'virtual-piano' },
];

const MiniGame = (props: Props) => {
  return (
    <ol className="list-decimal list-inside">
      <ContentPage parent="mini-games" content={miniGames} />
    </ol>
  );
};

export default MiniGame;
