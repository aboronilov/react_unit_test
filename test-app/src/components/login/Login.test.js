import {fireEvent, render, screen} from '@testing-library/react'
import Login from './Login' 

test("username input should be rendered", () => {
    render(<Login/>)
    const usernameInputEl = screen.getByPlaceholderText(/username/i)
    expect(usernameInputEl).toBeInTheDocument()
})

test("password input should be rendered", () => {
    render(<Login/>)
    const passwordInputEl = screen.getByPlaceholderText(/password/i)
    expect(passwordInputEl).toBeInTheDocument()
})

test("button should be rendered", () => {
    render(<Login/>)
    const buttonInputEl = screen.getByRole("button")
    expect(buttonInputEl).toBeInTheDocument()
})

test("username should be empty", () => {
    render(<Login/>)
    const usernameInputEl = screen.getByPlaceholderText(/username/i)
    expect(usernameInputEl.value).toBe("")
})

test("password should be empty", () => {
    render(<Login/>)
    const passwordInputEl = screen.getByPlaceholderText(/password/i)
    expect(passwordInputEl.value).toBe("")
})

test("button should be disabled", () => {
    render(<Login/>)
    const buttonInputEl = screen.getByRole("button")
    expect(buttonInputEl).toBeDisabled()
})

test("loading should not be rendered", () => {
    render(<Login/>)
    const buttonInputEl = screen.getByRole("button")
    expect(buttonInputEl).not.toHaveTextContent(/please wait/i)
})

test("error message should be invisible", () => {
    render(<Login/>)
    const errorMessage = screen.getByTestId("error")
    expect(errorMessage).not.toBeVisible()
})

test("username should change", () => {
    render(<Login/>)
    const usernameInputEl = screen.getByPlaceholderText(/username/i)
    const testValue = "test"
    fireEvent.change(usernameInputEl, { target: { value: testValue} })
    expect(usernameInputEl.value).toBe(testValue)
})

test("password should change", () => {
    render(<Login/>)
    const passwordInputEl = screen.getByPlaceholderText(/password/i)
    const testValue = "test"
    fireEvent.change(passwordInputEl, { target: { value: testValue} })
    expect(passwordInputEl.value).toBe(testValue)
})

test("button should not be disabled when login and pass are given", () => {
    render(<Login/>)
    const usernameInputEl = screen.getByPlaceholderText(/username/i)
    const passwordInputEl = screen.getByPlaceholderText(/password/i)
    const buttonInputEl = screen.getByRole("button")
    const testValue = "test"

    fireEvent.change(usernameInputEl, { target: { value: testValue} })
    fireEvent.change(passwordInputEl, { target: { value: testValue} })    
    expect(buttonInputEl).not.toBeDisabled()
})

test("loading should be rendered when clicked", () => {
    render(<Login/>)
    const usernameInputEl = screen.getByPlaceholderText(/username/i)
    const passwordInputEl = screen.getByPlaceholderText(/password/i)
    const buttonInputEl = screen.getByRole("button")
    const testValue = "test"

    fireEvent.change(usernameInputEl, { target: { value: testValue} })
    fireEvent.change(passwordInputEl, { target: { value: testValue} })
    fireEvent.click(buttonInputEl)    
    expect(buttonInputEl).toHaveTextContent(/please wait/i)
})

