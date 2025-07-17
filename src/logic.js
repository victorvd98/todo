//ES6 class syntax
class List {
    constructor() {
        this.todos = [];
    }
    create(task) {
        const todo = new Task(task);
        this.todos.append(todo);
        console.log(this.todos);
    }
}

class Task {
    constructor(title) {
        this.title = title;
        this.done = false;
        this.dateAdded = 0; //wanna use date-fns for this
        this.dueDate = 0; //for now...
    }
}

const list = new List();