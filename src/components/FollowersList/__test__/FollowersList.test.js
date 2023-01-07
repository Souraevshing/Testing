import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import FollowersList from '../FollowersList'

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  )
}

describe('FollowersList', () => {
  beforeEach(() => {
    console.log('testing')
  })

  beforeAll(() => {
    console.log('beforeAll')
  })

  afterEach(() => {
    console.log('running after')
  })

  afterAll(() => {
    console.log('running after all')
  })

  it('should fetch and render input element', async () => {
    render(<MockFollowersList />)
    const followerDivElement = await screen.findByTestId('follower-item-0')

    expect(followerDivElement).toBeInTheDocument()
  })

  //   it('Find all the elements having id', async () => {
  //     render(<MockFollowersList />)
  //     const followerDivElement = await screen.findAllByTestId('follower-item-0')
  //     expect(followerDivElement.length).toBe(5)
  //   })
})
