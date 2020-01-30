import React from 'react';
import style from './post.module.scss';

function Post({ post, content }) {
  return (
    <article className={style.post}>
      <header className={style.postHeader}>
        <img
          className={style.postHeaderCover}
          src={post.cover}
          alt=""
        />
        <h2
          className={style.postHeaderTitle}
        >
          { post.title }
        </h2>
      </header>
      <section className={style.postBody}>
        <article
          className={style.postBodyContent}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </section>
      <footer className={style.postFooter}>
        <address className={style.postFooterContact}>
          <span className={style.postFooterContactTitle}>
            Autor
          </span>
          <p className={style.postFooterContactName}>
            { post.author.name }
          </p>
          <blockquote className={style.postFooterContactPhrase}>
            { post.author.phrase }
          </blockquote>
        </address>
        <p className={style.postFooterTime}>
          Posted at <time dateTime={post.date}>{ post.date }</time>
        </p>
        <img
          src={post.author.photo}
          className={style.postFooterPhoto}
          alt="Foto do autor do post"
        />
      </footer>
    </article>
  )
}

export default Post;