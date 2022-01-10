import { renderHook } from '@testing-library/react-hooks'
import useResetScroll from '../hooks/useResetScroll';
import useWindowSize from '../hooks/useWindowSize'

window.scrollTo = jest.fn()
afterEach(() => { jest.resetAllMocks() })
afterAll(() => { jest.clearAllMocks() })

describe('hooks functionality', () => {
  test('useResetScroll calls window.scrollTo', () => {
    jest.spyOn(window, 'scrollTo')
    renderHook(() => useResetScroll())
    expect(window.scrollTo).toBeCalled()
  })

  test('useWindowSize returns window height & width', () => {
    const { result } = renderHook(() => useWindowSize())
    expect(result.current.windowSize).toEqual({
      width: window.innerWidth, 
      height: window.innerHeight
    })
  })
})