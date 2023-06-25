import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { useUserAuth } from "../context/UserAuthContext"; // Importing custom user authentication hook

const Login = () => {
  const [email, setEmail] = useState(""); // State for storing email input value
  const [password, setPassword] = useState(""); // State for storing password input value
  const [error, setError] = useState(""); // State for storing error message
  const { logIn } = useUserAuth(); // Using the custom user authentication hook to get the logIn function
  const navigate = useNavigate(); // Navigation hook for programmatic navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password); // Calling the logIn function from the authentication hook
      navigate("/home"); // Navigate to the home page after successful login
    } catch (err) {
      setError(err.message); // Set error message if login fails
    }
  };

  return (
    <>
      <div className="p-4 box rounded">
        <h2 className="mb-3">Firebase Auth Login</h2> {/* Heading */}
        {error && <Alert variant="danger">{error}</Alert>}{" "}
        {/* Display error message if there is an error */}
        <Form onSubmit={handleSubmit}>
          {" "}
          {/* Form for login */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)} // Update email state on input change
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)} // Update password state on input change
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <div className="w-100 text-center mt-3">
          <Link to="/forgot-password">Forgot Password?</Link>{" "}
          {/* Link to forgot password page */}
        </div>
        <hr />
      </div>
      <div className="p-4 box mt-3 text-center rounded">
        Don't have an account? <Link to="/signup">Sign up</Link>{" "}
        {/* Link to signup page */}
      </div>
    </>
  );
};

export default Login;
