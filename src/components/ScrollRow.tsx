import clsx from 'clsx';
import React, { ReactElement, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'tabler-icons-react';
type ScrollRowProps = {
  children: ReactElement;
};

const ScrollRow = ({ children }: ScrollRowProps) => {
  const [translateX, setTranslateX] = useState<number>(0);
  return (
    <div className="flex items-center">
      {translateX}
      <ChevronLeft
        className="w-10 cursor-pointer"
        onClick={() => {
          if (translateX < 0) {
            setTranslateX((prev) => prev + 100);
          }
        }}
      />
      <div className={clsx('overflow-x-hidden py-2')}>
        <div
          className="flex gap-2 duration-300"
          style={{ translate: `${translateX}px` }}
        >
          {children}
        </div>
      </div>
      <ChevronRight
        className="w-10 cursor-pointer"
        onClick={() => setTranslateX((prev) => prev - 100)}
      />
    </div>
  );
};

export default ScrollRow;
