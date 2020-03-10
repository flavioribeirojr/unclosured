import React, { useState, useEffect } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ON_SEARCH_RESULT_SELECTED } from '../../events/search';
import Search from '../search';
import style from './sidebar.module.scss';
import UnClosuredLogo from '../../images/unclosured.png';

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

const navigation = [
  {
    name: 'BLOG',
    url: '/'
  },
  {
    name: 'CONTATO',
    url: '/contact'
  }
];

function Sidebar() {
  const [ showMobileSidebar, setShowMobileSidebar ] = useState(false);

  useEffect(function () {
    document.addEventListener(ON_SEARCH_RESULT_SELECTED, toggleMobileSidebar);

    return function () {
      document.removeEventListener(ON_SEARCH_RESULT_SELECTED, toggleMobileSidebar);
    }
  });

  return (
    <aside className={getSidebarClassName()}>
      <div className={style.logo}>
        <img src={UnClosuredLogo} alt="un closured" />
        <button className={style.sidebarToggle} onClick={toggleMobileSidebar}>
          <FontAwesomeIcon
            className={style.sidebarToggleIcon}
            icon={faBars}
          />
        </button>
      </div>
      <form className={style.sidebarSearch}>
        <div className={style.sidebarSearchWrapper}>
          <Search /> 
        </div>
      </form>
      <nav className={style.sidebarNav}>
        <ul className={style.sidebarNavList}>
          {
            navigation
              .map((navigationItem, index) => (
                <li
                  key={`${navigationItem.url}-${index}`}
                  className={style.sidebarNavListItem}
                >
                  <AniLink
                    to={navigationItem.url}
                    className={style.sidebarNavListItemLink}
                    swipe
                    direction="down"
                    onClick={hideMobileSidebar}
                  >
                    { navigationItem.name }
                  </AniLink>
                </li>
              ))
          }
        </ul>
      </nav>
      <div className={style.sidebarFooter}>
        <address className={style.sidebarFooterContact}>
          <small className={style.sidebarFooterContactNote}>
            Um blog por
          </small>
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
  );

  function getSidebarClassName() {
    return `${style.sidebar} ${ showMobileSidebar ? style.showMobileSidebar : '' }`;
  }

  function toggleMobileSidebar() {
    setShowMobileSidebar(!showMobileSidebar);
  }

  function hideMobileSidebar() {
    setShowMobileSidebar(false);
  }
}

export default Sidebar;