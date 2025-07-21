import { list, saveToStorage, loadFromStorage } from './logic.js';


export function renderTask(task) { //you can do stuff simultaneously apparently
    const taskList = document.getElementById("task-list");

    const taskDiv = document.createElement('div');
    taskDiv.id = `${task.title}`;
    taskDiv.classList.add('task');


    //Title
    const title = document.createElement('span');
    title.textContent = task.title;
    title.classList.add("task-title");

    //Due Date (if exists)
    const due = document.createElement('span');
    due.classList.add("task-due");
    due.textContent = task.dueDate ? `Due: ${task.dueDate}` : ""

    // Done checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener('change', () => {
        task.toggleDone();
        taskDiv.classList.toggle('done', task.done); //boolean adds or removes the class based on value
        saveToStorage();
    });

    //Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = '🗑️';
    deleteBtn.classList.add('delete-button');

    deleteBtn.addEventListener('click', () => {
        list.todos = list.todos.filter(t => t !== task);
        taskDiv.remove(); // removes the task from the DOM
        saveToStorage();
    });

    //Assembly of task card
    taskDiv.appendChild(title);
    taskDiv.appendChild(due);
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(deleteBtn);
    //Add task card to task list
    taskList.appendChild(taskDiv);
}

