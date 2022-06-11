import { useState } from 'react';
import {AiOutlineDelete} from 'react-icons/ai'
import {BsPencilSquare} from 'react-icons/bs'

const Todo = (props) => {
    const todos = props.todo;

    const handleDelete = async (id) => {
        const res = await fetch(`http://127.0.0.1:8000/api/todos/${id}`, {
            method: 'DELETE'
        });
        props.onUpdateData();
        const data = await res.json();
        console.log(data);
    }
    const handleEdit = async (id) => {
       console.log(id)

    }

    const handleUpdate = (id)=>{
        console.log('update', id);
    }

    const handleDone = async (id) => {
        const res = await fetch(`http://127.0.0.1:8000/api/todos/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                is_done: true
            })
        });
        props.onUpdateData();
    }

  return (
    <div className='flex items-center justify-between p-1 px-2 bg-gray-700 rounded-sm cursor-pointer'>
        <div className='flex items-center' onClick={()=>handleDone(todos.id)}>
            <input checked={todos.is_done ? 'checked' : ''}  className='p-2 mt-1 mr-2 ' type="checkbox" name="isDone" id="is_done" />
            <p className={todos.is_done ? 'line-through' : ''}>{todos.todo} </p>
        </div>
        <div className='flex gap-2'>
            <span onClick={()=>handleUpdate(todos.id)}><BsPencilSquare className='hover:text-blue-500'/></span>
            <span onClick={()=>handleDelete(todos.id)}><AiOutlineDelete className='hover:text-red-500'/></span>  
        </div>
    </div>
  )
}

export default Todo