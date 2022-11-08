import React from 'react'
import { expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import UserAccess from '../../../components/layout/Header/UserAccess'

const mockUser = {
  avatar: { path: 'imageSrc' },
}

vi.mock('../../../hooks/useUserHook', () => ({
  default: () => mockUser,
}))

const mockState = {
  isLoggedIn: true,
}

vi.mock('react-redux', () => ({
  useSelector: () => mockState,
}))

describe('UserAccess Profile Picture', () => {
  it('should use the correct src attribute', () => {
    render(<UserAccess />)
    const img = screen.getByAltText('profilePic')
    expect(img.getAttribute('src')).toBe('imageSrc')
  })
})
