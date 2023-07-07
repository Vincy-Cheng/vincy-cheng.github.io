import React, { useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import CopyButton from '../../components/CopyButton';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useDarkMode } from '../../provider/DarkModeProvider';
import { useRouter } from 'next/router';
import BackIconButton from '../../components/BackIconButton';

type Props = {};

const htmlTag = `<div className="youtube-cards flex w-60 h-48 cursor-pointer hover:scale-110 transition-all text-secondary-50">
<div className="w-60 h-48 p-2 absolute flex flex-col justify-end items-start text-xl rounded-lg fadeIn">
   <p>Polygon</p>
   <p>Slide In</p>
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
</div>`;

const cssScript = `.fadeIn {
  animation: fadeIn 4s infinite;
}

@keyframes fadeIn {
  from {
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  }
  to {
    clip-path: polygon(0 0, 25% 0, 55% 100%, 0 100%);
    background-color: #45454a;
  }
}`;

const PolygonSlideIn = (props: Props) => {
  const router = useRouter();
  const { isDarkMode } = useDarkMode();

  return (
    <div className="p-2 flex flex-col gap-3">
      <div className="flex gap-2">
        <BackIconButton router={router} />
        <p className="font-bold">Polygon Slide In</p>
      </div>

      <div className="youtube-cards flex w-60 h-48 cursor-pointer hover:scale-110 transition-all text-secondary-50">
        <div className="w-60 h-48 p-2 absolute flex flex-col justify-end items-start text-xl rounded-lg fadeIn">
          <p>Polygon</p>
          <p>Slide In</p>
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
      <div>
        That used clip path - polygon animation. The gray part will slide form
        left to right. I made a CSS class - fadeIn. If you want to stop the
        animation once it reached your expected shape, change the class fadeIn
        <SyntaxHighlighter
          language="css"
          style={isDarkMode ? atomOneDark : atomOneLight}
          customStyle={{ borderRadius: '0 0 8px 8px' }}
        >
          {'animation: fadeIn 4s infinite;'}
        </SyntaxHighlighter>
        to
        <SyntaxHighlighter
          language="css"
          style={isDarkMode ? atomOneDark : atomOneLight}
          customStyle={{ borderRadius: '0 0 8px 8px' }}
        >
          {'animation: fadeIn 4s forward;'}
        </SyntaxHighlighter>
        <br />
        <a
          target="_blank"
          href="https://bennettfeely.com/clippy/"
          className=" hover:underline text-primary-500 dark:text-primary-400"
        >
          CSS clip-path maker
        </a>{' '}
        is a useful website that calculate the clip path of polygon or other
        shape.
      </div>
      <div className="code-box">
        <div className="flex justify-between gap-1 items-center rounded-t-md dark:bg-secondary-800 bg-primary-300 text-secondary-50 border-b dark:border-secondary-400 border-primary-300">
          <p className="py-1 px-2 ">HTML</p>
          <CopyButton text={htmlTag} />
        </div>
        <SyntaxHighlighter
          language="htmlbars"
          style={isDarkMode ? atomOneDark : atomOneLight}
          customStyle={{ borderRadius: '0 0 8px 8px' }}
        >
          {htmlTag}
        </SyntaxHighlighter>
      </div>

      <div className="code-box">
        <div className="flex justify-between gap-1 items-center rounded-t-md dark:bg-secondary-800 bg-primary-300 text-secondary-50 border-b border-secondary-400">
          <p className="py-1 px-2 ">CSS</p>
          <CopyButton text={cssScript} />
        </div>
        <SyntaxHighlighter
          language="css"
          style={isDarkMode ? atomOneDark : atomOneLight}
          customStyle={{ borderRadius: '0 0 8px 8px' }}
        >
          {cssScript}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default PolygonSlideIn;
