import React from 'react';
import { Link } from 'gatsby';
import style from './header.module.scss';

const navigation = [
  {
    name: 'TECNOLOGIA',
    url: '/tech',
    colorClassname: 'purple'
  },
  {
    name: 'ENTRETENIMENTO',
    url: '/entretenimento',
    colorClassname: 'yellow'
  },
  {
    name: 'RECOMENDAÇÕES',
    url: '/recomendado',
    colorClassname: 'red'
  },
  {
    name: 'CONTATO',
    url: '/contato',
    colorClassname: 'green'
  }
];

function Header() {
  return (
    <header className={style.header}>
      <nav className={style.headerNav}>
        {
          navigation
            .map((navigationItem, index) => (
              <Link
                to={navigationItem.url}
                className={`${style.headerNavItem} ${style[navigationItem.colorClassname]}`}
                key={index}
              >
                { navigationItem.name }
              </Link>
            ))
        }
      </nav>
    </header>
  )
}

export default Header;