import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductList({ data }) {
  const { img, model, price } = data;
  console.log(data);
  return (
    <div className="justify-content-center align-items-center col-md-6 col-lg-3">
      <Link to={data.id.toString()} className="text-decoration-none text-dark">
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
      </Link>
    </div>
  );
}
