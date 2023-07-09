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
  htmlCode?: string;
  cssCode?: string;
  tsCode?: string;
  example: ReactNode;
  description: ReactNode;
  name: string;
};

const HTMLAndCSSSourceCode = ({
  router,
  htmlCode,
  cssCode,
  tsCode,
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
      {htmlCode && (
        <div className="code-box">
          <div className="flex justify-between gap-1 items-center rounded-t-md dark:bg-secondary-800 bg-primary-300 text-secondary-50 border-b dark:border-secondary-400 border-primary-300">
            <p className="py-1 px-2 ">tsx</p>
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
      )}
      {cssCode && (
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
      )}

      {tsCode && (
        <div className="code-box">
          <div className="flex justify-between gap-1 items-center rounded-t-md dark:bg-secondary-800 bg-primary-300 text-secondary-50 border-b dark:border-secondary-400 border-primary-300">
            <p className="py-1 px-2 ">TypeScript</p>
            <CopyButton text={tsCode} />
          </div>
          <SyntaxHighlighter
            language="typescript"
            style={isDarkMode ? atomOneDark : atomOneLight}
            customStyle={{ borderRadius: '0 0 8px 8px' }}
          >
            {tsCode}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};

export default HTMLAndCSSSourceCode;
