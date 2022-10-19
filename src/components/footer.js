
import React, { Component } from 'react'
import { Container, Row, Col} from "react-bootstrap"

export default class Footer extends Component {
    render() {
        return (
            <div className= "footer pb-3 pt-4">
        <Container>
            <Row>
                <Col>
                <h4 calssName="fw-bold tex-white">@CopyRight2025</h4>
                </Col>
            </Row>
        </Container>
        
    </div>
        )
    }
}

// import React from "react";
// import { Container, Row, Col} from "react-bootstrap"

// const Footer = () =>{
// return(
//     <div className= "footer pb-3 pt-4">
//         <Container>
//             <Row>
//                 <Col>
//                 <h4 calssName="fw-bold tex-white">@CopyRight2025</h4>
//                 </Col>
//             </Row>
//         </Container>
        
//     </div>
// );
// };
// export default Footer;