import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { colorStringToRGB, gradientText } from '../../common';
import HTMLAndCSSSourceCode from '../../components/HTMLAndCSSSourceCode';

type Props = {};

const htmlTag = ` <div className="text-4xl py-5 wavy">
  {gradientText(
    Array.from('Wavy Text'),
    colorStringToRGB(colors.startColor),
    colorStringToRGB(colors.endColor),
  ).map((stop, index) => (
    <p
      key={index}
      className="inline-block uppercase tracking-widest"
      style={{
        ['--i' as any]: index + 1,
        ['--r1' as any]: stop.startColor.red,
        ['--g1' as any]: stop.startColor.green,
        ['--b1' as any]: stop.startColor.blue,
        ['--r2' as any]: stop.endColor.red,
        ['--g2' as any]: stop.endColor.green,
        ['--b2' as any]: stop.endColor.blue,
      }}
    >
      {stop.char === ' ' ? <>&nbsp;</> : stop.char}
    </p>
  ))}
</div>`;

const cssScript = `.wavy {
  position: relative;
}

.wavy p {
  display: inline-block;
  animation: animate 2s ease-in-out infinite;
  background: linear-gradient(
    to right,
    rgb(var(--r1), var(--g1), var(--b1)),
    rgb(var(--r2), var(--g2), var(--b2))
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation-delay: calc(0.1s * var(--i));
}

@keyframes animate {
  0% {
    transform: translateY(0px);
  }

  20% {
    transform: translateY(-20px);
  }

  40%,
  100% {
    transform: translateY(0px);
  }
}`;

const tsCode = `type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

type TColorRed = Range<0, 256>;
type TColorGreen = Range<0, 256>;
type TColorBlue = Range<0, 256>;

interface IRGB {
  red: TColorRed;
  green: TColorGreen;
  blue: TColorBlue;
}

const colorCalculator = (
  color1: IRGB,
  color2: IRGB,
  percentage1: number,
  percentage2: number,
): IRGB => {
  return {
    red: Math.round(
      color1.red * percentage1 + color2.red * percentage2,
    ) as TColorRed,
    green: Math.round(
      color1.green * percentage1 + color2.green * percentage2,
    ) as TColorGreen,
    blue: Math.round(
      color1.blue * percentage1 + color2.blue * percentage2,
    ) as TColorBlue,
  };
};

const gradientText = (text: string[], start: IRGB, end: IRGB) => {
  const steps = 1 / text.length;

  return text.map((char, index) => {
    const ratio1 = steps * (text.length - index);
    const ratio2 = steps * (text.length - index - 1);
    const startColor = colorCalculator(start, end, ratio1, 1 - ratio1);
    const endColor = colorCalculator(start, end, ratio2, 1 - ratio2);

    return { startColor, endColor, char };
  });
};

const colorStringToRGB = (color: string): IRGB => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);

  return {
    red: parseInt(result ? result[1] : '0', 16),
    green: parseInt(result ? result[2] : '0', 16),
    blue: parseInt(result ? result[3] : '0', 16),
  } as IRGB;
};`;

const VerticalWavyText = (props: Props) => {
  const [colors, setColors] = useState<{
    startColor: string;
    endColor: string;
  }>({ startColor: '#6a99eb', endColor: '#2fcc63' });
  const router = useRouter();
  const example = (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <label htmlFor="">Start Color:</label>
        <input
          type="color"
          value={colors.startColor}
          className=" appearance-none outline-none border-none"
          onChange={(e) => {
            setColors((prev) => {
              return {
                ...prev,
                startColor: e.target.value,
              };
            });
          }}
        />
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="">End Color:</label>
        <input
          type="color"
          value={colors.endColor}
          className=" appearance-none outline-none border-none"
          onChange={(e) => {
            setColors((prev) => {
              return {
                ...prev,
                endColor: e.target.value,
              };
            });
          }}
        />
      </div>
      <div className="text-4xl py-5 wavy">
        {gradientText(
          Array.from('Wavy Text'),
          colorStringToRGB(colors.startColor),
          colorStringToRGB(colors.endColor),
        ).map((stop, index) => (
          <p
            key={index}
            className="inline-block uppercase tracking-widest"
            style={{
              ['--i' as any]: index + 1,
              ['--r1' as any]: stop.startColor.red,
              ['--g1' as any]: stop.startColor.green,
              ['--b1' as any]: stop.startColor.blue,
              ['--r2' as any]: stop.endColor.red,
              ['--g2' as any]: stop.endColor.green,
              ['--b2' as any]: stop.endColor.blue,
            }}
          >
            {stop.char === ' ' ? <>&nbsp;</> : stop.char}
          </p>
        ))}
      </div>
    </div>
  );

  const description = (
    <div>
      This vertical wavy text is referred to{' '}
      <a
        target="_blank"
        className=" hover:underline text-primary-500 dark:text-primary-400"
        href="https://www.geeksforgeeks.org/how-to-make-a-vertical-wavy-text-line-using-html-and-css/"
      >
        GeeksforGeeks&rsquo;s How to make a vertical wavy text line using HTML
        and CSS ?
      </a>{' '}
      But I add text gradient to it. If you don&rsquo;t need the wavy and only
      need the text gradient, you can simply use{' '}
      <a
        target="_blank"
        href="https://tailwindcss.com/docs/gradient-color-stops"
        className=" hover:underline text-primary-500 dark:text-primary-400"
      >
        TailwindCss&rsquo;s Gradient Color Stops{' '}
      </a>
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
      name="Vertical Wavy Text"
    />
  );
};

export default VerticalWavyText;
