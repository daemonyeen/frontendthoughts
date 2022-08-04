import Link from 'next/link';

const MainMenu = () => {
  const links = [
    {
      name: 'Блог',
      link: '/',
    },
    {
      name: 'Сниппеты',
      link: '#',
    },
    {
      name: 'Обо мне',
      link: '#',
    },
    {
      name: 'Проекты',
      link: '#',
    },
  ];

  return (
    <ul className="flex items-center space-x-6 list-none">
      {links.map((link) => (
        <li className="font-mono text-gray-700 dark:text-gray-300" key={link.name}>
          <Link href={link.link} passHref>
            <a className="font-medium hover:underline">{link.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
