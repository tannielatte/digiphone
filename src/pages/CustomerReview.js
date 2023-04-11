import React from "react";
import { Card } from "react-bootstrap";

export default function CustomerReview() {
  return (
    <section id="pricing" className="bg-light mt-5 py-5">
      <div className="container-lg">
        <div className="text-center">
          <h2>What Our Customer Said</h2>
          <p className="lead text-muted">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, fugiat!
          </p>
        </div>

        <div className="row my-5 g-0 align-items-center justify-content-center">
          <div className="col-8 col-lg-4 col-xl-3">
            <Card className="border-0 py-3">
              <Card.Body>
                <div className="text-center">
                  {/* <Card.Img
                    src="https://source.unsplash.com/random/400x400"
                    className="rounded-circle w-50 mb-3"
                  /> */}
                  <Card.Title as="h6">SUGAWARA KOISI</Card.Title>
                  <Card.Subtitle className="lead">Samsung A23</Card.Subtitle>
                  <Card.Text className="mx-4 text-muted my-3">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatem.
                    </p>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-9 col-lg-4">
            <Card className="border-primary border-2 py-3">
              <Card.Body className="text-center">
                {/* <Card.Img
                  src="https://source.unsplash.com/random/400x401"
                  className="rounded-circle w-50 mb-3"
                /> */}
                <Card.Title as="h6">SHOYO HINATA</Card.Title>
                <Card.Subtitle className="lead">Iphone 14</Card.Subtitle>
                <Card.Text className="mx-4 text-muted my-3">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatem.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-8 col-lg-4 col-xl-3">
            <Card className="border-0">
              <Card.Body className="text-center">
                {/* <Card.Img
                  src="https://haikyuu.fandom.com/id/wiki/Tobio_Kageyama?file=Kaine-2014-06-14-14h04m46s120.png"
                /> */}
                <Card.Title as="h6">KAGEYAMA</Card.Title>
                <Card.Subtitle className="lead">SamsungA22</Card.Subtitle>
                <Card.Text className="mx-4 text-muted my-3">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatem.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
