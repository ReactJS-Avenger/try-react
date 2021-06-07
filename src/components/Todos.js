import React from 'react';
import todoStore from "../stores/TodoStore";
import * as TodoList from "../actions/ActionTodos";
class Todos extends React.Component{
    constructor(){
        super();

        this.state={
            todos: todoStore.getAll()
        }
    }

    componentWillMount(){
        todoStore.on("change", ()=>{
            this.setState({
                todos: todoStore.getAll()
            })
        })
    }

    addTodoList(){
        TodoList.createTodo(Math.random() * 10)
    }

    reloadTodoList(){
        TodoList.reloadTodoList()
    }

    render(){
        return(
            <div>
                <button onClick={this.reloadTodoList.bind(this)}>reload data</button>
                <button onClick={this.addTodoList.bind(this)}>Add Todo</button>
                <ul>
                {this.state.todos.map((todo)=>{
                    return <li key={todo.id}>{todo.text}</li>
                })}
                </ul>
            </div>
        )
    }
}
export default Todos