import { gradientText } from '../common';
import { IRGB, TColorRed, TColorGreen, TColorBlue } from '../types';

export default function Home() {
  const arr = Array.from('Personal page');

  return (
    <div>
      <div className="text-4xl py-5 wavy">
        {/* <p className='tracking-wide uppercase font-extrabold bg-gradient-to-r from-blue-400  to-primary-400 inline-block text-transparent bg-clip-text'>{title}</p> */}
        {gradientText(arr).map((stop, index) => (
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
