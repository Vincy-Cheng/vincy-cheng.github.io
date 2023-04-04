import DarkModeSwitch from './DarkModeSwitch';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="w-full flex items-center justify-between flex-row p-2 relative duration-300">
      <div className="text-primary-900 dark:text-primary-100">Header</div>
      <DarkModeSwitch />
    </div>
  );
};

export default Header;
