/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.shouldUpdateScroll = ({prevRouterProps, routerProps}) => {
  const isSwitchingBetweenBlogPages = (
    (prevRouterProps.location.pathname === '/' && routerProps.location.href.includes('blog')) ||
    (prevRouterProps.location.pathname.includes('blog') && routerProps.location.pathname === '/')
  );

  return !isSwitchingBetweenBlogPages;
}; 