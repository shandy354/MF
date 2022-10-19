import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import config from "../components/config/config";
import axios from "axios";
import ItemTanaman from "../components/styles/item_tanaman";

export default class DaftarTanaman extends Component {
  state = {
    item: [],
  };
  getApi = () => {
    axios.get(config.ROOT_URL + "/tanaman/item").then((result) => {
      console.log("produk tnaman >>", result);

      this.setState({
        item: result.data.data,
      });
    });
  };
  componentDidMount() {
    this.getApi();
  }

  render() {
    return (
      <div>
        {/* <h2> Daftar tanaman</h2> */}
        <div className="wrapper min-vh-100 w-100">
          <Container>
            <Row>
              <Col className="text-white text-center">
                <h1>
                  Welcome to the database of medical plants and rare in Kediri
                  Ragency
                </h1>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="cards">
          <div className="input">
            <input type="search" placeholder="Cari Tanaman" />
            <button>Cari</button>
          </div>
        </div>

        <div className="Card1">
          {this.state.item.map((item) => (
            <ItemTanaman
              key={item.id}
              image={config.ROOT_URL + "/public/" + item.img}
              nama={item.nama}
              //   kategori={item.kategori}
              action={item.url}
            />
          ))}
        </div>
      </div>
    );
  }
}

// import React from "react";

// const Tentang = () =>{
// return(
//     <div>
//         dghj
//     </div>
// );
// };
// export default Tentang;
