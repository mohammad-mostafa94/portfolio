import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
// import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
// import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";

import "./Projects.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <br /><br />
      <h1 className="rainbow-text pt-1 text-center  pb-3">RECENT  PROJECTS</h1>
      <Timeline>
        <Events>

          {/* Project:  Filmy World */}
          <ImageEvent
            date="Nov-09-2021"
            className="text-center"
            text="Filmy World"
            src={"https://i.ibb.co/gD1bgWD/film-world.png"}
            alt="Creative Agency"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A full-stack and responsive film seller web application with admin panel.
                        <hr />
                        <strong>Overview:</strong>
                        <ul className="list-styles pt-1">
                          <li>A MERN stack dynamic website of a service-oriented organization.</li>
                          <li>The client can submit order and will see his/her all orders.</li>

                          <li>The client  can give his/her feedback and it will be shown on website. </li>
                          <li>
                            The admin can see all client's orders list and take action and update status
                          </li>
                          <li>Admin can add desired services and show dashboard also showing to user his/her dashboard. </li>

                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="Github API"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              GitHub
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/mohammad-mostafa94/client_filmy-world"
                  target="_blank"
                >
                  GITHUB(Client)
                </UrlButton>
                <UrlButton
                  href="https://race-zone-bike.web.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/mohammad-mostafa94/server_filmy-world"
                  target="_blank"
                >
                  GITHUB(Server)
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Trip tracker */}
          <ImageEvent
            date="Oct-31-2021"
            className="text-center"
            text="Trip tracker"
            src={'https://i.ibb.co/9NDJ5tp/traptricker.png'}
            alt="Trip tracker"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>


                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A full-stack and responsive resort booking web application.
                        <hr />
                        <strong>Overview:</strong>
                        <ul className="list-styles pt-1">
                          <li>User can submit book desire resort and will see his/her all booking orders. </li>
                          <li>User can login with google (Firebase authentication) and added simply logout system.</li>
                          <li>User can book any resorts and also can cancel the booking</li>
                          <li>User find different type’s resorts package which will take he/she through a well place.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="Github API"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              GitHub
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">

                <UrlButton
                  href="https://github.com/mohammad-mostafa94/client-triptracker"
                  target="_blank"
                >
                  GITHUB(Client)
                </UrlButton>

                <UrlButton
                  href="https://travel-house-c75b1.web.app/"
                  target="_blank"
                >
                  GO LIVE
                </UrlButton>

                <UrlButton
                  href="https://github.com/mohammad-mostafa94/server-triptracker"
                  target="_blank"
                >
                  GITHUB(Server)
                </UrlButton>

              </div>
            </div>
          </ImageEvent>

          {/* Project: Doctor Portal */}
          <ImageEvent
            date="Oct-21-2021"
            className="text-center"
            text="Shakhawat Healthcare"
            src={'https://i.ibb.co/VBSh2KT/shakhawat-healtcare.png'}
            alt="Shakhawat Healthcare"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A Frontend responsive hospital sit booking web application.
                        <hr />
                        <strong>Overview:</strong>
                        <ul className="list-styles pt-1">
                          <li>Any patient can see details of a service by clicking the details button and can request for
                            service </li>
                          <li>User can take one appointment his/her any times. </li>
                          <li>Each patient can sign in via google or can create an account for sign in.  </li>

                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="Github API"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              GitHub
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">

                <UrlButton
                  href="https://github.com/mohammad-mostafa94/shakhawat-healthcare"
                  target="_blank"
                >
                  GITHUB
                </UrlButton>

                <UrlButton
                  href="https://shakhawat-healtcare.web.app/"
                  target="_blank"
                >
                  GO LIVE
                </UrlButton>



              </div>
            </div>
          </ImageEvent>


        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
