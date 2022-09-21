import { render as renderPet } from './pet.js';

export const render = (contact) => {
  const { id, name, surname, phone, email, pets = [] } = contact;
  const container = document.createElement('article');
  container.classList.add('contact', 'border', 'p-3', 'mb-4');
  container.dataset.contactId = id;

  container.innerHTML = `<h1>${name + ' ' + surname}</h1>
  <ul>
<li> ${phone}  </li>
<li> ${email}  </li>
  </ul>

  <button title="delete" type="button" class="btn btn-secondary delete-friend"> delete</button>
  <button title="edit" type="button" class="btn btn-secondary mx-2 edit-contact-button">edit</button>
  <button title="add pet" type="button" class="btn btn-secondary add-pet-button">add pet</button>
  `;

  const petUl = document.createElement('ul');

  pets.forEach((pet) => {
    const renderedPet = renderPet(pet);
    const petLi = document.createElement('li');
    petLi.append(renderedPet);
    petUl.append(petLi);
  });

  container.append(petUl);

  return container;
};
