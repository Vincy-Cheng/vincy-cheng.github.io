import React, { useState } from 'react';
import KeyTab from './KeyTab';

type Props = {};

const Piano = (props: Props) => {
  const [displayKey, setDisplayKey] = useState<boolean>(false);

  return (
    <div>
      Virtual Piano
      <div>
        <label htmlFor="" className="flex items-center gap-1">
          <input
            type="checkbox"
            defaultChecked={displayKey}
            onClick={() => {
              setDisplayKey((prev) => !prev);
            }}
          />
          Key
        </label>
      </div>
      <KeyTab displayKey={displayKey} />
      Credit: Audio files come from{' '}
      <a href="https://freesound.org/people/TEDAgame/">
        Freesound&apos;s TEDAgame
      </a>
    </div>
  );
};

export default Piano;
