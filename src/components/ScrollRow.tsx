import React, { ReactElement, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'tabler-icons-react';
type ScrollRowProps = {
  children: ReactElement;
};

const ScrollRow = ({ children }: ScrollRowProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-row items-center gap-2">
      <ChevronLeft
        className="cursor-pointer rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-700"
        onClick={() => {
          if (ref.current) {
            ref.current.scrollLeft -= 200;
          }
        }}
      />

      <div
        className="w-full flex gap-6 overflow-x-scroll duration-300 scrollbar-hide scroll-smooth py-4 px-6"
        ref={ref}
      >
        {children}
      </div>

      <ChevronRight
        className="cursor-pointer rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-700"
        onClick={() => {
          if (ref.current) {
            ref.current.scrollLeft += 200;
          }
        }}
      />
    </div>
  );
};

export default ScrollRow;
