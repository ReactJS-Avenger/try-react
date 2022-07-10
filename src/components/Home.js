import {useNavigate} from 'react-router-dom'

export const Home = () =>{
    const navigate = useNavigate();
    return(
        <div>
            Home page
            <button onClick={() => navigate('order-summary', {replace: true})}>place order</button>
        </div>
    )
}