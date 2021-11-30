import React from 'react';
import './carousel.css'
import Particles from 'react-particles-js';
import { Button, Col, Container, Row } from "react-bootstrap";
import Typing from "react-typing-animation";
import Spin from "react-reveal/Spin";
import Slide from "react-reveal/Slide";
import github from './github.png';
import linkedin from './linkedin (1).png';
import stackOevrflow from './stack-overflow.png';

const Banner = () => {
  return (
    <div id="home" data-aos="fade-rights" className='color-dark '>
      <Container>
        <Row>
          <Col md={6}>
            <Row>
              <Col md={12} className="text-center mt-3 ">
                <h1 id="font-hello" className="mb-3 rainbow-text">
                  Hello, I'm <br />
                  <Typing>
                    <span id="google-font-name" className="name-color rainbow-text">Mohammad Mostafa</span>
                  </Typing>
                </h1>
                <Spin>
                  <h2 className="text-info" id="google-font-title">I'm a Web Developer</h2>
                </Spin>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center mt-5 ">
                <Slide left>
                  <Button
                    style={{ color: "white", marginBottom: "10px", }}
                    href="https://www.linkedin.com/in/mohammad-mostafa-42306817a/"
                    variant="outline-primary"
                  >
                    View My LinkedIn Profile
                    <img className=" ml-1" src={linkedin} alt="" />
                  </Button>
                </Slide>
                <Slide right>
                  <Button
                    style={{ color: "white", marginBottom: "15px" }}
                    variant="outline-info"
                    href="https://github.com/mohammad-mostafa94"
                  >
                    View My GitHub Profile
                    <img className=" ml-1" src={github} alt="" />
                  </Button>
                </Slide>
                <Slide bottom>
                  <Button
                    style={{ color: "white", marginBottom: "15px" }}
                    variant="outline-info"
                    href="https://stackoverflow.com/users/17296064/mohammad-mostafa"
                  >
                    View Stack Overflow
                    <img className="svg-icon" src={stackOevrflow} alt="" />
                  </Button>

                </Slide>
                <Slide bottom>
                  <Button
                    style={{ color: "white" }}
                    variant="outline-info"
                    href="https://drive.google.com/file/d/1LVEbNjtKagJZhabYZC3ammm2wsczxcuY/view?usp=sharing"
                  >
                    Download Resume
                    <img src="https://img.icons8.com/external-kmg-design-flat-kmg-design/30/000000/external-download-arrow-kmg-design-flat-kmg-design-1.png" alt="" />
                  </Button>

                </Slide>
              </Col>
            </Row>
          </Col>

          <Col md={6} className="mt-5 mb-5 d-flex  justify-content-center my-image">

            <img data-aos="zoom-in-left" style={{ height: "100%" }} className="img-fluid" src={"https://i.ibb.co/bv1LgFQ/shakil-febicon.png"} alt="selfPicture" />
          </Col>
        </Row>
      </Container>
      <Particles

        height="40vh"

        width="100%"
        params={{
          "particles": {
            "number": {
              "value": 8,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "line_linked": {
              "enable": false
            },
            "move": {
              "speed": 1,
              "out_mode": "out"
            },
            "shape": {
              "type": [
                "image",
                "circle"
              ],
              "image": [
                {
                  "src": "https://img.icons8.com/office/16/000000/react.png",
                  "height": 20,
                  "width": 23
                },
                {
                  "src": "https://img.icons8.com/color/96/000000/javascript--v1.png",
                  "height": 20,
                  "width": 20
                },
                {
                  "src": "https://img.icons8.com/color/48/000000/mongodb.png",
                  "height": 20,
                  "width": 20
                }
              ]
            },
            "color": {
              "value": "#CCC"
            },
            "size": {
              "value": 30,
              "random": false,
              "anim": {
                "enable": true,
                "speed": 4,
                "size_min": 10,
                "sync": false
              }
            }
          },
          "retina_detect": false
        }} >
      </Particles>

    </div>
  );
};

export default Banner;