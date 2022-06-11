import { useState } from 'react';
import {AiOutlineDelete, AiOutlineSave} from 'react-icons/ai'
import {BsPencilSquare} from 'react-icons/bs'

const Todo = (props) => {
    const todos = props.todo;
    const [isInput, setInput] = useState(false);
    const [todoId, setTodoId] = useState('');
    const [todo, setTodo] = useState('');
    
    const handleDelete = async (id) => {
        const res = await fetch(`http://127.0.0.1:8000/api/todos/${id}`, {
            method: 'DELETE'
        });
        props.onUpdateData();
        const data = await res.json();
        console.log(data);
    }
    const handleEdit =  (id, todo) => {
       console.log(id)
       console.log('Update ',todo)
       setInput(true);
       setTodoId(id);
       setTodo(todo);

    }
    
    const handleUpdate =async (id, todo)=>{
        console.log("udapet id ",id)
        console.log("update todo ",todo)
        const res = await fetch(`http://127.0.0.1:8000/api/todos/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                todo: todo
            })
        });
        setInput(false);
        props.onUpdateData();
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
        <div className='flex items-center w-full pr-2'>
            <input onClick={()=>handleDone(todos.id)} checked={todos.is_done ? 'checked' : ''}  className='p-2 mt-1 mr-2 ' type="checkbox" name="isDone" id="is_done" />
            {isInput ? (
                <input value={todo} onChange={(e) => {setTodo(e.target.value) }} className='w-full px-2 text-gray-700 outline-none ring-1 ring-blue-400' type="text" />
            ) : (
                <p className={todos.is_done ? 'line-through' : ''}>{todos.todo}</p>
            )}
            {/* <p className={todos.is_done ? 'line-through' : ''}>{todos.todo} </p> */}
        </div>
        <div className='flex gap-2'>
            {isInput ? (
                <span onClick={()=>handleUpdate(todos.id, todo)}>
                    <AiOutlineSave className='hover:text-blue-500'/>
                </span>
            ) : (
                <span onClick={()=>handleEdit(todos.id, todos.todo)}>
                    <BsPencilSquare className='hover:text-blue-500'/>
                </span>
            )}
            <span onClick={()=>handleDelete(todos.id)}>
                <AiOutlineDelete className='hover:text-red-500'/>
            </span>  
        </div>
    </div>
  )
}

export default Todo