import useDarkMode from '../hooks/useDarkMode.hook';
import { MoonStars, Sun } from 'tabler-icons-react';

type Props = {};

const DarkModeSwitch = (props: Props) => {
  const { toggle, isDarkMode } = useDarkMode();
  return (
    <label className="hidden xs:flex relative cursor-pointer rounded-full shadow-md dark:shadow-neutral-800 dark:shadow-md">
      <input
        type="checkbox"
        className="sr-only peer hidden"
        checked={isDarkMode}
        onChange={toggle}
      />
      <div className="block bg-yellow-100 w-14 h-8 rounded-full peer-checked:bg-gray-600"></div>
      <Sun className="w-6 bg-yellow-400 absolute left-1 top-1 text-white rounded-full transition peer-checked:translate-x-full peer-checked:invisible peer-hover:shadow-[0px_0px_4px_4px_rgba(235,177,61,0.32)] "></Sun>
      <MoonStars className="w-6 absolute left-1 top-1 invisible bg-blue-200 rounded-full transition peer-checked:translate-x-full peer-checked:stroke-0 peer-checked:fill-white peer-checked:visible peer-hover:shadow-[0px_0px_4px_4px_rgba(36,96,166,0.32)]"></MoonStars>
    </label>
  );
};

export default DarkModeSwitch;
