import React, { useState } from 'react';
import SearchInput from './input';
import SearchResults from './results';
import { InstantSearch } from 'react-instantsearch-dom';
import searchClient from './search-client';
import style from './styles.module.scss';

function Search() {
  const [ isFocused, setFocus ] = useState(false);
  const [ shouldHighlightBox, setHighlight ] = useState(false);

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
    >
      <div className={`${style.searchContainer} ${shouldHighlightBox ? style.highlitedBox : ''}`}>
        <SearchInput setFocus={setFocus} setHighlight={setHighlight} />
        <SearchResults isFocused={isFocused} />
      </div>
    </InstantSearch>
  )
}

export default Search;