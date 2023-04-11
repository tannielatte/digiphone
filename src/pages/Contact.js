import React from "react";
import { Form } from "react-bootstrap";

export default function Contact() {
  return (
    <div className="container py-5">
      <div className="text-center">
        <h2>Contact Us</h2>
        <p className="lead text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quaerat.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-10 col-lg-6 text-start">
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Cristiano Ronaldo" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="messages">
              <Form.Label>Message</Form.Label>
              <Form.Control name="messages" as="textarea" rows={3} />
            </Form.Group>
            <div class="col-md-12 text-center">
            <button type="button" class="btn btn-success">Submit</button>
        </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
