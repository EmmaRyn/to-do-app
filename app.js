function onReady() {
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  const storedToDos = localStorage.getItem("toDos");
  if (storedToDos != '[]') {
    toDos = JSON.parse(storedToDos);
    id = toDos[toDos.length-1].id + 1;
    renderTheUI();
  }

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    id = id + 1;

    newToDoText.value = '';

    renderTheUI();
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deleteButton = document.createElement('button');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;
      deleteButton.textContent = 'Delete';

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

      checkbox.addEventListener('click', event => {
        toDo.complete = checkbox.checked;
      });

      deleteButton.addEventListener('click', event => {
        event.preventDefault();
        toDos = toDos.filter(function(listItem) {
          return toDo.id != listItem.id;
        });

        renderTheUI();
      });
    });

    localStorage.setItem("toDos", JSON.stringify(toDos));
  };
}

window.onload = function() {
  onReady();
};
