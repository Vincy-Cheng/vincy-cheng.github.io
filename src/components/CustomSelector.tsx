import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import { ChevronDown, Search } from 'tabler-icons-react';
import useOutsideAlerter from '../hooks/useOutsideAlerter';

type CustomSelectorProps = {
  title: string;
  options: string[];
  placeholder?: string;
  filter?: boolean;
};

const CustomSelector = ({
  title,
  options,
  filter,
  placeholder,
}: CustomSelectorProps) => {
  const [value, setValue] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: React.MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  const wrapperRef = useOutsideAlerter(handleClickOutside);

  return (
    <div className="w-full font-medium " ref={wrapperRef}>
      <div
        className="w-full cursor-pointer border border-secondary-300 p-2 flex items-center justify-between rounded"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        ref={buttonRef}
      >
        <p className="truncate select-none">{value ? value : options[0]}</p>
        <ChevronDown />
      </div>
      <ul
        className={clsx(
          'bg-white mt-2 max-h-40 text-secondary-700 overflow-y-auto overflow-x-hidden z-50 absolute break-words rounded-sm transition-all duration-300',
          open ? 'visible' : 'hidden',
        )}
        ref={selectRef}
        style={{
          width: wrapperRef.current?.clientWidth,
        }}
      >
        {filter && (
          <div className="flex gap-2 sticky top-0 z-50 overflow-x-hidden mx-2 pt-2">
            <Search className=" text-primary-400" />

            <input
              type="text"
              value={inputValue}
              className="outline-none placeholder:text-secondary-400 overflow-x-hidden truncate flex-1"
              placeholder={placeholder}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </div>
        )}

        {options.map((option) => (
          <li
            key={option}
            className={clsx(
              'p-2 hover:bg-primary-200 relative',
              inputValue && !new RegExp(inputValue, 'i').test(option)
                ? 'hidden'
                : 'block',
            )}
            onClick={() => {
              if (value !== option) {
                setValue(option);
              }
              setOpen(false);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomSelector;
