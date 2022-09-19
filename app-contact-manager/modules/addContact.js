export const render = () => {
  const container = document.createElement('form');

  container.classList.add('add-contact');

  container.innerHTML = `
<h4> Add new contact </h4>
<label class="form-label mt-2"></label>
<input type="text"
name="name"
class="form-control form-control-sm"
>

<label class="form-label mt-2"></label>
<input type="tel"
name="phone"
class="form-control form-control-sm"
>

<label class="form-label mt-2"></label>
<input type="email"
name="email"
class="form-control form-control-sm"
>



`;

  return container;
};
