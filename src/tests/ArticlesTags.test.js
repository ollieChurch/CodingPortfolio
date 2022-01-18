import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArticlesTags from '../pages/Articles/ArticlesHome/ArticlesTags'

afterEach(() => { jest.resetAllMocks() })
afterAll(() => { jest.clearAllMocks() })

test('renders learn react link', () => {
  const testData = [{tags: ['test1']}, {tags: ['test2']}]

  render(<ArticlesTags setFilterTag={jest.fn()} articlesArr={testData} />);
  const tags1 = screen.getByText(/test1/i)
  const tags2 = screen.getByText(/test2/i)
  expect(tags1).toBeInTheDocument()
  expect(tags2).toBeInTheDocument()
});