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
    <div className="p-2 rounded text-secondary-900 dark:text-secondary-50 w-full shadow dark:shadow-secondary-700 bg-secondary-50 dark:bg-secondary-900">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full justify-between cursor-pointer items-center"
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
          'overflow-x-auto overflow-y-hidden transition-[max-height] transition-all duration-500 ease-in-out ',
          open ? 'max-h-screen border-t mt-2' : 'max-h-0',
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
