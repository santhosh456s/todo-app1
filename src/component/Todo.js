import React, { useState } from 'react';
import TodoList from './TodoList';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import Todo_From from './Todo_From';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    }
    if (edit.id) {
        return <Todo_From edit={edit} onSubmit={submitUpdate} />
    }
    return todos.map((todo, index) => (
        <div key={index} className={todo.isCompleted ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>{todo.text}</div>
            <div className="icon">
                <MdDelete className='delete' onClick={() => removeTodo(todo.id)} />
                <FaEdit className='edit' onClick={() => setEdit({ id: todo.id, value: todo.text })} />
            </div>
        </div>
    ))
}

export default Todo;
