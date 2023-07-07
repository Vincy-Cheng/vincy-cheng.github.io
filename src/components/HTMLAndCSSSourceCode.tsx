import { NextRouter } from 'next/router';
import React, { ReactNode } from 'react';
import BackIconButton from './BackIconButton';
import CopyButton from './CopyButton';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { useDarkMode } from '../provider/DarkModeProvider';
import {
  atomOneDark,
  atomOneLight,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';

type HTMLAndCSSSourceCodeProps = {
  router: NextRouter;
  htmlCode: string;
  cssCode: string;
  example: ReactNode;
  description: ReactNode;
  name: string;
};

const HTMLAndCSSSourceCode = ({
  router,
  htmlCode,
  cssCode,
  example,
  description,
  name,
}: HTMLAndCSSSourceCodeProps) => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="p-2 flex flex-col gap-3">
      <div className="flex gap-2">
        <BackIconButton router={router} />
        <p className="font-bold">{name}</p>
      </div>
      {example}
      {description}
      <div className="code-box">
        <div className="flex justify-between gap-1 items-center rounded-t-md dark:bg-secondary-800 bg-primary-300 text-secondary-50 border-b dark:border-secondary-400 border-primary-300">
          <p className="py-1 px-2 ">HTML</p>
          <CopyButton text={htmlCode} />
        </div>
        <SyntaxHighlighter
          language="htmlbars"
          style={isDarkMode ? atomOneDark : atomOneLight}
          customStyle={{ borderRadius: '0 0 8px 8px' }}
        >
          {htmlCode}
        </SyntaxHighlighter>
      </div>

      <div className="code-box">
        <div className="flex justify-between gap-1 items-center rounded-t-md dark:bg-secondary-800 bg-primary-300 text-secondary-50 border-b dark:border-secondary-400 border-primary-300">
          <p className="py-1 px-2 ">CSS</p>
          <CopyButton text={cssCode} />
        </div>
        <SyntaxHighlighter
          language="css"
          style={isDarkMode ? atomOneDark : atomOneLight}
          customStyle={{ borderRadius: '0 0 8px 8px' }}
        >
          {cssCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default HTMLAndCSSSourceCode;
