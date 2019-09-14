import React from 'react';
import { ImagesService } from './services/car-images-service';
import Search from './search-bar/search-bar';
import CarImagesList from './car-images-list/car-images-list';
import TodoInputBox from './todo-input-box/todo-input-box';
import TodoList from './todo-list/todo-list';
import { TodoItem } from './models/todo-item.model';

class App extends React.Component {
  constructor() {
    super();
    this.state = { images: [], todos: [] };
  }

  onSearchSubmit = term => {
    ImagesService.getImages(term).subscribe(images =>
      this.setState({ images })
    );
  };

  addTodo = todoName => {
    const todo = new TodoItem(new Date().getTime(), todoName, false);
    this.setState({ todos: [...this.state.todos, todo] });
  };

  toDoClicked = todo => {
    todo.done = !todo.done;
    const index = this.state.todos.indexOf(todo);
    const _todos = [...this.state.todos];
    _todos[index].done = todo.done;

    this.setState({ todos: [..._todos] });
  };

  render() {
    return (
      <div>
        <h1>Apps</h1>
        <div className="search-app" style={{ display: 'none' }}>
          <Search onSubmit={this.onSearchSubmit} />
          <CarImagesList carImages={this.state.images} />
        </div>
        <div className="todo-app">
          <TodoInputBox onAddTodo={this.addTodo} />
          <TodoList list={this.state.todos} onTodoClicked={this.toDoClicked} />
        </div>
      </div>
    );
  }
}

export default App;
