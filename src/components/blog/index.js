import React from 'react';
import { navigate } from 'gatsby';
import BlogPreview from '../blog-preview';
import ReactPaginate from 'react-paginate';
import style from './blog.module.scss';

function Blog({
  posts,
  highlitedPosts,
  numberOfPages,
  currentPage
}) {
  return (
    <div className={style.blog}>
      <h2 className={style.blogTitle}>
        Blog Borda do Universo
      </h2>
      <p className={style.blogListSeparator}>
        Destaques
      </p>
      <div className={style.blogList}>
        {
          highlitedPosts
            .map(post => (
              <BlogPreview
                key={post.slug}
                post={post}
              />
            ))
        }
      </div>
      <p className={style.blogListSeparator}>
        Postagens
      </p>
      <div className={style.blogDefaultPostsList}>
        {
          posts
            .map(post => (
              <BlogPreview
                key={post.slug}
                post={post}
                postTitleClassName={style.blogDefaultPostsListItemTitle}
                postDescriptionClassName={style.blogDefaultPostsListItemDescription}
                postOptionsWrapperClassName={style.blogDefaultPostsListItemOptions}
                postOptionsItemClassName={style.blogDefaultPostsListItemOptionsItem}
              />
            ))
        }
      </div>
      {
        numberOfPages > 1 && (
          <ReactPaginate
            initialPage={currentPage - 1}
            pageCount={numberOfPages}
            pageRangeDisplayed={5}
            marginPagesDisplayed={5}
            onPageChange={goToPage}
            containerClassName={style.blogPagination}
            pageClassName={style.blogPaginationItem}
            activeClassName={style.active}
            previousLabel=""
            nextLabel=""
          />
        )
      }
    </div>
  );

  function goToPage(page) {
    const nextPage = page.selected + 1;
    if (nextPage === currentPage) return;

    if (nextPage === 1) {
      navigate('/');
      return;
    }

    navigate(`/blog/${nextPage}`);
  }
}

export default Blog;