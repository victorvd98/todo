import { format, isValid } from "date-fns";

//ES6 class syntax
class List {
    constructor() {
        this.todos = [];
    }
    create(task) {
        const todo = new Task(task);
        this.todos.push(todo);
        saveToStorage();
        return null;
    }
}

class Task {
    constructor(title) {
        this.title = title;
        this.done = false;
        this.dateAdded = format(Date.now(), 'yyyy-MM-dd HH:mm'); //JavaScript native Date class, date-fns format method to cleanup
        this._dueDate = null; //we set dueDates later (some tasks may not have due dates)
    }
    //methods
    toggleDone() {
        if (this.done === false) {
            this.done = true;
        } else {
            this.done = false;
        }
    }

    get dueDate() {
        return this._dueDate;
    }

    set dueDate(dateInput) {
        if (isValid(dateInput)) {
            let date = format(new Date(dateInput), 'yyyy-MM-dd'); //no HH:mm on due dates
            this._dueDate = date;
        } else {
            console.log('Sorry thats invalid');
        }
    }
    editTitle(newTitle) {
        this.title = newTitle;
    }
}

//creation of the Task List
export const list = new List();

//localStorage - save
export function saveToStorage() {
  localStorage.setItem("todos", JSON.stringify(list.todos));
}

//localStorage - load
export function loadFromStorage() {
  const stored = JSON.parse(localStorage.getItem("todos"));
  if (!stored) return;

  stored.forEach(obj => {
    const task = new Task(obj.title);
    task.done = obj.done;
    task._dueDate = obj._dueDate;
    task.dateAdded = obj.dateAdded;
    list.todos.push(task);
  });
}

