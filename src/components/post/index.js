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
    </article>
  )
}

export default Post;