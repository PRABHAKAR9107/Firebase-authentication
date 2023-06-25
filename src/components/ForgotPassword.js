import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap"; // Importing necessary components from react-bootstrap
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext"; // Importing custom user authentication hook

export default function ForgotPassword() {
  const emailRef = useRef(); // Creating a ref to store the email input value
  const { resetPassword } = useUserAuth(); // Using the custom user authentication hook to get the resetPassword function
  const [error, setError] = useState(""); // State for storing error messages
  const [message, setMessage] = useState(""); // State for storing success message
  const [loading, setLoading] = useState(false); // State for indicating if the form is being submitted/loading

  async function handleSubmit(e) {
    // Function to handle form submission
    e.preventDefault();

    try {
      setMessage(""); // Clearing any previous messages
      setError("");
      setLoading(true); // Setting loading state to true
      await resetPassword(emailRef.current.value); // Calling the resetPassword function from the authentication hook
      setMessage("Check your inbox for further instructions"); // Setting success message
    } catch {
      setError("Failed to reset password"); // Setting error message
    }

    setLoading(false); // Setting loading state to false
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2> {/* Heading */}
          {error && <Alert variant="danger">{error}</Alert>}{" "}
          {/* Display error message if there is an error */}
          {message && <Alert variant="success">{message}</Alert>}{" "}
          {/* Display success message if there is a message */}
          <Form onSubmit={handleSubmit}>
            {" "}
            {/* Form for password reset */}
            <Form.Group id="email" className="mb-3">
              <Form.Label>Email</Form.Label> {/* Label for email input */}
              <Form.Control type="email" ref={emailRef} required />{" "}
              {/* Email input with ref */}
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              {" "}
              {/* Submit button */}
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link> {/* Link to login page */}
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>{" "}
        {/* Link to signup page */}
      </div>
    </>
  );
}
