import { Outlet } from 'react-router-dom'
function Home() {
    return (
        <div>
            navbar
            <Outlet></Outlet>
        </div>
    )
}

export default Home