import React from "react";
import { Card } from "react-bootstrap";

export default function ProductList({ data }) {
  return (
    <div className="justify-content-center align-items-center col-md-6 col-lg-3">
      <Card className="py-4 card">
        <Card.Img
          variant="top"
          src={data?.img}
          style={{ width: "50%", Maxheight: "400px" }}
          className="mx-auto hover-zoom"
        />
        <Card.Body>
          <Card.Title className="lead fw-bold">{data?.model}</Card.Title>
          <Card.Text className="text-primary lead fw-bold">{data?.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
