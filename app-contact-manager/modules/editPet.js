export const render = (pet) => {
  const { name, species } = pet;

  const container = document.createElement('form');

  container.classList.add('edit-pet');

  container.innerHTML = `
  <h4> Editing pet ${name} </h4>

  <label class="form-label mt-2"> Name </label>
  <input type="text"
  name="name"
  class="form-control form-control-sm"
  value="${name}"
>

<label class="form-label mt-2"> Species </label>
<input type="text"
name="species"
class="form-control form-control-sm"
value="${species}"
>





  `;

  return container;
};
