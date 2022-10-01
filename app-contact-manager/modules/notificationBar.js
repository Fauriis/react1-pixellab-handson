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

// export const hideNotification = () => {
//   state = {
//     visible: true,
//   };

//   onClick = () => {
//     this.setState({
//       visible: !this.state.visible,
//     });
//   };

//   return (
//     <>
//       <button
//         type="button"
//         title="Delete"
//         onClick={this.onClick}
//         class="btn btn-secondary cancel-button bg-danger"
//       >
//         {' '}
//         X{' '}
//       </button>
//       {this.state.visible ? notificationBar : ''}
//     </>
//   );
// };
