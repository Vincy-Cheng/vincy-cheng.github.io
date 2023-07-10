import { useRouter } from 'next/router';
import React from 'react';
import { gradientText } from '../../common';
import HTMLAndCSSSourceCode from '../../components/HTMLAndCSSSourceCode';

type Props = {};

const htmlTag = `<div className="text-4xl py-5 wavy">
{gradientText(Array.from('Wavy Text')).map((stop, index) => (
	<p
		key={index}
		className="inline-block uppercase tracking-widest"
		style={{
			['--i' as any]: index + 1,
			['--r1' as any]: stop.startColor.red,
			['--g1' as any]: stop.startColor.blue,
			['--b1' as any]: stop.startColor.green,
			['--r2' as any]: stop.endColor.red,
			['--g2' as any]: stop.endColor.blue,
			['--b2' as any]: stop.endColor.green,
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

const tsCode = `const colorCalculator = (
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

const gradientText = (text: string[]) => {
  const steps = 1 / text.length;
  return text.map((char, index) => {
    const ratio1 = steps * (text.length - index);
    const ratio2 = steps * (text.length - index - 1);
    const startColor = colorCalculator(
      { red: 96, blue: 165, green: 250 },
      { red: 101, blue: 159, green: 140 },
      ratio1,
      1 - ratio1,
    );
    const endColor = colorCalculator(
      { red: 96, blue: 165, green: 250 },
      { red: 101, blue: 159, green: 140 },
      ratio2,
      1 - ratio2,
    );
    return { startColor, endColor, char };
  });
};`;

const VerticalWavyText = (props: Props) => {
  const router = useRouter();
  const example = (
    <div className="text-4xl py-5 wavy">
      {gradientText(Array.from('Wavy Text')).map((stop, index) => (
        <p
          key={index}
          className="inline-block uppercase tracking-widest"
          style={{
            ['--i' as any]: index + 1,
            ['--r1' as any]: stop.startColor.red,
            ['--g1' as any]: stop.startColor.blue,
            ['--b1' as any]: stop.startColor.green,
            ['--r2' as any]: stop.endColor.red,
            ['--g2' as any]: stop.endColor.blue,
            ['--b2' as any]: stop.endColor.green,
          }}
        >
          {stop.char === ' ' ? <>&nbsp;</> : stop.char}
        </p>
      ))}
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
