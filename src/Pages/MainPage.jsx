import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import ToDoList from '../Components/ToDoList/ToDoList'
import { useDispatch } from 'react-redux'
import { addDatatoList, addTodoDataRequest } from '../Store/actions'
const MainPage = () => {
    const dispatch = useDispatch()
    const [todoData, setTodoData] = useState('')

    const inputHandler = (e) => {
        setTodoData(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (todoData.length > 0) dispatch(addTodoDataRequest(todoData))
        else alert('Please Enter Data')
    }



    return (
        <>
            <Header />
            <div className='mt-10 flex justify-center'>

                <form action="" onSubmit={submitHandler}>
                    <div className="flex inline">

                        <input type="text"
                            className='text-black p-2 w-4/5 border mr-1' placeholder='Enter Your TodoList' onChange={inputHandler} />
                        <button type='submit' className='px-3 py-2 bg-blue-500 text-white text-center '>Submit</button>
                    </div>
                </form>

            </div>
            <div className='mt-10 flex justify-center '>
                <ToDoList />
            </div>
        </>
    )
}

export default MainPage