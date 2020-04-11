import React, { createRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { connectSearchBox, connectHits } from 'react-instantsearch-dom';
import style from './styles.module.scss';

function SearchInput({ refine, hits, setFocus, setHighlight }) {
  const inputRef = createRef();
  const [ searchValue, setSearchValue ] = useState('');
  const [ isInputFocused, setInputFocus ] = useState(false);
  const shouldHighlightInputOnFocus = hits.length === 0 || searchValue === '';

  useEffect(setHighlightByHitsLength, [hits]);

  return (
    <div className={style.sidebarSearchWrapper}>
      <FontAwesomeIcon
        icon={faSearch}
        className={style.sidebarSearchWrapperIcon}
      />
      <input
        ref={inputRef}
        type="serch"
        placeholder="Buscar post"
        className={`${style.sidebarSearchWrapperInput} ${shouldHighlightInputOnFocus ? '' : style.inputMixedWithContainer}`}
        onChange={updateSearchRequest}
        onFocus={focusSearch}
        onBlur={blurSearch}
        value={searchValue}
      />
    </div>
  );

  function setHighlightByHitsLength() {
    if (hits.length) {
      setHighlight(isInputFocused);
    }
  }

  function focusSearch() {
    setInputFocus(true);
    setHighlight(hits.length > 0);
  }

  function blurSearch() {
    setInputFocus(false);
    setHighlight(false);
  }

  function updateSearchRequest(event) {
    const { value } = event.target;
    
    setSearchValue(value);
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(performSearch(value), 700);
  }

  function performSearch(searchValue) {
    return function () {
      refine(searchValue);
      changeFocus(searchValue);
    }
  }

  function changeFocus(searchValue) {
    setFocus(searchValue !== '');
  }
}

let searchTimeout = null;

export default connectSearchBox(
  connectHits(SearchInput)
);