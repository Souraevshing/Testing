import { render, screen, fireEvent } from '@testing-library/react'
import AddInput from '../AddInput'

const mockTodos = jest.fn()

describe('AddInput', () => {
  it('Should render input element', async () => {
    render(<AddInput todos={[]} setTodos={mockTodos} />)

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    expect(inputElement).toBeInTheDocument()
  })

  it('Should be able to type in input-box', async () => {
    render(<AddInput todos={[]} setTodos={mockTodos} />)

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    fireEvent.change(inputElement, { target: { value: 'Submit' } })
    expect(inputElement.value).toBe('Submit')
  })

  it('Should have empty input-box when add button is clicked', async () => {
    render(<AddInput todos={[]} setTodos={mockTodos} />)

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole('button', { name: /Add/i })
    fireEvent.change(inputElement, { target: { value: 'Submit' } })
    fireEvent.click(buttonElement)
    expect(inputElement.value).toBe('')
  })
})
