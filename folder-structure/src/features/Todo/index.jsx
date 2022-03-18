import React from 'react';
import Todo from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const todoList = [
        {
            id: 1,
            title: 'reactjs'
        },
        {
            id: 2,
            title: 'code'
        },
        {
            id: 3,
            title: 'fixbug'
        }
    ]
    return (
        <div>
            h1
            <Todo todoList={todoList}/>
        </div>
    );
}

export default TodoFeature;