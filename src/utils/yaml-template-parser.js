const yaml = require('yaml');
const fs = require('fs');
const path = require('path');

function YamlTemplateParser({ templatesPath }) {
  const yamlData = {};

  async function parseYamlTemplatesFromPath() {
    const files = await readTemplatesDir();
    const contents = await Promise.all(files.map(getFileContents));

    contents.forEach(parseContent);
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

  function parseContent(yamlString) {
    const yamlParsed = yaml.parse(yamlString);

    yamlData[yamlParsed.namespace] = yamlParsed;
  }
}