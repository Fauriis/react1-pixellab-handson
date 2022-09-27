export default (message = '', type = 'primary') => {
  // const messageContainer = document.createElement('div');

  const messageContainer = document.getElementById('message');

  messageContainer.classList.add('alert', `alert-${type}`);

  // FYI exista un textContent
  messageContainer.textContent = message;

  return messageContainer;
};
