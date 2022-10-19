import React, { Component } from "react";
import { Card } from "react-bootstrap";
import config from "../components/config/config";
import axios from "axios";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item_tanaman: [],
    };
  }
  componentDidMount() {
    const url = this.props.match.params.url;

    axios
      .get(config.ROOT_URL + "/detil/" + url)

      .then((result) => {
        console.log("detil>>", result);
        // const item_tanaman = result.data.data;
        this.setState({
          item_tanaman: result.data.data,
        });
      });
  }

  render() {
    console.log(this.props);
    return (
      <div className="Detil">
        <Card className="Detil1" style={{ width: "35rem" }}>
          <Card.Img
            variant="top"
            src={config.ROOT_URL + "/public/" + this.state.item_tanaman.img}
            alt="Gambar tanaman"
          />
          <Card.Body>
            {/* <Card.Title className="nama_tanaman">{this.state.item_tanaman.nama}</Card.Title> */}
            <h3>{this.state.item_tanaman.nama}</h3>
            <h4>{this.state.item_tanaman.kategori}</h4>
            <h4>Lokasi {this.state.item_tanaman.lokasi}</h4>
            <Card.Text>{this.state.item_tanaman.deskripsi}</Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>

      //   <div className="row1">
      //     <div className="detil_item">
      //       <div>
      //         <img className="imgdetil" src={config.ROOT_URL + '/public/' + this.state.item_tanaman.img}alt="Gambar tanaman" />
      //       </div>
      //     </div>
      //     <div className="deskripsi">
      //       <h2>{this.state.item_tanaman.nama}</h2>

      //       <h3>{this.state.item_tanaman.kategori}</h3>
      //       <h3>{this.state.item_tanaman.lokasi}</h3>
      //       <p>{this.state.item_tanaman.deskripsi}</p>
      //     </div>
      //   </div>
    );
  }
}

export default Detail;
