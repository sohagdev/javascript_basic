const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const searchInput = document.querySelector('.search input');

const generateTemplate = (todo) => {
  const hmtl = `<li
    class="list-group-item d-flex justify-content-between aligh-items-center"
  >
    <span>${todo}</span>
    <i class="fas fa-trash-alt delete"></i>
  </li>`;
  list.innerHTML += hmtl;
};

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});
// delete list items
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

const filterTodo = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
};

// keyup event
searchInput.addEventListener('keyup', () => {
  const term = searchInput.value.trim().toLowerCase();
  filterTodo(term);
});
