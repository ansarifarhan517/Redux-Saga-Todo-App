import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
// import { getTodoListDataRequest } from '../../Store/actions'
import {useDispatch} from 'react-redux'
import { deleteFromTodoList } from '../../Store/actions'
const ToDoList = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.todoDataReducer)

    const deleteHandler = (e) => {
       dispatch(deleteFromTodoList(e.target.dataset.id))
    }

    useEffect(() => {
        console.log(data)
    }, [data])


    return (
        <div className='border p-4 flex justify-center w-1/2 shadow-lg'>
            <ul className='w-full flex flex-col justify-between gap-2'>
                {data.length > 0 && data[0].Todos.map((i, index) => {
                    return (
                        <div className='flex justify-between '>
                            <li key={index} className=''>{i} </li>
                            <span className='bg-red-600 px-2 hover:scale-110 shadow-lg text-white' data-id={index} onClick={deleteHandler}>x</span>
                        </div>

                    )
                })}
            </ul>
        </div>
    )
}

export default ToDoList