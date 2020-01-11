import React from 'react';
import useScrollWatch from '../../hooks/useScrollWatch';
import { Link } from 'gatsby';
import style from './header.module.scss';
import BDULogo from '../../images/bdu.png';

const navigation = [
  {
    name: 'BLOG',
    url: '/',
    colorClassname: 'purple'
  },
  {
    name: 'FAVORITOS',
    url: '/bookmarks',
    colorClassname: 'green'
  },
  {
    name: 'CONTATO',
    url: '/contato',
    colorClassname: 'yellow'
  },
  {
    name: 'SOBRE O AUTOR',
    url: '/sobre',
    colorClassname: 'red'
  }
];

const SCROLL_SIZE_FOR_INVERSE_HEADER = 100;

function Header() {
  const verticalScroll = useScrollWatch();
  const isInverse = verticalScroll >= SCROLL_SIZE_FOR_INVERSE_HEADER;

  return (
    <header
      className={`${style.header} ${isInverse ? style.inverse : ''}`}
    >
      <div className={style.brand}>
        <img className={style.logo} src={BDULogo} alt="Borda do Universo" />
        <h2 className={style.brandTitle}>
          BORDA DO <br />
          UNIVERSO
        </h2>
      </div>
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