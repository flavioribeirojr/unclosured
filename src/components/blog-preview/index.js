import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faShare, faBookmark } from '@fortawesome/free-solid-svg-icons';
import style from './blog-preview.module.scss';

function BlogPreview({ post }) {
  return (
    <div className={style.blogPreview}>
      <img
        src={post.cover}
        alt={post.alt || 'Capa do post'}
        className={style.blogPreviewCover}
      />
      <div className={style.blogPreviewInfo}>
        <Link to={`/${post.slug}`} className={style.blogPreviewInfoTitle}>
          { post.title }
        </Link>
        <p className={style.blogPreviewInfoDescription}>
          { post.description }
        </p>
        <div className={style.blogPreviewInfoOptions}>
          <button className={style.blogPreviewInfoOptionsItem}>
            <FontAwesomeIcon
              className={style.blogPreviewInfoOptionsItemIcon}
              icon={faClock}
            />
            <span className={style.blogPreviewInfoOptionsItemText}>
              { post.date }
            </span>
          </button>
          <button className={style.blogPreviewInfoOptionsItem}>
            <FontAwesomeIcon
              className={style.blogPreviewInfoOptionsItemIcon}
              icon={faShare}
            />
            <span className={style.blogPreviewInfoOptionsItemText}>
              Compartilhar
            </span>
          </button>
          <button className={style.blogPreviewInfoOptionsItem}>
            <FontAwesomeIcon
              className={style.blogPreviewInfoOptionsItemIcon}
              icon={faBookmark}
            />
            <span className={style.blogPreviewInfoOptionsItemText}>
              Ler Depois
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogPreview;