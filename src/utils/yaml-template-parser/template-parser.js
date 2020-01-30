const yaml = require('yaml');

function TemplateParser({ templateContents }) {
  const templatesData = {};

  function parse() {
    templateContents.forEach(transformContentToData);
  }

  function transformContentToData(content) {
    const contentParsed = yaml.parse(content);

    templatesData[contentParsed.namespace] = contentParsed;
  }

  return {
    templatesData,
    parse
  };
}

module.exports = {
  TemplateParser
}