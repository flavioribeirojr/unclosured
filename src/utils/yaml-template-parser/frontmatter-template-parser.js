const TEMPLATE_REGEX = /^{{.+}}$/;

function FrontMatterTemplateParser({ TemplateParser, frontMatter }) {
  function transformFrontMatterTemplateValues() {
    frontMatter.map(transformObjectValues);
  }

  function transformObjectValues(frontMatterItem) {
    return Object
      .keys(frontMatterItem)
      .reduce((frontMatterItemTransformed, frontMatterItemProp) => {
        if (!TEMPLATE_REGEX.test(frontMatterItem[frontMatterItemProp])) {
          return frontMatterItemTransformed;
        }

        frontMatterItemTransformed[frontMatterItemProp] = renderTemplate(
          frontMatterItemTransformed[frontMatterItemProp]
        );

        return frontMatterItemTransformed;
      }, frontMatterItem);
  }

  function renderTemplate(template) {
    const acessor = template.replace(/[{}\s]*/g, '');

    return translateObjectAcessor(acessor);
  }

  function translateObjectAcessor(acessor) {
    const acessorList = acessor.split('.');
    let templateValues = TemplateParser.data;

    while (acessorList.length) {
      templateValues = templateValues[acessorList.shift()];
    }

    return templateValues;
  }
}