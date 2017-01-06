import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h3>Todo:</h3>
        <form>
            <input #todo>
            <button (click)="addTodo(todo.value)">Add Todo</button>
        </form>
        <ul>
            <li *ngFor="let todo of todos">{{todo}}</li>
        </ul>
    `,
})
export class SimpleTodosComponent {
    public todo: String;
    public todos: String[] = [
        'Make a todo app',
        'Go for a run',
        'Grocery shopping'
    ];

    public addTodo(todo) {
        console.log(todo);
        this.todos.push(todo);
    }
}
