function createScrollWatcher() {
  function getHorizontalOffset() {
    if (browserSupportPageOffset()) {
      return window.pageXOffset;
    }

    if (isCSS1Compat()) {
      return document.documentElement.scrollLeft;
    }

    return document.body.scrollLeft;
  }

  function getVerticalOffset() {
    if (browserSupportPageOffset()) {
      return window.pageYOffset;
    }

    if (isCSS1Compat()) {
      return document.documentElement.scrollTop;
    }

    return document.body.scrollTop;
  }

  return {
    getHorizontalOffset,
    getVerticalOffset
  };

  function browserSupportPageOffset() {
    return window.pageXOffset !== undefined;
  }

  function isCSS1Compat() {
    return ((document.compatMode || '') === 'CSS1Compat');
  }
}

export {
  createScrollWatcher
}