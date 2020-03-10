import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { connectHits } from 'react-instantsearch-dom';
import { ON_SEARCH_RESULT_SELECTED } from '../../events/search';
import { fireEvent } from '../../utils/event';
import style from './styles.module.scss';

export default connectHits(function SearchResults({ hits, isFocused, onResultSelected }) {
  if (!isFocused || !hits.length) {
    return null;
  }

  const fireSearchEvent = () => {
    fireEvent(ON_SEARCH_RESULT_SELECTED);

    onResultSelected();
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
              <AniLink
                swipe
                direction="left"
                to={hit.path}
                onClick={fireSearchEvent}
              >
                <header className={style.searchResultsItemTitle}>
                  { hit.title }
                </header>
                <span className={style.searchResultsItemDescription}>
                  { hit.description }
                </span>
              </AniLink>
            </li>
          ))
      }
    </ul>
  );
});