import {Outlet, useSearchParams} from 'react-router-dom'

// to display nested rout we need to have outlet component wher the nested com will be displayed
// useSearchParams is similar to useState , instead of saving in state it will store in url
export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUser = searchParams.get('filter') === 'active'
    return (
        <div>
            <h2>User 1</h2>
            <h2>User 2</h2>
            <h2>User 3</h2>
            <Outlet/>
            <div>
                <button onClick={() => setSearchParams({filter: 'active'})}> Active user</button>
                <button onClick={() => setSearchParams({})}> Reset filter</button>
            </div>
            {
                showActiveUser ? <h2> showing active user</h2> : <h2>Showing all user</h2>
            }
        </div>
    )
}