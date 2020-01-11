import { useState, useEffect } from 'react';
import { createScrollWatcher } from '../utils/scroll';

const ScrollWatcher = createScrollWatcher();

function useScrollWatch() {
  const [ verticalScroll, setVerticalScroll ] = useState(ScrollWatcher.getVerticalOffset());

  function onScroll() {
    setVerticalScroll(ScrollWatcher.getVerticalOffset());
  }

  useEffect(function () {
    document.addEventListener('scroll', onScroll);

    return function () {
      document.removeEventListener('scroll', onScroll);
    }
  }, []);

  return verticalScroll;
}

export default useScrollWatch;