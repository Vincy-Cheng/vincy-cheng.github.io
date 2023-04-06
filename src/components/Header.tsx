import DarkModeSwitch from './DarkModeSwitch';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex flex-1 items-center justify-between flex-row p-2 relative duration-300">
      <div className="text-secondary-900 dark:text-secondary-100">Header</div>
      <DarkModeSwitch />
    </div>
  );
};

export default Header;
