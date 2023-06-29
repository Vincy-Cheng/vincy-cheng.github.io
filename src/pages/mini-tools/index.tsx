import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

const MiniTools = (props: Props) => {
  const router = useRouter();
  return (
    <div className="p-2">
      <div
        className="youtube-cards flex w-60 h-48 cursor-pointer hover:scale-110 transition-all text-secondary-50"
        onClick={() => {
          router.push(`${router.pathname}/YouTubeConverter`);
        }}
      >
        <div className="w-60 h-48 p-2 absolute flex flex-col justify-end items-start text-xl rounded-lg fadeIn">
          <p>YouTube</p>
          <p>Converter</p>
        </div>
        <div className="bg-red-500 grid rounded-lg ">
          <div className=" bg-red-500 justify-self-center self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75%"
              height="75%"
              viewBox="0 0 80 60"
              className="m-auto"
            >
              <polygon points="27.5,17.5 27.5,47.5 55,32.5" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniTools;
