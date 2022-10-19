// import React, { Component } from "react";
// import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemTanaman = (props) => {
  return (
    <div className="item_tanaman">
      <Card className="item" style={{ width: "16rem" }}>
        <Card.Img variant="top" src={props.image} alt={props.nama} />
        <Card.Body>
          <Card.Title>
            <h3>{props.nama}</h3>
          </Card.Title>
          <Button variant="primary">
            <Link to={"/item/" + props.action}>Detil</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );

  // <div className={Styles.item_tanaman}>
  //   <div>
  //     <img src={props.image} alt={props.nama} />
  //     <h2>{props.nama}</h2>
  //     <h3>{props.kategori}</h3>
  //     <Link to={"/item/" + props.action}>Detil</Link>

  //   </div>
  // </div>
};
export default ItemTanaman;
