import React, { useState, useEffect } from 'react';
import './Postview.css';
import { Navbar, Container, Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Post from "./Post"

const Postview = () => {
  const [Posts, setPosts] = useState([])
  useEffect(() => {
    fetch("/api/getposts")
      .then((res) => res.json())
      .then((res) => setPosts(res.posts))
      
  }, [])

  return (
    <div className="site-container">
      <div className="header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home"><b>InstaClone</b></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
              <Link to="/Post">Camera</Link>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="container">
        {
          Posts.map((post, index) => {
            return (
              <Container key= {index} className='my-5'>
                <Row>
                  <Col md={{ span: 6, offset: 3 }}>
                    <Card >
                      <Card.Header style={{ textAlign: "left" }}><label >{post.name}</label>
                        <br />
                        <label >{post.location}</label></Card.Header>
                      <Card.Body className="text-center">
                        <Card.Title>
                          <img src={post.image} alt="img" />
                        </Card.Title>
                        <Card.Text>
                         {post.description}
                        </Card.Text>
                        <Button variant="primary">50 Likes</Button>
                      </Card.Body>
                      <Card.Footer className="text-muted">21 0ct 2022</Card.Footer>
                    </Card>
                  </Col>
                </Row>
              </Container>
            )
          })
        }

      </div>
    </div>
  );
}

export default Postview;
