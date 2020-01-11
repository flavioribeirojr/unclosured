function createScrollWatcher() {
  const browserSupportPageOffset = window.pageXOffset !== undefined;
  const isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');

  function getHorizontalOffset() {
    if (browserSupportPageOffset) {
      return window.pageXOffset;
    }

    if (isCSS1Compat) {
      return document.documentElement.scrollLeft;
    }

    return document.body.scrollLeft;
  }

  function getVerticalOffset() {
    if (browserSupportPageOffset) {
      return window.pageYOffset;
    }

    if (isCSS1Compat) {
      return document.documentElement.scrollTop;
    }

    return document.body.scrollTop;
  }

  return {
    getHorizontalOffset,
    getVerticalOffset
  };
}

export {
  createScrollWatcher
}