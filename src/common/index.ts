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
};

export { gradientText };
