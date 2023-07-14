import { useRouter } from 'next/router';
import React, { useState } from 'react';
import OpenCloseIcon from '../../components/nav/OpenCloseIcon';
import HTMLAndCSSSourceCode from '../../components/HTMLAndCSSSourceCode';

type Props = {};

const htmlTag = `<div className="flex">
  <div
    className="my-auto"
    style={{
      width: size,
      height: size * 0.75,
      position: 'relative',
      transform: 'rotate(0)',
      transition: '0.5s ease-in-out',
    }}
  >
    <span
      style={{
        ...commonStyle,
        top: isOpen ? (stroke ?? 1) / 2 : 0,
        transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
      }}
    ></span>
    <span
      style={{
        ...commonStyle,
        top: (size * 0.75) / 2,
        width: isOpen ? '0' : '100%',
        opacity: isOpen ? 0 : 1,
      }}
    ></span>
    <span
      style={{
        ...commonStyle,
        top: isOpen ? size * 0.75 - (stroke ?? 1) / 2 : size * 0.75,
        transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)',
      }}
    ></span>
  </div>
</div>`;
const tsCode = `
type OpenCloseIconProps = {
  isOpen: boolean;
  color?: string;
  stroke?: number;
  size: number;
};

const commonStyle: React.CSSProperties = {
  height: stroke ?? 1,
  width: '100%',
  left: 0,
  display: 'block',
  position: 'absolute',
  transformOrigin: 'left center',
  transition: '.25s ease-in-out',
  borderRadius: size,
  opacity: 1,
  background: color ?? 'black',
};`;

const cssScript = ``;
const OpenCloseMenuIcon = (props: Props) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const example = (
    <div
      className="bg-white rounded-lg p-2 m-auto"
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
    >
      <OpenCloseIcon isOpen={isOpen} color={'black'} size={45} />
    </div>
  );

  const description = <div></div>;
  return (
    <HTMLAndCSSSourceCode
      router={router}
      htmlCode={htmlTag}
      cssCode={cssScript}
      tsCode={tsCode}
      example={example}
      description={description}
      name="Open Close Menu Icon"
    />
  );
};

export default OpenCloseMenuIcon;
