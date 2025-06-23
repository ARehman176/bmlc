import ScrollToTop from './Scroll.jsx'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Topbar from './TopBar.jsx'

const Layer = () => {
    return (
        <>
        <Topbar />
            <ScrollToTop />
            <Navbar />
            <main>
                <Outlet /> {/* Page content goes here */}
            </main>
            <Footer />
        </>
    )
}

export default Layer