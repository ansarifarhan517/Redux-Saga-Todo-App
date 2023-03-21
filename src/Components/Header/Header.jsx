import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../Store/actions'
const Header = () => {
  const dispatch  = useDispatch()
  const data = useSelector(state => state.authenticateReducer)
  const logoutHandler = (e) => { 
    dispatch(logout())
  }
  
  return (
    <>
      <div className='p-4  bg-teal-700 text-white flex items-center justify-between'>


        <div className=''>ToDo List App</div>
        <div className=''>
          {data?.user.length > 0 && 
          <div className=''>
            <span className='mr-1'> Welcome {data.user[0].username}</span>
            <button type='buton' className='px-3 py-2 bg-teal-500  hover:bg-teal-600 rounded-lg shadow-xl'  onClick={logoutHandler}>Log Out</button>
            
            </div>
          
          }
        </div>

      </div>
    </>
  )
}

export default Header