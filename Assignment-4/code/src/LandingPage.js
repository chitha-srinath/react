import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./landingpage.css";
import  Postview  from "./Postview";
import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <div className="img">
                            <img src="https://picsum.photos/400/270" alt="image" />
                        </div>
                        <div className="content">
                            <h3>10X Academy</h3>
                            <button><Link to="/Postview">Enter</Link></button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
