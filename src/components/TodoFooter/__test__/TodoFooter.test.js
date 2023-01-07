import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import TodoFooter from '../TodoFooter'

const MockFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  )
}

describe('Test for TodoFooter', () => {
  it('Should render correct no of incomplete tasks', async () => {
    render(<MockFooter numberOfIncompleteTasks={10} />)
    const paragraphElement = screen.getByText(/10 tasks left/i)
    expect(paragraphElement).toBeInTheDocument()
  })

  it('Checking if component returns something or not', async () => {
    render(<MockFooter numberOfIncompleteTasks={10} />)
    const paragraphElement = screen.getByText(/10 tasks left/i)
    expect(paragraphElement).toBeTruthy()
  })
})

describe('Test for HTML element', () => {
  it('Checking if element is visible', async () => {
    render(<MockFooter numberOfIncompleteTasks={10} />)
    const paragraphElement = screen.getByText(/10 tasks left/i)
    expect(paragraphElement).toBeVisible()
  })

  it('Checking for html element matched', async () => {
    render(<MockFooter numberOfIncompleteTasks={10} />)
    const paragraphElement = screen.getByText(/10 tasks left/i)
    expect(paragraphElement).toContainHTML('p')
  })
})

describe('Test for checking html element text returned', () => {
  it('Should return text', async () => {
    render(<MockFooter numberOfIncompleteTasks={10} />)
    const paragraphElement = screen.getByText(/10 tasks left/i)
    expect(paragraphElement).toHaveTextContent('10 tasks left')
  })

  it('Checking text value of element', async () => {
    render(<MockFooter numberOfIncompleteTasks={10} />)
    const paragraphElement = screen.getByText(/10 tasks left/i)
    expect(paragraphElement.textContent).toBe('10 tasks left')
  })
})
