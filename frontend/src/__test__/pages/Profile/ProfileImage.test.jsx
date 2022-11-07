import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ProfileImage from '../../../components/atoms/ProfileImage'

describe('ProfilePic', () => {
  it('Adds correct src attribute', () => {
    const alt = 'Foto de perfil'
    const src = '/img/mock/profilePic.png'
    render(<ProfileImage imgSource={src} alt={alt} />)
    const img = screen.getByAltText(alt)
    expect(img.getAttribute('src')).toBe(src)
  })
})
