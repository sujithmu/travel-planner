import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import SignInForm from "./SignInForm";
import userEvent from "@testing-library/user-event";

// Mock useRouter:
jest.mock("next/navigation", () => ({
    useRouter() {
        return {
            prefetch: () => null
        };
    }
}));

test("Sign In Form", async () => {
    const rtl = render(<SignInForm />);

    // Check if the sign in button exists
    const signInBtn = screen.getByRole('button', {name: "Sign in"});
    userEvent.click(signInBtn);

    let emailField = screen.getByPlaceholderText("mail@example.com");
    expect(emailField).toBeValid();

    const input = screen.getByPlaceholderText("Enter your password");
    expect(input).toHaveAttribute('type', 'password');

    fireEvent.change(rtl.getByLabelText("Password"), {
        target: { value: "0000" }
    });
    expect(rtl.getByText("Sign in")).toBeTruthy();
});