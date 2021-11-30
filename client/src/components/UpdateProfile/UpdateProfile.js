import React, { useState, useRef } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function UpdateProfile() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const astRef = useRef();
  const firstAidRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser } = useAuth();
  console.log(currentUser);

  const handleUpdate = (event) => {
    event.preventDefault();

    // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    //   return setError("Passwords do not match!");
    // }

    // signup(emailRef.current.value, passwordRef.current.value)
    //   .then((userCredential) => {
    //     setError("");
    //     setLoading(true);
    //     const user = userCredential.user;
    //     console.log(user);
    //   })
    //   .catch((err) => setError(err));

    // setLoading(false);
  };

  return (
    <article className="login">
      <Card className="login-card">
        <Card.Body className="login-card__body">
          <h2 className="login-card__header">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form className="login-form" onSubmit={handleUpdate}>
            <Form.Group id="firstname" className="login-form__group">
              <Form.Label className="login-form__label">First Name</Form.Label>
              <Form.Control
                type="text"
                ref={firstNameRef}
                className="login-form__value"
                required
              />
            </Form.Group>
            <Form.Group id="lastname" className="login-form__group">
              <Form.Label className="login-form__label">Last Name</Form.Label>
              <Form.Control
                type="text"
                ref={lastNameRef}
                className="login-form__value"
                required
              />
            </Form.Group>
            <Form.Check
              type="checkbox"
              id="ast-checkbox"
              label="I have my AST Certification"
              ref={astRef}
            />
            <Form.Check
              type="checkbox"
              id="firstaid-checkbox"
              label="I have First Aid Certification"
              ref={firstAidRef}
            />
            <Button type="submit">Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div>
        Already have an Account? <Link to="/login">Log In!</Link>
      </div>
    </article>
  );
}