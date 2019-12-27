import React from 'react';
import style from './sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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

function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <div className={style.logo}>
        <img src={BDULogo} alt="Borda do Universo" />
        <h1 className={style.brand}>
          BORDA DO <br />
          UNIVERSO
        </h1>
      </div>
      <form className={style.sidebarSearch}>
        <div className={style.sidebarSearchWrapper}>
          <FontAwesomeIcon
            icon={faSearch}
            className={style.sidebarSearchWrapperIcon}
          />
          <input
            type="serch"
            placeholder="Buscar post"
            className={style.sidebarSearchWrapperInput}
          />
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