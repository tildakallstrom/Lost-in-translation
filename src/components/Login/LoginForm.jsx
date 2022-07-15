import { useForm } from 'react-hook-form';
import { loginUser } from '../../api/user'
import { useState, useEffect } from 'react'
import { storageSave } from '../../utils/storage';
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext'
import { STORAGE_KEY_USER } from '../../const/storageKeys';


const usernameConfig = {
    required: true,
    minLength: 3,   // at least 3 characters
}

//loginform
const LoginForm = () => {
    const { register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const { user, setUser } = useUser()
    const navigate = useNavigate()

    //local state
    const [ loading, setLoading ] = useState(false)
    const [ apiError, setApiError ] = useState(null)

    // navigate to /translate if user is logged in
    useEffect(() => {
        if (user !== null) {
            navigate('/translate')
        }
    }, [ user, navigate ]) //empty dependencies = only run once

    //event handlers
    const onSubmit = async ({ username }) => {
        setLoading(true);

        const [error, userResponse] = await loginUser(username)
        
        if(error !== null) {
            setApiError(error)
        }

        //if successfully logged in, store user
        if(userResponse !== null) {
            storageSave(STORAGE_KEY_USER, userResponse)
            setUser(userResponse)
        }

        setLoading(false)
    };

    // render functions
    const errorMessage = (() => {
        if (!errors.username) {
            return null // no error
        }

        // missing username error
        if (errors.username.type === 'required') { 
            return (<div>
                        <br />
                        <span className="error">Username is required.</span>
                    </div>)
        }

        // username too short
        if (errors.username.type === 'minLength') {
            return (<div>
                        <br />
                        <span className="error">Username is too short (min. 3)</span>
                    </div>)
        }
    })()

    // render
    return (
        <>  
        <div className="formdiv">
            <form className="log_in" onSubmit={ handleSubmit(onSubmit) }>
                    <label hidden htmlFor="username">Username: </label>
                    <input className="input" type="text" placeholder="What's your name?" maxLength={15}{ ...register("username", usernameConfig)} />
                 
                    <div className="buttondiv">
                 <button className="top" type="submit" disabled={ loading }>»</button>
                 </div>
                 { errorMessage }
                 { loading && <p>Logging in...</p>}
                 { apiError && <p>{ apiError }</p>}
            </form>
            </div>
        </>
    )
}
export default LoginForm