import React from 'react';
import style from './post.module.scss';

function Post({ post, content }) {
  const formattedPostDate = (new Date(post.date)).toLocaleDateString();

  return (
    <article className={style.post}>
      <header className={style.postHeader}>
        <figure className={style.postHeaderCover}>
          <img
            src={post.cover}
            alt=""
          />
          {
            post.coverCredit && (
              <figcaption className={style.postHeaderCoverCredit}>
                { post.coverCredit }
              </figcaption>
            )
          }
        </figure>
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
          Data de publicação: <time dateTime={post.date}>{ formattedPostDate }</time>
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