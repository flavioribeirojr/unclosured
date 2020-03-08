const fireEvent = (eventName, payload = {}) => {
  const event = new CustomEvent(eventName, payload);

  document.dispatchEvent(event);
}

export {
  fireEvent
}