import { renderHook } from '@testing-library/react-hooks'
import useResetScroll from '../../hooks/useResetScroll';

function useResetScrollTest() {
    test('useResetScroll calls window.scrollTo', () => {
        jest.spyOn(window, 'scrollTo')
        renderHook(() => useResetScroll())
        expect(window.scrollTo).toBeCalled()
      })
}

export default useResetScrollTest