import Link from 'next/link';
import { TbBrandGithub, TbBrandVk, TbRss } from 'react-icons/tb';

const MainMenuIcons = () => {
  const iconClassName = 'text-gray-200 cursor-pointer';

  return (
    <ul className="flex items-center space-x-6 text-2xl pb-12 sm:pb-0 list-none">
      <li>
        <Link href="https://vk.com/huskycoding" passHref>
          <a title="Группа VK" target="_blank">
            <TbBrandVk className={iconClassName}></TbBrandVk>
          </a>
        </Link>
      </li>
      <li>
        <Link title="Github" href="https://github.com/daemonyeen" passHref>
          <a target="_blank">
            <TbBrandGithub className={iconClassName}></TbBrandGithub>
          </a>
        </Link>
      </li>
      <li>
        <Link title="RSS лента" href="/rss/feed.xml" passHref>
          <a target="_blank">
            <TbRss className={iconClassName}></TbRss>
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default MainMenuIcons;
