import { useForm } from 'react-hook-form';
import { loginUser } from '../../api/user'
import { useState, useEffect } from 'react'
import { storageSave } from '../../utils/storage';
import { useHistory } from 'react-router-dom'

const usernameConfig = {
    required: true,
    minLength: 2
}
const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    //local state
    const [ loading, setLoading ] = useState(false)
    const [ apiError, setApiError ] = useState(null)

    //side effects
    useEffect(() => {
       
    }, []) //empty dependencies = only run once

    //event handlers
const onSubmit = async ({ username }) => {
    setLoading(true);
    const [error, user] = await loginUser(username)
    if(error !== null) {
        setApiError(error)
    }
    //if successfully logged in, store user
    if(user !== null) {
        storageSave('coffe-user', user)
    }
    setLoading(false)

};

    //render functions
const errorMessage = (() => {
    if (!errors.username) {
        return null
    }
   if (errors.username.type === 'required') { 
     return <span>Username is required.</span>
    }
    if (errors.username.type === 'minLength') {
      return <span>Username is too short (min. 2)</span>
    }
})()

    return (
        <>
        <h2>What's your name?</h2>
            <form onSubmit={ handleSubmit(onSubmit) }>
                 <fieldset>
                    <label htmlFor="username">Username: </label>
                    <input type="text" placeholder="Jane Doe" { ...register("username", usernameConfig)} />
                 </fieldset>
                    { errorMessage }
                 <button type="submit" disabled={ loading }>Continue</button>
                 { loading && <p>Logging in...</p>}
                 { apiError && <p>{ apiError }</p>}
            </form>
            </>
    )
}
export default LoginForm