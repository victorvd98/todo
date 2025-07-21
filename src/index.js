import "./styles.css";

//this is the index file that imports both the logic and DOM manipulation files
//logic = handling tasks
//DOM manipulation = updating the UI to reflect the logic

import { list } from './logic.js';
import { renderTask } from './dom.js';

const form = document.getElementById('task-form');
const titleInput = document.getElementById('task-form-title');
const dueInput = document.getElementById('task-form-due');

form.addEventListener('submit', (e) => { //arrow function 'e' for event
    e.preventDefault(); //prevents page reload? -- someone explain this to me

    const title = titleInput.value.trim(); //trim gets rid of extra spaces
    const dueDate = dueInput.value;

    //create new task
    list.create(title);
    const newTask = list.todos[list.todos.length-1];

    //set due date if given
    if (dueDate) { //empty string is treated as a false value
        newTask.dueDate = dueDate;
    }

    //render the task
    renderTask(newTask);

    //clear the form
    form.reset();

}); 

