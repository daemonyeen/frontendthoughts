import Link from 'next/link';

const MainMenu = () => {
  const links = [
    {
      name: 'Блог',
      link: '/',
    },
    {
      name: 'Сниппеты',
      link: '/snippets',
    },
    {
      name: 'Обо мне',
      link: '/about',
    },
    {
      name: 'Проекты',
      link: '#',
    },
  ];

  return (
    <ul className="flex items-center space-x-6 list-none">
      {links.map((link) => (
        <li key={link.name}>
          <Link href={link.link} passHref>
            <a className="text-gray-200 hover:underline">{link.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
