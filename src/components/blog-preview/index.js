import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faShare } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { css } from 'glamor';
import { copyTextToClipboard } from '../../services/clipboard';
import style from './blog-preview.module.scss';

function BlogPreview({
  post,
  postTitleClassName = '',
  postDescriptionClassName = '',
  postOptionsWrapperClassName = '',
  postOptionsItemClassName = ''
}) {
  return (
    <AniLink
      to={`/${post.slug}`}
      className={style.blogPreview}
      swipe
      direction="left"
    >
      <img
        src={post.cover}
        alt={post.alt || 'Capa do post'}
        className={style.blogPreviewCover}
      />
      <div className={style.blogPreviewInfo}>
        <h2 className={`${style.blogPreviewInfoTitle} ${postTitleClassName}`}>
          { post.title }
        </h2>
        <p className={`${style.blogPreviewInfoDescription} ${postDescriptionClassName}`}>
          { post.description }
        </p>
        <div className={`${style.blogPreviewInfoOptions} ${postOptionsWrapperClassName}`}>
          <button className={`${style.blogPreviewInfoOptionsItem} ${postOptionsItemClassName}`}>
            <FontAwesomeIcon
              className={style.blogPreviewInfoOptionsItemIcon}
              icon={faClock}
            />
            <span className={style.blogPreviewInfoOptionsItemText}>
              { post.date }
            </span>
          </button>
          <button
            onClick={copyPostLinkToClipboard}
            className={`${style.blogPreviewInfoOptionsItem} ${postOptionsItemClassName}`}
          >
            <FontAwesomeIcon
              className={style.blogPreviewInfoOptionsItemIcon}
              icon={faShare}
            />
            <span className={style.blogPreviewInfoOptionsItemText}>
              Compartilhar
            </span>
          </button>
        </div>
      </div>
    </AniLink>
  );

  function copyPostLinkToClipboard(event) {
    event.preventDefault();
    copyTextToClipboard(`${window.location.origin}/${post.slug}`);

    toast('Link copiado :)', {
      className: css({
        background: 'black'
      }),
      bodyClassName: css({
        fontSize: '18px',
        color: 'white'
      }),
      progressClassName: css({
        background: "radial-gradient(#a55eea 25%, #fed330 25%, #fc5c65 25%, #2bcbba 25%)",
        fontFamily: 'Lato'
      })
    });
  }
}

export default BlogPreview;