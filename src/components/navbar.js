// import React from "react";
import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Homepage from "./homepage";
// import Tanaman from "./daftar.tanaman"
import Tentang from "./tentang";
import DaftarTanaman from "./daftar_tanaman";
import Detail from "./detil_tanaman";
// import Footer1 from "./components/footer"

export default class Navbar1 extends Component {
  render() {
    return (
      <Router>
        <div className="sticky-top">
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home" className="fw-bold fs-4">
                Database Tanaman
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link as={Link} to="/" className="mx-3">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/daftartanaman" className="mx-3">
                    Daftar Tanaman
                  </Nav.Link>
                  <Nav.Link as={Link} to="/tentang" className="mx-3">
                    Tentang
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <div>
          <Switch>
            <Route path="/Tentang">
              <Tentang />
            </Route>
            <Route path="/" exact component={Homepage} />
            <Route path="/daftartanaman">
              <DaftarTanaman />
            </Route>
            <Route path="/item/:url" component={Detail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// const Navbar1 = () =>{
// return(
//     <div className="sticky-top">
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home" className="fw-bold fs-4">Database Tanaman </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link href="/" className="mx-3">Home</Nav.Link>
//             <Nav.Link href="/DaftarTanaman" className="mx-3">Daftar Tanaman</Nav.Link>
//             <Nav.Link href="/Tentang" className="mx-3">Tentang</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     </div>
// );
// };
// export default Navbar1;
