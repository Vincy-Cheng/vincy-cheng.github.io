import { NextRouter } from 'next/router';
import React from 'react';
import { ChevronLeft } from 'tabler-icons-react';

type BackIconButtonProps = {
  router: NextRouter;
};

const BackIconButton = ({ router }: BackIconButtonProps) => {
  return (
    <ChevronLeft
      className="cursor-pointer rounded-full hover:bg-secondary-200 dark:hover:bg-secondary-700 "
      onClick={() => {
        router.back();
      }}
    />
  );
};

export default BackIconButton;
