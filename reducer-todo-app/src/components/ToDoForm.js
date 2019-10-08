import React, { useState } from 'react';

export default function TodoForm({dispatch}) {
    const [newTodo, setNewTodo] = useState("");

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    const submitForm = e => {
        e.preventDefault()
        dispatch({
            type: 'ADD_TODO',
            payload: newTodo
        })
        setNewTodo("");
    }

     const deleteTodo = e => {
        e.preventDefault();
        dispatch({
            type: 'DELETE_TODO',
        })
    }

    return (
        <div>
            <form>
                <label>
                    To Do: 
                </label>
                <input name='todo' onChange={handleChanges} value={newTodo} />
                <button onClick={submitForm}>Add Todo</button>
                <button onClick={deleteTodo}>Delete todo</button>
            </form>
        </div>
    )

}