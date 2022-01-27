import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./landingpage.css";
// import  Postview  from "./Postview";
import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <>
            <Container>
                <Row className="initial">
                    <Col md={{ span: 6, offset: 3 }} className='main'>
                        <div className="img">
                            <img src="https://images.unsplash.com/photo-1641939130808-2237aab9f8fc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0Mjc2MjQ0Nw&ixlib=rb-1.2.1&q=80&w=400" alt="loginpic" />
                        </div>
                        <div className="content">
                            <h3>10X Academy</h3>
                            <button className='click'><Link className="null" to="/Postview">Enter</Link></button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
