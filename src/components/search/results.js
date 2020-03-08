import React from 'react';
import { Link } from 'gatsby';
import { connectHits } from 'react-instantsearch-dom';
import { ON_SEARCH_RESULT_SELECTED } from '../../events/search';
import { fireEvent } from '../../utils/event';
import style from './styles.module.scss';

export default connectHits(function SearchResults({ hits, isFocused }) {
  if (!isFocused || !hits.length) {
    return null;
  }

  const fireSearchEvent = () => {
    fireEvent(ON_SEARCH_RESULT_SELECTED);
  }

  return (
    <ul className={style.searchResults}>
      {
        hits
          .map(hit => (
            <li
              key={hit.objectID}
              className={style.searchResultsItem}
            >
              <Link to={hit.slug} onClick={fireSearchEvent}>
                <header className={style.searchResultsItemTitle}>
                  { hit.title }
                </header>
                <span className={style.searchResultsItemDescription}>
                  { hit.description }
                </span>
              </Link>
            </li>
          ))
      }
    </ul>
  );
});