import "./Home.scss";
import { Card, Button, Alert } from "react-bootstrap";
import React, { useState } from "react";
import { useAuth, logout } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [error, setError] = useState("");
  const { currentUser } = useAuth();
  let navigate = useNavigate();

  function handleLogout() {
    setError("");
    logout()
      .then(navigate("/login"))
      .catch((err) => setError(err));
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2>Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profil">Update Profile</Link>
        </Card.Body>
      </Card>
      <Button variant="link" onClick={handleLogout}>
        Log Out
      </Button>
    </>
  );
}
