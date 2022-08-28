import LogoSvg from '../public/topbar/logo.svg';
import MainMenu from './MainMenu';
import Link from 'next/link';
import MainMenuIcons from './MainMenuIcons';
import MainWrapper from './MainWrapper';

export const TopBar = () => {
  return (
    <div className={`pt-12 pb-6 border-b border-amber-100 bg-primary`}>
      <MainWrapper>
        <div className="flex flex-col sm:flex-row items-center space-y-5 sm:space-y-0 sm:space-x-8">
          <div className="w-28 sm:w-24">
            <LogoSvg></LogoSvg>
          </div>

          <div className="text-center sm:text-left">
            <Link href="/" passHref>
              <a className="font-bold text-3xl uppercase text-gray-200">Хаскикодинг</a>
            </Link>
            <div className="text-sm text-gray-200">Блог F5 примата о жизни и разработке</div>
          </div>
        </div>
        <div className="flex flex-col flex-col-reverse sm:flex-row items-center justify-between w-full mt-5 sm:mt-10">
          <MainMenu></MainMenu>
          <MainMenuIcons></MainMenuIcons>
        </div>
      </MainWrapper>
    </div>
  );
};

export default TopBar;
