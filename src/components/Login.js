import { useState } from "react"
import { useAuth } from "./auth";
import {useNavigate, useLocation} from 'react-router-dom'

export const Login = () => {
    const [user, setUser] = useState('');
    const auth = useAuth();
    const location = useLocation()
    const navigate = useNavigate()

    const redirectPath = location.state?.path || '/'

    const handlerLogin = () => {
        auth.login(user);
        navigate(redirectPath, {replace: true})
    }

    return(
        <div>
            <label>
                username: {' '}
                <input type='text' onChange={(e) => setUser(e.target.value)}/>
            </label>
            <button onClick={handlerLogin}>Login</button>
        </div>
    )
}