import Link from 'next/link';
import { TbBrandGithub, TbBrandTelegram, TbRss } from 'react-icons/tb';

const MainMenuIcons = () => {
  const iconClassName = 'text-gray-200 cursor-pointer';

  return (
    <ul className="flex items-center space-x-6 text-2xl pb-12 sm:pb-0 list-none">
      <li>
        <Link href="https://t.me/+2m-x-jQNU-E0NGMy" passHref>
          <a target="_blank">
            <TbBrandTelegram className={iconClassName}></TbBrandTelegram>
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://github.com/daemonyeen" passHref>
          <a target="_blank">
            <TbBrandGithub className={iconClassName}></TbBrandGithub>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/rss/feed.xml" passHref>
          <a target="_blank">
            <TbRss className={iconClassName}></TbRss>
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default MainMenuIcons;
