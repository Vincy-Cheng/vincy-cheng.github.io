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
  const [size, setSize] = useState<number>(45);
  const [stroke, setStroke] = useState<number>(1);
  const [color, setColor] = useState<string>('#000000');

  const example = (
    <div className="">
      <div className="pb-2 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label htmlFor="">Size: {size}</label>
          <input
            type="range"
            min={20}
            max={100}
            value={size}
            className="outline-none appearance-none rounded-full h-2 accent-primary-500 bg-no-repeat bg-gradient-to-r from-primary-300 to-primary-300"
            onChange={(e) => {
              setSize(Number(e.target.value));
            }}
            style={{
              backgroundSize: `${((size - 20) / 80) * 100}% 100%`,
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="">Stroke: {stroke}</label>
          <input
            type="range"
            min={1}
            max={10}
            value={stroke}
            className="outline-none appearance-none rounded-full h-2 accent-primary-500 bg-no-repeat bg-gradient-to-r from-primary-300 to-primary-300 "
            onChange={(e) => {
              setStroke(Number(e.target.value));
            }}
            style={{
              backgroundSize: `${((stroke - 1) / 9) * 100}% 100%`,
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="">Color:</label>
          <input
            type="color"
            value={color}
            className=" appearance-none outline-none border-none"
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
        </div>
      </div>

      <div
        className="bg-white rounded-lg p-4 py-6"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        style={{ width: size + 32 }}
      >
        <OpenCloseIcon
          isOpen={isOpen}
          color={color}
          size={size}
          stroke={stroke}
        />
      </div>
    </div>
  );

  const description = (
    <div>
      This animation icon is referred to{' '}
      <a
        target="_blank"
        className=" hover:underline text-primary-500 dark:text-primary-400"
        href="https://codepen.io/designcouch/pen/ExvwPY"
      >
        Jesse Couch&rsquo; Menu &quot;Hamburger&quot; Icon Animations.
      </a>{' '}
      I added some dynamic controls on color, stroke and size. So I can re-use
      it anywhere.
    </div>
  );
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
