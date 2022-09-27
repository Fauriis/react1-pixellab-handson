const notificationBar = document.querySelector('.notification-bar');

// event delegation pe notificationBar

export const addMessage = (messageElement) => {
  clearMessages();

  notificationBar.append(messageElement);
};

const deleteButton = document.querySelector('.cancel-button');

deleteButton.addEventListener('click', () => {
  notificationBar.innerHTML = '';
});

export const clearMessages = () => {
  notificationBar.innerHTML = '';
};

export default notificationBar;
