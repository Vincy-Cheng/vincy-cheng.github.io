import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import React from 'react';
import { ChevronLeft } from 'tabler-icons-react';

type BackIconButtonProps = {
  router: AppRouterInstance;
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
