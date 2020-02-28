import React from 'react';
import { navigate } from 'gatsby';
import BlogPreview from '../blog-preview';
import ReactPaginate from 'react-paginate';
import style from './bookmark-list.module.scss';

function BookmarkList({
  posts,
  numberOfPages,
  currentPage
}) {
  return (
    <div className={style.bookmarks}>
      <h2 className={style.bookmarksTitle}>
        Minha Lista de Leitura
      </h2>
      <div className={style.bookmarkList}>
        {
          posts
            .map(post => (
              <BlogPreview
                key={post.slug}
                post={post}
                postTitleClassName={style.bookmarkListItemTitle}
                postDescriptionClassName={style.bookmarkListItemDescription}
                postOptionsWrapperClassName={style.bookmarkListItemOptions}
                postOptionsItemClassName={style.bookmarkListItemOptionsItem}
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

export default BookmarkList;