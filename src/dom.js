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
    });
    
    //Assembly of task card
    taskDiv.appendChild(title);
    taskDiv.appendChild(due);
    taskDiv.appendChild(checkbox);
    //Add task card to task list
    taskList.appendChild(taskDiv);
}

