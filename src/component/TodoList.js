import React, { useState } from 'react';
import Todo from './Todo';
import Todo_From from './Todo_From';
import './style.css'

const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos]
        setTodos(newTodos);
        console.log(todo, ...todos);
    }
    const completeTodo = id => {
        let updateTodo = todos.map(todo => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        });
        setTodos(updateTodo);
    }
    // delete todo
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr);
    }
    // update Todo
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }

    return (
        <div className="todo-list">
            <h1 className="heading">What is the plan for today</h1>
            <Todo_From onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    );
}

export default TodoList;
