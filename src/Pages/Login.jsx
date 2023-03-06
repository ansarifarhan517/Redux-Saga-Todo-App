import React, { useEffect } from 'react'
import LoginForm from '../Components/Login/LoginForm'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Login = () => {
    const navigate = useNavigate();
    const isAuthenticate = useSelector(state => state.authenticateReducer)
    console.log(isAuthenticate)
    useEffect(() => {
        !isAuthenticate ? navigate('/') : navigate('/home')
    }, [isAuthenticate])
    
    return (
        <LoginForm></LoginForm>
    )
}

export default Login