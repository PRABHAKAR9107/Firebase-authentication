import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState(""); // State for storing email input value
  const [error, setError] = useState(""); // State for storing error message
  const [password, setPassword] = useState(""); // State for storing password input value
  const [confirmPassword, setConfirmPassword] = useState(""); // State for storing confirm password input value
  const { signUp } = useUserAuth(); // Using the custom user authentication hook to get the signUp function
  const navigate = useNavigate(); // Navigation hook for programmatic navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      // Check if passwords match
      return setError("Passwords do not match");
    }

    try {
      await signUp(email, password); // Call the signUp function from the authentication hook
      navigate("/"); // Navigate to the home page after successful signup
    } catch (err) {
      setError(err.message); // Set error message if signup fails
    }
  };

  return (
    <>
      <div className="p-4 box rounded">
        <h2 className="mb-3">Firebase Auth Signup</h2> {/* Heading */}
        {error && <Alert variant="danger">{error}</Alert>}{" "}
        {/* Display error message if there is an error */}
        <Form onSubmit={handleSubmit}>
          {" "}
          {/* Form for signup */}
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
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)} // Update confirm password state on input change
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center rounded">
        Already have an account? <Link to="/">Log In</Link>{" "}
        {/* Link to login page */}
      </div>
    </>
  );
};

export default Signup;
