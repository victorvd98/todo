import "./styles.css";

//this is the index file that imports both the logic and DOM manipulation files
//logic = handling tasks
//DOM manipulation = updating the UI to reflect the logic

import { list } from './logic.js';
import { renderTask } from './dom.js';

const newTask = list.create('Feed dog');
renderTask(list.todos[list.todos.length - 1]); //render the most recent task

