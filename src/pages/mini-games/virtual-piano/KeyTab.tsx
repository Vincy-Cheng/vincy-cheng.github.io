import clsx from 'clsx';
import React from 'react';

type Props = {
  displayKey: boolean;
};

const KeyTab = ({ displayKey }: Props) => {
  // Testing website: https://www.musicca.com/piano

  const keys = [
    'C3',
    'C3♯ D3♭',
    'D3',
    'D3♯ E3♭',
    'E3',
    '',
    'F3',
    'F3♯ G3♭',
    'G3',
    'G3♯ A4♭',
    'A4',
    'A4♯ B4♭',
    'B4',
    '',
    'C4',
    'C4♯ D4♭',
    'D4',
    'D4♯ E4♭',
    'E4',
    '',
    'F4',
    'F4♯ G4♭',
    'G4',
    'G4♯ A5♭',
    'A5',
    'A5♯ B5♭',
    'B5',
  ];

  return (
    <div className="flex shadow w-fit">
      {keys.map((key, index) => (
        <div key={key + index} className="relative">
          <div
            className={clsx(
              'cursor-grab',
              index % 2 === 0
                ? 'bg-white h-52 w-12 border hover:bg-zinc-100 active:h-[204px]'
                : key
                ? 'bg-zinc-900 hover:bg-zinc-800 h-32 w-8 absolute z-10 -translate-x-4 active:h-[124px]'
                : '',
            )}
            onClick={() => {
              const audio = new Audio(`/audio/${key}.mp3`);
              audio.play();
            }}
          >
            {displayKey && (
              <span className="absolute bottom-0 w-full text-center select-none text-zinc-500 break-words">
                {key.replaceAll(/\d/g, '')}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KeyTab;
