import React from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
const Section7 = () =>{
return(
<section className="contact_section">
<Container>
<Row className="justify-content-center">
<Col sm={8} className="text-center">
<h4>We Guarantee</h4>
<h2>30 Minutes Delivery!</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, dignissimos.
</p>
<NavLink to="/" className="btn btn_red px-4 py-2 rounded-0">
Call:999-888-7777
</NavLink>
</Col>
</Row>
</Container>
</section>
)
}
export default Section7