import React from 'react';
import { navigate } from 'gatsby';
import BlogPreview from '../blog-preview';
import ReactPaginate from 'react-paginate';
import style from './blog.module.scss';

function Blog({
  posts,
  numberOfPages,
  currentPage
}) {
  const goToPage = page => {
    const nextPage = page.selected + 1;
    if (nextPage === currentPage) return;

    if (nextPage === 1) {
      navigate('/');
      return;
    }

    navigate(`/blog/${nextPage}`);
  }

  return (
    <div className={style.blog}>
      <div className={style.blogList}>
        {
          posts
            .map(post => (
              <BlogPreview
                key={post.slug}
                post={post}
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
}

export default Blog;