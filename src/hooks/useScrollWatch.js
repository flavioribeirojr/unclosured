import { useState, useEffect } from 'react';
import { createScrollWatcher } from '../utils/scroll';

function useScrollWatch() {
  const ScrollWatcher = createScrollWatcher();
  const [ verticalScroll, setVerticalScroll ] = useState(0);

  function onScroll() {
    setVerticalScroll(ScrollWatcher.getVerticalOffset());
  }

  useEffect(function () {
    document.addEventListener('scroll', onScroll);

    return function () {
      document.removeEventListener('scroll', onScroll);
    }
  });

  return verticalScroll;
}

export default useScrollWatch;