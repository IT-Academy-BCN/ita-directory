import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import RecoverPassword from '../../../pages/UserFlow/RecoverPassword/RecoverPassword'

// test
// Arrange: inputs (email) and targets.
//    Arrange steps should set up the test case. Does the test require any objects or special settings?
// Act: on the target behavior (post-email obj).
//    Act steps should cover the main thing to be tested. This could be calling a function or method, calling a REST API, or interacting with a web page. Keep actions focused on the target behavior.
// Assert: expected outcomes('Check email). Act steps should elicit some sort of response. Assert steps verify the goodness or badness of that response. Sometimes, assertions are as simple as checking numeric or string values. Other times, they may require checking multiple facets of a system. Assertions will ultimately determine if the test passes or fails.

describe('Recover Password', () => {
  it.only('should render an input type email', () => {
    // render(RecoverPassword)
    render(<RecoverPassword />)
    expect(screen.getByText(/email/i)).toBeInTheDocument()
    // const inputEl = screen.getByText("email");
    // const inputEl = screen.getAllByPlaceholderText(/email/i);
    // expect(inputEl).toBeInTheDocument();
    // expect(inputEl).toHaveAttribute("type", "email");
    // const input = screen.getAllByRole(/email/i)
    // expect(inputEl.outerHTML.includes('type="email"')).toBeTruthy()
    // expect(inputEl.querySelector('input')).toBeInTheDocument()
  })
})

// describe("<RecoverPassword />", () => {

//   it("should write in input and correspond in output", async () => {
//     render(RecoverPassword);
//     const input = screen.getByTestId(/email/i)
//     fireEvent.submit(input, { target: { value: 'test@test.test' }})
//     // let output = document.getElementById("output");
//     // expect(output).toHaveTextContent("abcdef");
// });
// });

// test('pass valid email to test email input field', () => {
//   render(<App />);

//   const inputEl = screen.getByTestId("email-input");
//   userEvent.type(inputEl, "test@mail.com");

//   expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
//   expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
// });

// test('pass invalid email to test input value', () => {
//   render(<App />);

//   const inputEl = screen.getByTestId("email-input");
//   userEvent.type(inputEl, "test");

//   expect(screen.getByTestId("email-input")).toHaveValue("test");
//   expect(screen.queryByTestId("error-msg")).toBeInTheDocument();
//   expect(screen.queryByTestId("error-msg").textContent).toEqual("Please enter a valid email.");
// });

// test('name', () => {
//     // array
//     expect(Array.isArray(['value'])).toBe(true);
//     // string
//     expect(typeof 'value').toBe('string');
//     // object
//     expect({value: 'value'}).toBeTruthy();
//     expect(typeof {value: 'value'}).toBe('object');
//   })

// it("submits", () => {
//   const onSubmit = jest.fn();
//   const { getByTestId } = render(<Form onSubmit={onSubmit} />);
//   fireEvent.submit(getByTestId("form"));
//   expect(onSubmit).toHaveBeenCalled();
// });

// function Form(props) {
//     return (
//       <form onSubmit={props.onSubmit} data-testid="form">
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }

// describe('RecoverPassword', async () => {
//     it('should render the label', () => {
//       render(<Label label="test label" htmlFor="email" />)
//       const label = screen.getByText('test label')

//       expect(label).toBeInTheDocument()
//       expect(label.outerHTML.includes('for="email"')).toBeTruthy()
//       expect(label.outerHTML.includes('hidden')).toBeFalsy()

//       // eslint-disable-next-line testing-library/no-node-access
//       expect(document.querySelector('label')).toBeInTheDocument()
//     })

//     it('should render the label with hidden prop', () => {
//       render(<Label label="test label" htmlFor="email" hiddenLabel />)
//       const label = screen.getByText('test label')
//       expect(label.outerHTML.includes('hidden')).toBeTruthy()
//     })
//   })
