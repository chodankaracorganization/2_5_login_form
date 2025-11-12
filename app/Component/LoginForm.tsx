// Q5. Develop a class-based component called LoginForm with input fields for "username" and "password."
// Implement a form submission handler that logs the entered values to the console when the form is
// submitted.

"use client";

import { ChangeEvent, Component, FormEvent, FormHTMLAttributes } from "react";

interface LoginFormState {
  username: string;
  password: string;
}

class LoginForm extends Component<{}, LoginFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    } as Pick<LoginFormState, keyof LoginFormState>);
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    const { username, password } = this.state;

    console.log("Username:", username);
    console.log("Password:", password);

    this.setState({
      username: "",
      password: "",
    });
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="flex flex-col justify-center gap-2"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            className="border rounded-md p-2"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor="username">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="border rounded-md p-2"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <button
          className="bg-blue-500 text-white p-2 rounded-full"
          type="submit"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default LoginForm;
