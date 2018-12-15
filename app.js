function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    newToDoText.value = '';

    renderTheUI();
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

    // create a new span
    let span = document.createElement('span');

    // create a new input
    let checkbox = document.createElement('input');

    // create a delete button
    let deleteButton = document.createElement('button');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set type and text for delete buttons
    deleteButton.type = "button";
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('mdl-button');

    // set onclick action for delete button
    deleteButton.onclick = function() {
      toDoList.removeChild(newLi);
    };

    // set the title and css classes
    span.textContent = title;
    newLi.classList.add('mdl-list__item');
    newLi.classList.add('mdl-grid');
    newLi.classList.add('mdl-cell');
    newLi.classList.add('mdl-cell--12-col');
    newLi.classList.add('mdl-cell--12-col-tablet');
    checkbox.classList.add('mdl-cell');
    checkbox.classList.add('mdl-cell--1-col');
    checkbox.classList.add('mdl-cell--1-col-tablet');
    span.classList.add('mdl-cell');
    span.classList.add('mdl-cell--7-col');
    span.classList.add('mdl-cell--7-col-tablet');
    deleteButton.classList.add('mdl-cell');
    deleteButton.classList.add('mdl-cell--2-col');
    deleteButton.classList.add('mdl-cell--2-col-tablet');

      newLi.textContent = toDo.title;

    // attach the span to the li
    newLi.appendChild(span);

    // add delete button to li
    newLi.appendChild(deleteButton);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';

  });
};

window.onload = function() {
  onReady();
};
