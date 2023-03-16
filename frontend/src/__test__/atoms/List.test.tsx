import React from 'react'
import { render, screen } from '@testing-library/react'
import { Li, Lists, Ul } from '../../components/atoms/List'
import { colors, dimensions } from '../../theme'

describe('List', () => {
  it('renders correctly Lists and Li', () => {
    render(
      <Lists data-testid="Lists">
        <Li data-testid="Li">one</Li>
      </Lists>
    )
    expect(screen.getByText('one')).toBeInTheDocument()

    const lists = screen.getByTestId('Lists')
    const li = screen.getByTestId('Li')

    expect(lists).toBeInTheDocument()
    expect(lists).toHaveStyle(`
      list-style: none;
      padding-left: ${dimensions.spacing.none};
      margin: ${dimensions.spacing.none}${dimensions.spacing.base} 0.3rem ${dimensions.spacing.none};
      text-align: left;
      display: flex;
      flex-direction: column;
    `)
    expect(li).toBeInTheDocument()
    expect(li).toHaveStyle(`
      border: 1px solid ${colors.lighterGrey};
      align-items: center;
      text-align: left;
      padding-left: 15px;
      min-width: 6rem;
      width: 150px;
      display: block;
      background-color: ${colors.white};
      position: relative;
      z-index: 2;
      line-height: ${dimensions.spacing.xl};
      border-bottom: ${dimensions.spacing.none};
      right: ${dimensions.spacing.none};
      border-left: 0.3rem solid white;
      border-right: 0.3rem solid white;
    `)
  })

  it('renders correctly Ul', () => {
    render(
      <Ul data-testid="Ul">
        <li data-testid="li">one</li>
      </Ul>
    )

    const ul = screen.getByTestId('Ul')
    const li = screen.getByTestId('li')
    expect(ul).toBeInTheDocument()
    expect(li).toBeInTheDocument()
    expect(ul).toHaveStyle(`
      list-style-type: none;
      padding: ${dimensions.spacing.none};
      margin-top: 10px;
      position: absolute;
      box-shadow: 0px 4px 10px ${colors.darkerShadow};
      background: transparent;
      border-radius: ${dimensions.borderRadius.sm};
    `)
  })
})
