import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Todo from '../Todo'

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  )
}

const addTasks = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
  const buttonElement = screen.getByRole('button', { name: /Add/i })
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } })
    fireEvent.click(buttonElement)
  })
}

describe('Todo', () => {
  it('Should render same text passed as prop', async () => {
    render(<MockTodo />)

    addTasks([/Submit/i])

    const divElement = screen.getByText(/Submit/i)
    expect(divElement).toBeInTheDocument()
  })

  it('Should clear input-box when add button is clicked', async () => {
    render(<MockTodo />)

    addTasks(['code', 'test'])

    const divElement = screen.getAllByTestId('task-container')
    expect(divElement.length).toBe(2)
  })
})
