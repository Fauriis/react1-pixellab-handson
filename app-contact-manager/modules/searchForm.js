import { addMessage, clearMessages } from './notificationBar.js';
import { findContact } from './query.js';
import render from './message.js';
import { pluralize } from './utils.js';

const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const form = event.currentTarget;

  const queryInput = form.q;

  const contacts = findContact(queryInput.value.toLowerCase());
  const contactsCount = contacts.length;

  clearMessages();

  if (contacts.length <= 0) {
    addMessage(render('No contacts found.', 'warning'));
  } else {
    addMessage(
      render(
        `Found ${pluralize(contactsCount, {
          one: 'contact',
          many: 'contacts',
        })}`,
        'success',
      ),
    );
  }

  queryInput.value = '';
});

export default searchForm;
