import React from "react";
import Menu from "../menu/menu";
import Submenu from "../menu/submenu";
import { Helmet } from "react-helmet";
import Modal from "react-bootstrap/Modal";
import { getImageDir } from "../../util/util";
import "./layout.css";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: true,
    };
  }

  render() {
    setTimeout(
      function () {
        this.setState({ isModalOpen: false });
      }.bind(this),
      1500
    );

    return (
      <div class="container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>OAID STUDIO | 一德</title>
        </Helmet>
        <Modal show={this.state.isModalOpen}>
          <Modal.Body>
            <img src={getImageDir() + "logoPopup.jpg"} className="w-100"></img>
          </Modal.Body>
        </Modal>
        <Menu location={this.props.location}></Menu>
        <div class="row mt-5">
          <div class="col-lg-3 offset-1 left-side text-mobile text-md-left">
            <Submenu location={this.props.location}></Submenu>
          </div>
          <div className="col-lg-8 right-side">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
