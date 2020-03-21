const ghpages = require('gh-pages');
const fs = require('fs');

fs.writeFileSync('public/CNAME', 'unclosured.com');

ghpages.publish('public', function (err) {
  if (err) {
    console.error(err);
    return;
  }

  console.log('The public folder has been pushed to gh-pages');
});