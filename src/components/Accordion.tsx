import clsx from 'clsx';
import React, { ReactElement, useState } from 'react';
import { ChevronDown } from 'tabler-icons-react';

type AccordionProps = {
  header: string;
  children: ReactElement;
};

const Accordion = ({ header, children }: AccordionProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="text-secondary-900 dark:text-secondary-50 w-full">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full justify-between cursor-pointer"
      >
        {header}{' '}
        <ChevronDown
          className={clsx(' duration-300', {
            ['rotate-180']: open,
          })}
        ></ChevronDown>
      </div>

      <div
        className={clsx(
          'm-2 overflow-x-auto overflow-y-hidden transition-[max-height] duration-300 ease-in-out',
          open ? 'max-h-screen ' : 'max-h-0',
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
