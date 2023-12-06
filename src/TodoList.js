import React, { useState, useEffect } from 'react';
import { getTodos, addTodo } from './TodoService';
import './TodoList.css'; // Import the CSS file

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        setTodos(getTodos());
    }, []);

    const handleAddTodo = () => {
        addTodo(newTodo);
        setNewTodo('');
    };

    return (
        <div className="todo-container">
            <input
                className="todo-input"
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task"
            />
            <button className="add-btn" onClick={handleAddTodo}>Add</button>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
