// components/todo-create/todo-create.js
import Component from ' = '; // remember to install
import DefineMap from ' = ';
import view from ' = ';
import Todo from ' = ';

var TodoCreateVM = DefineMap.extend({
	todo: {
		Value: Todo
	},
	createTodo: function() {
		this.todo.save().then(function() {
			this.todo = new Todo();
		}.bind(this));
	}
});

export default Component.extend({
	tag: "todo-create",
	view: view,
	ViewModel: TodoCreateVM
});
