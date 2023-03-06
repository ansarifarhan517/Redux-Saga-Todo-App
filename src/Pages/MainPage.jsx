import React, { useEffect, useState } from 'react'
import ToDoList from '../Components/ToDoList/ToDoList'
import { useDispatch, useSelector } from 'react-redux'
import { addDatatoList, addTodoDataRequest } from '../Store/actions'
import { useNavigate } from 'react-router-dom'
const MainPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [todoData, setTodoData] = useState('')
    const isAuthenticate = useSelector(state => state.authenticateReducer)

    const inputHandler = (e) => setTodoData(e.target.value)


    const submitHandler = (e) => {
        e.preventDefault();
        if (todoData.length > 0) dispatch(addTodoDataRequest(todoData))
        else alert('Please Enter Data')
    }

    useEffect(() => !isAuthenticate ? navigate('/') : navigate('/home'), [isAuthenticate])


    return (
        <>
            <div className='mt-10 flex justify-center'>

                <form action="" onSubmit={submitHandler}>
                    <div className="flex inline">

                        <input type="text"
                            className='text-black p-2 w-4/5 border mr-1' placeholder='Enter Your TodoList' onChange={inputHandler} />
                        <button type='submit' className='px-3 py-2 bg-teal-500 text-white text-center hover:bg-teal-400 shadow-xl'>Submit</button>
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