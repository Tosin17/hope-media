import React from 'react';
import { ImagesService } from './services/car-images-service';
import Search from './search-bar/search-bar';
import CarImagesList from './car-images-list/car-images-list';
import TodoInputBox from './todo-input-box/todo-input-box';
import TodoList from './todo-list/todo-list';
import { TodoItem } from './models/todo-item.model';
import Tabs from './tabs/tabs';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
      todos: [],
      tabChildren: []
    };

    this.searchAppRef = React.createRef();
    this.todoAppRef = React.createRef();
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

  tabClicked = ({ ref }) => {
    const _tabChildren = [...this.state.tabChildren];
    _tabChildren.forEach(({ ref }) => ref.current.style);
    ref.current.style.display = 'block';
  };

  componentDidMount() {
    // Setup tabs config.
    const _tabChildren = [
      { ref: this.searchAppRef, order: 1, name: 'Search App' },
      { ref: this.todoAppRef, order: 2, name: 'Todo App' }
    ];

    this.setState({ tabChildren: [..._tabChildren] });
  }

  render() {
    return (
      <div>
        <h1>Apps</h1>
        <Tabs
          children={this.state.tabChildren}
          onTabClicked={this.tabClicked}
        />
        <div className="search-app" ref={this.searchAppRef}>
          <Search onSubmit={this.onSearchSubmit} />
          <CarImagesList carImages={this.state.images} />
        </div>
        <div className="todo-app" ref={this.todoAppRef}>
          <TodoInputBox onAddTodo={this.addTodo} />
          <TodoList list={this.state.todos} onTodoClicked={this.toDoClicked} />
        </div>
      </div>
    );
  }
}

export default App;
