/**
 * @param {String} text
 */
const copyTextToClipboard = text => {
  const textareaElement = document.createElement('textarea');
  textareaElement.value = text;

  document.body.appendChild(textareaElement);

  textareaElement.select();
  document.execCommand('copy');

  document.body.removeChild(textareaElement);
}

export {
  copyTextToClipboard
}