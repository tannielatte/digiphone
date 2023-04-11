import React from "react";
import { Accordion } from "react-bootstrap";

export default function About() {
  return (
    <div className="container py-5">
      <row className="row justify-content-center align-items-center">
        <div className="col-lg-6">
          <h1 className="lead display-5">What is Digiphone?</h1>
          <p className="muted my-3">
            Digiphone is the largest and leading lifestyle and smart retailer in Indonesia. We
            always try to be close to you by integrating thousands of offline retails belonging to
            Erajaya Group with Digiphone such as Erafone, iBox, Urban Republic, The Face Shop, iT
            and many other products that will come for you. We try to provide the best shopping
            experience, all the products you buy at Digiphone are guaranteed to be 100% authentic
            and have an official warranty, because we are the official and largest distributor. We
            also provide flexible payment options ranging from credit cards to cash payments at
            selected outlets. Not only offering technology products with official warranty and
            certified beauty products, we will also pamper you with various payment methods and to
            facilitate the delivery of goods. Digiphone continues to provide innovation because we
            believe that your needs are our priority. Enjoy your shopping experience at Eraspace!
          </p>
          <p className="muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ut ipsa nulla natus laudantium dolores veritatis deserunt aut laborum modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ullam consequuntur, distinctio impedit illum molestiae laborum asperiores sunt sapiente! Veniam?</p>
        </div> 
        <div className="col-lg-6">
        <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Chapter 1 - Your First Web Page</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda
                    delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid
                    minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda
                    delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid
                    minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Chapter 2 - Mastering CSS</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda
                    delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid
                    minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda
                    delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid
                    minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Chapter 3 - The Power of JavaScript</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda
                    delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid
                    minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda
                    delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid
                    minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header> Chapter 4 - Storing Data (Firebase Databases)</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda
                    delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid
                    minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda
                    delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid
                    minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Chapter 5 - User Authentication</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda
                    delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid
                    minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda
                    delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid
                    minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
        </div>
      </row>
    </div>
  );
}
