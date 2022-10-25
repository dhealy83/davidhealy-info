import React from "react";

import { Carousel, Card, ListGroup } from "react-bootstrap";

import "./Bio.css";

import huntingPhoto from "../../assets/carousel/huntingPhoto.jpg";
import smokedRibEye from "../../assets/carousel/smokedRibEye.jpg";
import bikePark from "../../assets/carousel/bikePark.jpg";

function Bio() {
  return (
    <>
      <div className="carousel h-75">
        <div className="m-2">
          <Card className="border border-3">
            <Card.Header className="fs-3">Biography and Fun Facts</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Carousel fade>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 rounded-3"
                      src={huntingPhoto}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>Orchard, Co</h3>
                      <p>A short trip to the plains of Colorado.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={smokedRibEye}
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <h3>Denver, Co</h3>
                      <p>Smoked Rib Eye finished on the grill.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={bikePark}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Denver, Co</h3>
                      <p>Volunteering at the Denver Bike Parks.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </ListGroup.Item>
              <ListGroup.Item className="fs-3 fw-semibold bg-light">
                A little bit about me.
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="lh-1">
                  I started the DU Full Stack coding bootcamp at the end of
                  July, 2022. It was time for me to make a career move and
                  coding seemed like the best option. It's been tough and I've
                  had to put a lot of extra time in to make sure I was happy
                  with my progression but I'm truly happy with what I've learned
                  the 7 weeks I've been in this course. Im Looking forward to
                  joining a team that will encourage and push me to grow.
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Bio;
