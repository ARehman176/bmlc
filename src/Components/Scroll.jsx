import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' }) // or 'smooth'
    }, [location.pathname])

    return null
}