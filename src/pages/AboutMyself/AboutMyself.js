import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Tilt from "react-tilt";
import "./AboutMyself.css";

const AboutMyself = () => {
  return (
    <div data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000" id="about">
      <br />
      <h1 className="pt-5 text-center rainbow-text pb-3">ABOUT MYSELF</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>

              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Mohammad Mostafa</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Curious Web Developer</strong>
                    <br />

                    <ul className="text-left">

                      I am a Web Developer.I had a great interest in
                      React web development from my childhood.I always
                      wondered how these web pages work. A passionate programmer
                      and a Learner, born and brought up in Bangladesh. I am a
                      React Web Developer with <strong>React.js,  Express.js,
                        JavaScript, Node.js, and MongoDB as my tech stack.</strong>


                      Working with the clients, my goal is always
                      driven towards providing amazing experience
                      with the best level of quality and service to them.

                      Along with that, I also help people as a COACH
                      on their journey of becoming a professional programmer.
                      I love learning about new technologies,
                      what problems are they solving and How can I use
                      them to build better and scalable products.
                      <br />
                    </ul>


                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
          <Col className="d-flex justify-content-center flex-wrap">
            <div>
              <a href="#contact">
                <Button className="m-2" variant="primary">
                  Let's talk
                </Button>
              </a>
            </div>
            <div>
              <a href="https://drive.google.com/file/d/1LVEbNjtKagJZhabYZC3ammm2wsczxcuY/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button className="m-2" variant="success">
                  Resume
                </Button>
              </a>
            </div>
            <div>
              <a href="https://github.com/mohammad-mostafa94" target="_blank" rel="noopener noreferrer">
                <Button className="m-2" variant="dark">
                  GitHub
                </Button>
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/mohammad-mostafa-42306817a/" target="_blank" rel="noopener noreferrer">
                <Button className="m-2" variant="info">
                  LinkedIn
                </Button>
              </a>
            </div>
          </Col>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default AboutMyself;
