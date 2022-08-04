import LogoSvg from '../public/topbar/logo.svg';
import MainMenu from './MainMenu';
import Link from 'next/link';
import MainMenuIcons from './MainMenuIcons';

export const TopBar = () => {
  return (
    <div className="pt-20">
      <div className="flex items-center space-x-8">
        <div className="w-20">
          <LogoSvg></LogoSvg>
        </div>

        <div>
          <Link href="/" passHref>
            <a className="font-bold text-3xl uppercase text-amber-500 dark:text-amber-300 leading-10">
              Frontend thoughts
            </a>
          </Link>
          <div className="font-mono text-mono text-sm text-gray-500 dark:text-gray-400">
            About frontend and life in general
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full mt-8">
        <MainMenu></MainMenu>
        <MainMenuIcons></MainMenuIcons>
      </div>
    </div>
  );
};

export default TopBar;
