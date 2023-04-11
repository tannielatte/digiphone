import React from "react";
import { Card } from "react-bootstrap";

export default function ProductList({ data }) {
  const { name, brand, img, model, price, about1, about2, about3, about4, about5, about6 } = data;
  return (
    <div className="justify-content-center align-items-center col-md-6 col-lg-3">
      <Card className="py-4 card">
        <Card.Img
          variant="top"
          src={img}
          style={{ width: "50%", Maxheight: "400px" }}
          className="mx-auto hover-zoom"
        />
        <Card.Body>
          <Card.Title className="lead fw-bold">{model}</Card.Title>
          <Card.Text className="text-primary lead fw-bold">{price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
