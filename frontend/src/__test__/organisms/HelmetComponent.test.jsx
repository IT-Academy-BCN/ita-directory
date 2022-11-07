import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { HelmetProvider } from 'react-helmet-async'
import HelmetComponent from '../../components/organisms/HelmetComponent'

describe('Title Render', () => {
  it('should render metadata', async () => {
    render(
      <HelmetProvider>
        <HelmetComponent text="title" />
      </HelmetProvider>
    )
    await waitFor(() => expect(document.title).toEqual('title'))
  })
})
