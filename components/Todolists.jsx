import React, { useEffect, useState } from 'react'
import Todo from './Todo'


const Todolists = (todos) => {
  
    const[todo, setTodo] = useState('')
    const [todosList, setTodosList] = useState([])

    const Todos = async () => {
        const res = await fetch(`http://127.0.0.1:8000/api/todos`);
        const data = await res.json();
        setTodosList(data);
    };

    const handleAdd= async (e) => {
        // e.preventDefault();
        const res = await fetch('http://127.0.0.1:8000/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                todo: todo
            })
        });
        setTodo('');
        Todos();
    }

    const handleUpdateData = async () => {
        Todos();
    }

    const handleDone = async (id) => {
        const res = await fetch(`http://127.0.0.1:8000/api/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                isDone: true
            })
        });
        handleUpdateData();
    }


  useEffect(() => {
    Todos();
  }, []);

  return (
    <div className='flex flex-col justify-start w-full px-4 pt-6 bg-gray-800 rounded-md sm:w-4/12'>
            <h1 className='text-xl font-semibold text-center text-white'>Whats your focus today ?</h1>
            <div className='flex items-center justify-center mt-5'>
                <input value={todo} onChange={(e) => {setTodo(e.target.value) }}   className="w-full px-2 py-2 text-sm leading-6 rounded-md shadow-sm appearance-none focus:ring-2 focus:ring-blue-400 focus:outline-none text-slate-900 placeholder-slate-400 ring-1 ring-slate-200" type="text" aria-label="Filter projects" placeholder="What would you do..."></input>
                <button onClick={()=>handleAdd()} className='inline-block px-4 py-2 ml-2 text-white bg-blue-500 rounded-md hover:bg-blue-400 w-52'>
                    Add Todo
                </button>
            </div>
            <div className='flex flex-col gap-2 mt-10 text-white'>
                {todosList.map((todo, index) => {
                    return <Todo key={index} todo={todo} onUpdateData={(value) => { handleUpdateData(value) }} isDone={()=>handleDone(id)} />
                })}
                
                
            </div>
    </div>
  )
}

export default Todolists

