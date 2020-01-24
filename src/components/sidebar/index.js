import React from 'react';
import useScrollWatch from '../../hooks/useScrollWatch';
import style from './sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Search from '../search';
import BDULogo from '../../images/bdu.png';

const socialMedias = [
  {
    href: 'https://twitter.com/flavioribeirojr',
    icon: faTwitter
  },
  {
    href: 'https://www.linkedin.com/in/fl%C3%A1vio-j%C3%BAnior/',
    icon: faLinkedin
  },
  {
    href: 'https://github.com/flavioribeirojr',
    icon: faGithub
  },
  {
    href: 'https://www.instagram.com/flaviorlj/',
    icon: faInstagram
  }
];

const MAX_SCROLL_TO_SHOW_LOGO = 100;

function Sidebar() {
  const verticalScroll = useScrollWatch();
  const isInverse = verticalScroll >= MAX_SCROLL_TO_SHOW_LOGO;

  return (
    <aside className={`${style.sidebar} ${isInverse ? style.inverse : ''}`}>
      <div className={style.logo}>
        <img src={BDULogo} alt="Borda do Universo" />
        <h1 className={style.brand}>
          BORDA DO <br />
          UNIVERSO
        </h1>
      </div>
      <form className={style.sidebarSearch}>
        <div className={style.sidebarSearchWrapper}>
          <Search /> 
        </div>
      </form>
      <div className={style.sidebarFooter}>
        <address className={style.sidebarFooterContact}>
          <p className={style.sidebarFooterContactName}>
            Flávio Ribeiro
          </p>
          <div className={style.sidebarFooterContactMedia}>
            {
              socialMedias
                .map((socialMedia, index) => (
                  <a
                    href={socialMedia.href}
                    rel="noopener noreferrer"
                    target="blank"
                    key={index}
                  >
                    <FontAwesomeIcon className={style.sidebarFooterContactMediaIcon} icon={socialMedia.icon} />
                  </a>
                ))
            }
          </div>
        </address>
        <div className={`${style.sidebarFooterStroke}`}>
          <div className={style.sidebarFooterStrokeBack} />
          <div className={style.sidebarFooterStrokeBar} />
        </div>
        <div className={`${style.sidebarFooterStroke}`}>
          <div className={style.sidebarFooterStrokeBack} />
          <div className={style.sidebarFooterStrokeBar} />
        </div>
      </div>
    </aside>
  )
}

export default Sidebar;