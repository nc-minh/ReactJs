import React from 'react';

function Todo({todoList}) {
    return (
        <ul>
            {todoList.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}

export default Todo;