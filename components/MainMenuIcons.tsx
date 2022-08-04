import { FiGithub, FiMoon, FiRss } from 'react-icons/fi';
import { toggleDarkMode } from '../lib/dark-mode';
import Link from 'next/link';

const MainMenuIcons = () => {
  const iconClassName = 'text-gray-400 hover:text-rose-500 cursor-pointer';

  return (
    <ul className="flex items-center space-x-4 text-xl list-none">
      <li>
        <FiMoon className={`${iconClassName} cursor-pointer`} onClick={toggleDarkMode}></FiMoon>
      </li>
      <li>
        <Link href="https://github.com/daemonyeen" passHref>
          <a target="_blank">
            <FiGithub className={iconClassName}></FiGithub>
          </a>
        </Link>
      </li>
      <li>
        <Link href="#" passHref>
          <a target="_blank">
            <FiRss className={iconClassName}></FiRss>
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default MainMenuIcons;
