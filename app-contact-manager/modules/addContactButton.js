import { render } from './addContact.js';
import { clearMessages } from './notificationBar.js';
// default exports can be renamed as we please
import contact from './stage.js';

const addContactButton = document.querySelector('.add-contact-button');

addContactButton.addEventListener('click', (event) => {
  clearMessages();
  contact.innerHTML = '';

  contact.append(render());
});

export default addContactButton;
