import React from 'react';
const Todo = ({ todos ,deleteTodo}) => {
    const todoList = todos.length ? todos.map( todo => {
         return (
        <div className='collection-item' key={todo.id}>
             <span onClick={()=>{deleteTodo(todo.id)}}>{todo.item}</span>
        </div>
        )
    }
   
    ) : (
    <p>Yay! I don't have anything to do!</p>
    )
    return (
    <div className='todos collection'>
        { todoList }
        </div>
    )
}

//()=> -it is an anonymous function if we use this in 6th line then when we click on the list then it will be deleted

export default Todo;