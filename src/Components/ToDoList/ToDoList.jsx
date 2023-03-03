import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getTodoListDataRequest } from '../../Store/actions'
import {useDispatch} from 'react-redux'
const ToDoList = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.todoDataReducer)
    const DUMMY_DATA = [
        {
            id: 1,
            name: 'Farhan',
            TodoData: 'Learn React',
            date: Date.now()
        },
        {
            id: 2,
            name: 'Vikram',
            TodoData: 'Learn GIS',
            date: Date.now()
        },
        {
            id: 3,
            name: 'Navdeep',
            TodoData: 'Learn Python',
            date: Date.now()
        },
    ]
    
    useEffect(() => {
        dispatch(getTodoListDataRequest())
    }, [])
    
    return (
        <div className='border p-4 flex justify-center w-1/2 shadow-lg'>
            <ul>
                {data.map((i, index) => {
                    return <li key={index}>{i}</li>
                })}
            </ul>
        </div>
    )
}

export default ToDoList