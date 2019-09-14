import React from 'react';

class TodoInputBox extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  addTodo = () => {
    const inputVal = this.inputRef.current.value;

    if (!inputVal) {
      return;
    }

    this.props.onAddTodo(inputVal);
    this.inputRef.current.value = '';
  };

  render() {
    return (
      <div className="todo-input">
        <label htmlFor="todoName" className="todo-input__label">
          Todo
        </label>
        <input
          ref={this.inputRef}
          type="text"
          id="todoName"
          className="todo-input__input-box"
        />
        <button className="todo-input__add-button" onClick={this.addTodo}>
          +
        </button>
      </div>
    );
  }
}

export default TodoInputBox;
