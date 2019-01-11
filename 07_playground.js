var todos = ['item 1', 'item 2', 'item 3'];

//It should have a function to display todos
function displayTodos() {
    console.log('My todos:', todos);
}
// It should have a function to add todos
function addTodos(todo) { //addTodos('newTodo')
    todos.push(todo);
    displayTodos();
}
// It should have a function to change todos
function changeTodos(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}
// It should have a function to delete todos
function deleteTodos(position) {
    todos.splice(position, 1);
    displayTodos();
}

var myName = 'Solomon';

function sayName() {
    var secret = 'learnwebdevelopment';
    console.log(myName);
}

sayName() // 'Solomon'
console.log(secret)
// if you are inside of a function, you can look out and see data
// but the opposite is not true. If you're outside, you can't look in.

// Objects

var myComputer = {
    operatingSystem: 'Window',
    screenSize: '15 inches',
    purchasedYear: '2016',
    memorySize: '8Gb',
    hardDriveSize: '512Gb',
    processsorType: 'Intel i7'
}
//Relationships between functions and objects
var solomon = {
    name:    'Solomon',
    sayName: function() {
        console.log(this.name) 
    }
}
// working with list, objects and functions

var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function() {
        console.log('My todo: ', this.todos)
    },
    addTodos: function(todo) {
        this.todos.push(todo)
        this.displayTodos()
    },
    changeTodos: function(position, newValue) {
        this.todos[position] = newValue
        this.displayTodos()
    },
    deleteTodos: function(position) {
        this.todos.splice(position, 1)
        this.displayTodos()
    }
}