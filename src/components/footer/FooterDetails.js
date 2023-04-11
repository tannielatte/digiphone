import React from "react";

export default function FooterDetails() {
  return (
    <div className="container-fluid bg-light">
      <div className="container py-5">
        <div className="row text-start">
          <div className="col-6 col-md-3">
            <h1 className="text-success">Digiphone</h1>
            <p className="lead muted">If you want help or have any feedback, please contact us:</p>
            <p className="muted">09.00 - 18.00 work day</p>
            <p className="muted">Email : digiphone@help.com</p>
            <p className="muted">Contact center : 123200088</p>
            <p className="muted">WhatsApp : 0800890099</p>
            <p className="lead muted mt-2">
              Directorate General of Consumer Protection and Trade Order of the Ministry of Trade of
              the Republic of Indonesia
            </p>
          </div>

          <div className="col-6 col-md-3">
            <h6 style={{ fontSize: "14px" }}>All ABOUT DIGIPHONE</h6>
            <a href="#" className="d-block text-decoration-none text-muted">
              About Digiphone
            </a>
            <a href="#" className="d-block text-decoration-none text-muted">
              Contact Us
            </a>
            <a href="#" className="d-block text-decoration-none text-muted">
              Careers
            </a>
            <a href="#" className="d-block text-decoration-none text-muted">
              Terms, Conditions and Privacy
            </a>
          </div>

          <div className="col-6 col-md-3">
            <h6 style={{ fontSize: "14px" }}>GUIDES $ SERVICES</h6>
            <a href="#" className="d-block text-decoration-none text-muted">
              Frequently Asked Questionse
            </a>
            <a href="#" className="d-block text-decoration-none text-muted">
              About Shopping
            </a>
            <a href="#" className="d-block text-decoration-none text-muted">
              About Promo & Voucher
            </a>
            <a href="#" className="d-block text-decoration-none text-muted">
              About Payment
            </a>
            <a href="#" className="d-block text-decoration-none text-muted">
              About Shipping
            </a>
            <a href="#" className="d-block text-decoration-none text-muted">
              About Membership
            </a>
            <a href="#" className="d-block text-decoration-none text-muted">
              Order Cancellation
            </a>
            <a href="#" className="d-block text-decoration-none text-muted">
              Corporate Order
            </a>
          </div>

          <div className="col-6 col-md-3">
            <h6 style={{ fontSize: "14px" }}>PAYMENT METHOD</h6>
            <img
              src="https://cdn.eraspace.com/pub/media/wysiwyg/banner-2/Footer-payment_25-jan-23_.png"
              alt="payment method"
              className="img-fluid mb-3"
            />
            <h6>DELIVERY SERVICES</h6>
            <img
              src="https://cdn.eraspace.com/pub/media/wysiwyg/shipping-footer.png"
              alt="payment method"
              className="img-fluid mb-3"
            />
            <h6>DOWNLOAD OUR APP</h6>
            <div className="row">
              <div className="col">
                <a href="#">
                  <img
                    src="https://cdn.eraspace.com/pub/media/wysiwyg/footer/Ic_Google_Play_Store.png"
                    alt="playstore"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col">
                <a href="#">
                  <img
                    src="https://cdn.eraspace.com/pub/media/wysiwyg/footer/Ic_Apple_App_Store.png"
                    alt="appstore"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row border-top mt-4">
          <p className="lead text-center muted py-2">Copyright © 2023 Yuni Safitri. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
