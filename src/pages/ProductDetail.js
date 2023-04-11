import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function ProductDetail() {
  const { id } = useParams();

  const [detail, setDetail] = useState([]);

  useEffect(() => {
    fetch("/data/db.json")
      .then((res) => res.json())
      .then((data) => setDetail(data))
      .catch((err) => console.error(err));
  }, [id]);

  const found = detail?.find((details) => details.id === id);
  console.log(found);

  // form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  };

  const data = JSON.stringify(userInfo, undefined, 3);

  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-5">
          <img src={found?.img} alt="phone" className="img-fluid" />
        </div>
        <div className="col-lg-6 py-4">
          <h4>{found?.name}</h4>
          <p className="fw-bold text-primary muted">BRAND : {found?.brand}</p>
          <h6 className="py-3">ABOUT ITEM</h6>
          <ul>
            <li>{found?.about1}</li>
            <li>{found?.about2}</li>
            <li>{found?.about3}</li>
            <li>{found?.about4}</li>
            <li>{found?.about5}</li>
            <li>{found?.about6}</li>
          </ul>
        </div>
      </div>

      <div className="row justify-content-center align-items-center">
        <div className="col-lg-6">
          <div className="text-center">
            <h2>Contact Us</h2>
            <p className="lead text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quaerat.
            </p>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Cristiano Ronaldo"
                {...register("name", { required: true })}
                aria-invalid={errors.name ? "true" : "false"}
              />
            </Form.Group>
            {errors.name?.type === "required" && <p role="alert">First name is required</p>}
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                {...register("mail", { required: true })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="messages">
              <Form.Label>Message</Form.Label>
              <Form.Control name="messages" as="textarea" rows={3} {...register("messages")} />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </div>
        <div className="col-lg-6 py-5 text-center">
          <pre className="lead muted">{data}</pre>
        </div>
      </div>
    </div>
  );
}
