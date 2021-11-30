import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
// import BlogCards from './BlogCards';
import javascript2 from './javascript-2.jpg';
import javascript from './javascript.jpg';
import react from './react.jpg';
const Blogs = () => {
    return (
        <div id='blogs' >
            <br />
            <h1 className='text-center rainbow-text mt-5'>My Blogs</h1>
            <hr />
            {/* <BlogCards></BlogCards> */}
            <CardDeck >
                <Card data-aos="fade-right" className="focus mt-2 mb-2">
                    <Card.Img variant="top" src={javascript} />
                    <Card.Body>
                        <Card.Title>JavaScript trips</Card.Title>
                        <Card.Text>
                            JavaScript trips and tricks can be easily created hard and strong key words can simple.
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 1 month ago</small>
                    </Card.Footer>
                </Card>
                <Card data-aos="flip-left">
                    <Card.Img variant="top" src={javascript2} />
                    <Card.Body>
                        <Card.Title>JavaScript Beginners Note book</Card.Title>
                        <Card.Text>
                            JavaScript Beginners Note Book is a book take very simple for development.This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 2 month ago</small>
                    </Card.Footer>
                </Card>
                <Card data-aos="fade-left">
                    <Card.Img variant="top" src={react} />
                    <Card.Body>
                        <Card.Title>React trips and tricks</Card.Title>
                        <Card.Text>
                            React is a very popular library in today whole world for frontend development. supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 month ago</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    );
};

export default Blogs;