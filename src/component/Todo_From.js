import React, { useEffect, useRef, useState } from 'react';

const Todo_From = (props) => {

    const [input, setInput] = useState('');

    const inputref = useRef(null);
    useEffect(() => {
        inputref.current.focus();
    });

    const HandeChange = e => {
        setInput(e.target.value);
    }
    const handelForm = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        })
        setInput('');
    }
    return (
        <form className='todo-form' onSubmit={handelForm}>
            <input onChange={HandeChange} type='text' name='text' placeholder='add to todo' value={input} ref={inputref} />
            <button type='submit' >add</button>
        </form>
    );
}

export default Todo_From;
