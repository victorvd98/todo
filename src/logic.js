import { format, isValid } from "date-fns";

//ES6 class syntax
class List {
    constructor() {
        this.todos = [];
    }
    create(task) {
        const todo = new Task(task);
        this.todos.push(todo);
        console.log(this.todos);
        console.log(todo.dateAdded);
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
    set dueDate(dateInput) {
        if (isValid(dateInput)) {
            let date = format(new Date(dateInput));
            this._dueDate = date;
        } else {
            console.log('Sorry thats invalid');
        }
    }
}

const list = new List();
