import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PromotionImage from '../../assets/promotion/pro.png';
const Section4 = () =>{
return(
<>
<section className="promotion_section">
<Container>
<Row className="align-items-center">
<Col lg={6} className="text-center mb-5 mb-1g-0">
<img src={PromotionImage} className="img-fluid" alt="promotion" />
</Col>
<Col lg={6} className="px-5">
<h2>Noting bring people together like a good burger</h2>
<p>Lorem ipsum dolor sit amet consectetur Fuga numquam cumque illo ea assumenda 
</p>
<ul>
<li>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
</p>
</li>
<li>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta illum accusamus beatae ipsum ea 
</p>
</li>
<li>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, deserunt earum eligendi repellat explicabo repellendus architecto. 
</p>
</li>
</ul>
</Col>
</Row>
</Container>
</section>
{/* BG parallax scroll*/}
<section className="bg_parallax_scroll">
</section>
</>
)
}
export default Section4