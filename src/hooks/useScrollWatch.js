import { useState, useEffect } from 'react';
import { createScrollWatcher } from '../utils/scroll';

function useScrollWatch() {
  let ScrollWatcher = null;
  const [ verticalScroll, setVerticalScroll ] = useState(0);

  function onScroll() {
    if (!ScrollWatcher) {
      ScrollWatcher = require('../utils/scroll').createScrollWatcher();
    }

    setVerticalScroll(ScrollWatcher.getVerticalOffset());
  }

  useEffect(function () {
    ScrollWatcher = createScrollWatcher();

    document.addEventListener('scroll', onScroll);

    return function () {
      document.removeEventListener('scroll', onScroll);
    }
  }, []);

  return verticalScroll;
}

export default useScrollWatch;