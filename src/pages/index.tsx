import { IRGB, TColorRed, TColorGreen, TColorBlue } from '../types';

export default function Home() {
  const arr = Array.from('Personal page');
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

  const gradientText = () => {
    const steps = 1 / arr.length;
    return arr.map((char, index) => {
      const ratio1 = steps * (arr.length - index);
      const ratio2 = steps * (arr.length - index - 1);
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

  return (
    <div>
      <div className="text-4xl py-5 wavy">
        {/* <p className='tracking-wide uppercase font-extrabold bg-gradient-to-r from-blue-400  to-primary-400 inline-block text-transparent bg-clip-text'>{title}</p> */}
        {gradientText().map((stop, index) => (
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
      <div>Hi! I{"'"}m Vincy. This is my personal page :)</div>
      <div>
        <br></br>This is used to display my project and work experience. (May
        have some small tools here too) Feel free to visit my GitHub and
        LinkedIn.
      </div>
    </div>
  );
}
