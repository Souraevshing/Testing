import { render, screen } from '@testing-library/react'

import Header from '../Header'

it('Should render same text passed into title prop', async () => {
  render(<Header title='My Header' />)
  const headingElement = screen.getByText(/my header/i)
  expect(headingElement).toBeInTheDocument()
})

// it('Checking for heading element', async () => {
//   render(<Header title='My Header' />)
//   const headingElement = screen.getByRole('heading')
//   expect(headingElement).toBeInTheDocument()
// })

it('Handling multiple tests', async () => {
  render(<Header title='My Header' />)
  const headingElement = screen.getByRole('heading', { name: 'My Header' })
  expect(headingElement).toBeInTheDocument()
})

// it('Checking for title property of header', async () => {
//   render(<Header title='My Header' />)
//   const headingElement = screen.getByTitle('Header')
//   expect(headingElement).toBeInTheDocument()
// })

it('Checking for heading element having id', async () => {
  render(<Header title='My Header' />)
  const headingElement = screen.getByTestId('main-header')
  expect(headingElement).toBeInTheDocument()
})

//query using FindBy
it('finding if element is present with provided text', async () => {
  render(<Header title='My Header' />)
  const headingElement = await screen.findByText(/my header/i)
  expect(headingElement).toBeInTheDocument()
})

//query using QueryBy
it('Checking if element is present or not', async () => {
  render(<Header title='My Header' />)
  const headingElement = screen.queryByText(/anything/i)
  expect(headingElement).not.toBeInTheDocument()
})

it('Checking total no of elements present as heading', async () => {
  render(<Header title='My Header' />)
  const headingElement = screen.getAllByRole('heading')
  expect(headingElement.length).toBe(1)
})
