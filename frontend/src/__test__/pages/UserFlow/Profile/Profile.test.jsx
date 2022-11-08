import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../../../test-utils'
import Profile from '../../../../pages/UserFlow/Profile/Profile'

const mockUser = {
  avatar: {
    path: 'imagePath',
  },
}
vi.mock('../../../../hooks/useUserHook', () => ({
  default: () => mockUser,
}))

describe('Edit Profile Picture', () => {
  it('should use the correct src attribute', () => {
    render(<Profile />)
    const img = screen.getByAltText('profilePic')
    expect(img.getAttribute('src')).toBe('imagePath')
  })
})
