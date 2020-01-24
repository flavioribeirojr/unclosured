import algoliasearch from 'algoliasearch/lite';

const algoliaClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
);

let hasRunFirstTime = false;

const searchClient = {
  search(requests) {
    if (!hasRunFirstTime) {
      hasRunFirstTime = true;
      return;
    }

    return algoliaClient.search(requests);
  }
};

export default searchClient;