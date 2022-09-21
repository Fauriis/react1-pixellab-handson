import { render } from './addContact.js';
import { clearMessages } from './notificationBar.js';

import tazz from './stage.js';

const addContactButton = document.querySelector('.add-contact-button');

addContactButton.addEventListener('click', (event) => {
  clearMessages();
  tazz.innerHTML = '';

  alert('add contact');

  tazz.append(render());
});

export default addContactButton;
