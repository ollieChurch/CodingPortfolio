import { renderHook } from '@testing-library/react-hooks'
import useWindowSize from '../../hooks/useWindowSize'

function useWindowSizeTest() {
    test('useWindowSize returns window height & width', () => {
        const { result } = renderHook(() => useWindowSize())
        
        expect(result.current.windowSize).toEqual({
                width: window.innerWidth, 
                height: window.innerHeight
        })
    })
}

export default useWindowSizeTest