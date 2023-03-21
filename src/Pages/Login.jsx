import React, { useEffect } from 'react'
import LoginForm from '../Components/Login/LoginForm'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Login = () => {
    const navigate = useNavigate();
    const authenticationState = useSelector(state => state.authenticateReducer)
    useEffect(() => {
        authenticationState.isAuthentic ?
        navigate('/home')  : navigate('/') 
    }, [authenticationState])
    
    return (
        <LoginForm></LoginForm>
    )
}

export default Login