import { Outlet } from 'react-router-dom'
import Footer from '../component/footer/Footer'
import Navbar from '../component/header/Navbar'
function Home() {
    return (
        <div className='relative'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className='   bottom-0   '>            <Footer></Footer>

            </div>

        </div>
    )
}

export default Home