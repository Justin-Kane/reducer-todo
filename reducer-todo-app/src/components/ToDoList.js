import React,{ useReducer} from 'react';

import Todo from './ToDo'
import TodoForm from './ToDoForm'
import {todoReducer, initialState} from '../reducers/todoReducers'

export default function TodoList() {
    const [state, dispatch] = useReducer(todoReducer, initialState)

    return (
        <div>
            {state.map( todo => {
                return <Todo todo={todo} key={todo.id} dispatch={dispatch} />
            })}
            <TodoForm dispatch={dispatch} />
        </div>
    )
}