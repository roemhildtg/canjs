// components/todo-list/todo-list.js
import Component from ' = ';
import DefineMap from ' = ';
import view from ' = ';
import Todo from ' = ';

var TodoListVM = DefineMap.extend({
	todos: Todo.List,
	editing: Todo,
	backupName: "string",
	isEditing: function(todo) {
		return todo === this.editing;
	},
	edit: function(todo) {
		this.backupName = todo.name;
		this.editing = todo;
	},
	cancelEdit: function() {
		if (this.editing) {
			this.editing.name = this.backupName;
		}
		this.editing = null;
	},
	updateName: function() {
		this.editing.save();
		this.editing = null;
	}
});

export default Component.extend({
	tag: "todo-list",
	view: view,
	ViewModel: TodoListVM
});
