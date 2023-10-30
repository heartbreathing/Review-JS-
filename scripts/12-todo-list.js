const todos = [{
  name: 'make dinner',
  dueDate: '2023-10-16',
}, {
  name: 'wash dishes',
  dueDate: '2023-10-16',
}];

renderTodoList();

function renderTodoList () {
  let todoListHtml = '';

  todos.forEach((todoItem) => {
    const { name, dueDate } = todoItem;

    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todoListHtml += html;
  });

  document.querySelector('.js-todos').innerHTML = todoListHtml;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todos.splice(index , 1);
      renderTodoList(); 
    })
  })          
  
}

  

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
})

function addTodo () {
  const name = document.querySelector('.js-inputTodo').value;

  const dueDate = document.querySelector('.js-due-date-input').value;
  // localStorage.setItem('todos', Number(todo));
  todos.push({
    name,
    dueDate,
  });
  console.log(todos);
  document.querySelector('.js-inputTodo').value = '';
  document.querySelector('.js-due-date-input').value = '';
  renderTodoList();
}




// let randomNumber = 0;
// while (randomNumber < 0.5) {
//   randomNumber = Math.random();
// }
// console.log(randomNumber)
