import { Link, Outlet } from 'react-router-dom'

//for link dont include forward slash / for nested routes
// we need outlet component to display the nested component in the render
export const Products = () => {
    return (
        <>
            <div>
                <input type='search' placeholder="Search products" />
            </div>
            <nav>
                <Link to='featured'>Featured</Link>
                {/* relative links don't starts with /. it will be appended next to parent route. but if we use /feature it will take to aprent route 
                relative links are usefull for nested routes*/}
                <Link to='new'>new</Link>
            </nav>
            <Outlet/>
        </>
    )
}