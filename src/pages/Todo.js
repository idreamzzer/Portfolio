import React from 'react';

class Todo extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      todos: ['asd', 'aqweqwe', 'dsvf']
    }
  }


  componentDidMount() {
    if (localStorage.getItem('todos')){
      let todos = JSON.parse(localStorage.getItem('todos'))
      this.setState({todos})
    } else {
      this.setState({todos: []})
    }
  }

  addTodo(e) {
    e.preventDefault()
    let text = this.refs.input.value
    let todos = this.state.todos
    todos.push(text)
    this.setState({todos})
    localStorage.setItem('todos', JSON.stringify(todos))
    this.refs.input.value = ''
    this.refs.input.focus()
  }

  removeTodo(i) {
    let todos = this.state.todos
    todos.splice(i, 1)
    this.setState({todos})
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  render() {

    let styles = {
      input: {
        width: '100%',
        height: '70px',
        fontSize: '20px'
      },
      btn: {
        outline: 'none',
        border: '0'
      }
    }

    let renderTodos = (this.state.todos.length > 0) ? this.state.todos.map((item, i) => {
      return <div key={i} className="todo__item box">
              <div className="todo__content">{item}</div>
              <div className="todo__remove" onClick={this.removeTodo.bind(this, i)}>x</div>
            </div>
    })
    : null

    return (
      <div className="content__page todo container">
        <form>
          <input style={styles.input} className="todo__input box" ref="input" placeholder="Вводить сюда..." />
          <button type="submit" style={styles.btn} className="todo__btn box" onClick={this.addTodo.bind(this)}>Добавить</button>
        </form>
        {renderTodos}
      </div>
    );
  }

}

export default Todo;
