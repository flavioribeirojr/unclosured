const fs = require('fs');
const path = require('path');

function YamlTemplateParser({ templatesPath }) {
  async function parseYamlTemplatesFromPath() {
    const files = await readTemplatesDir();
    const contents = await Promise.all(files.map(getFileContents));

    return contents;
  }

  function readTemplatesDir() {
    return new Promise((resolve, reject) => {
      fs.readdir(templatesPath, (err, files) => {
        if (err) {
          return reject(err);
        }

        return resolve(files);
      });
    });
  }

  function getFileContents(fileName) {
    return new Promise((resolve, reject) => {
      fs.readFile(path.join(templatesPath, fileName), (err, contents) => {
        if (err) {
          return reject(err);
        }

        return resolve(contents.toString());
      });
    });
  }

  return {
    parseYamlTemplatesFromPath
  }
}

module.exports = {
  YamlTemplateParser 
}