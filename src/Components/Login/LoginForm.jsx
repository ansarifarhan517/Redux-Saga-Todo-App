import React from 'react'
import { } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { isAuthenticate, isAuthenticateRequest } from '../../Store/actions'
const LoginForm = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(isAuthenticateRequest({ username, password }))

    }

    const usernameHandler = (e) => setUsername(e.target.value)
    const passwordHandler = (e) => setPassword(e.target.value)

    return (
        <div className='h-[100vh] flex justify-center items-center'>
            <div className="card border border-1 shadow-xl p-10">

                <form className="w-full max-w-sm" onSubmit={submitHandler}>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Username
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                onChange={usernameHandler}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full 
                        py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white
                         focus:border-teal-500"
                                id="inline-full-name" type="text" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="current-password">
                                Password
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                onChange={passwordHandler}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded 
                            w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                                id="current-password" type="password" placeholder="******************" autoComplete='' />
                        </div>
                    </div>
                    {/* <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3"></div>
                        <label className="md:w-2/3 block text-gray-500 font-bold">
                            <input className="mr-2 leading-tight" type="checkbox" />
                            <span className="text-sm">
                                Send me your newsletter!
                            </span>
                        </label>
                    </div> */}
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button className="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline
                             focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Sign In
                            </button>
                        </div>
                    </div>
                </form>

            </div>



        </div>
    )
}

export default LoginForm