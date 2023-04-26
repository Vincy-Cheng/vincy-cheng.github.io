import React, { ReactElement, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'tabler-icons-react';
type ScrollRowProps = {
  children: ReactElement;
};

const ScrollRow = ({ children }: ScrollRowProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="flex items-center gap-2">
      {/* {translateX} */}
      <ChevronLeft
        className="w-20 cursor-pointer"
        onClick={() => {
          if (ref.current) {
            ref.current.scrollLeft -= 200;
          }
        }}
      />

      <div
        className="flex gap-2 overflow-auto duration-300 scrollbar-hide scroll-smooth"
        ref={ref}
      >
        {children}
      </div>

      <ChevronRight
        className="w-20 cursor-pointer"
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
