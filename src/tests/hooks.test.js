import useResetScrollTest from './hooks/useResetScrollTest'
import useWindowSizeTest from './hooks/useWindowSizeTest'

window.scrollTo = jest.fn()

afterEach(() => {
  jest.resetAllMocks()
})

afterAll(() => {
  jest.clearAllMocks()
})

describe('hooks functionality', () => {
  useResetScrollTest()
  useWindowSizeTest()
})