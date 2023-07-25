import { IRGB, TColorRed, TColorGreen, TColorBlue } from '../types';

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
};

export { gradientText, colorStringToRGB };
