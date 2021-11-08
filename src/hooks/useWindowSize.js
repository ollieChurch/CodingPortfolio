import { useEffect, useState } from 'react'

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth, 
        height: window.innerHeight
    })

    function updateSize() {
        setWindowSize({
            width: window.innerWidth, 
            height: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', updateSize)
        return () => window.removeEventListener('resize', updateSize)
    }, [])
    
    return {windowSize}
}

export default useWindowSize