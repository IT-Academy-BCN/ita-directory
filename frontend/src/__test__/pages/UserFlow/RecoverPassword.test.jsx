import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import configureStore from 'redux-mock-store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { RecoverPassword } from '../../../pages'
import userEvent from '@testing-library/user-event';

import {jest} from '@jest/globals'
import axios from 'axios';
jest.mock('axios');


describe('<RecoverPassword>', () => {

  beforeEach(() => {

    const initialState = {
      user: {
        isLoggedIn: false,
        value: undefined,
      },
      notification: {
        notifications: {},
      },
    }
    const mockStore = configureStore()
    let store=mockStore(initialState)

    render(
      <Provider store={store}>
      <BrowserRouter>
        <RecoverPassword />
      </BrowserRouter>
    </Provider>
    );
})

  it('shows an input with an "Email" placeholder', () => {
    const input = screen.getByPlaceholderText(/email/i)
    expect(input).toBeInTheDocument()
  })

  it('pass valid email to test email input field', async () => {
    const input = screen.getByPlaceholderText(/email/i)
    const emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    await userEvent.type(input, "test@test.com");
    expect(input.value).toMatch(emailFormat);
  });


 it('should submit form',async () => {
  // given
  const submitBtn =  screen.getByRole('button', {name: /enviar/i})
  const email = { email:"test@test.test"};
  axios.post.mockResolvedValueOnce(email);
  // when
 await userEvent.click(submitBtn);
  // then
  expect(axios.post).toHaveBeenCalledWith(`${import.meta.env.VITE_API_URL}/recover-password`, email);
  })

})
