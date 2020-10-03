import React from "react";
import Menu from "../menu/menu";
import Submenu from "../menu/submenu";
import { Helmet } from "react-helmet";
import Modal from "react-bootstrap/Modal";
import { getImageDir } from "../../util/util";
import { isMobile } from "react-device-detect";
import metaYaml from "../../../content/meta.yaml";
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
      <React.Fragment>
        {this.state.isModalOpen && (
          <Modal>
            <Modal.Body>
              <img
                src={getImageDir() + "logoPopup.jpg"}
                className="w-100"
              ></img>
            </Modal.Body>
          </Modal>
        )}
        <div class="container">
          <Helmet>
            <meta charSet="utf-8" />
            <title>{metaYaml.name}</title>
          </Helmet>
          <Menu location={this.props.location}></Menu>
          <div class="row bottomPart">
            <div
              class={
                "col-10 col-md-3 offset-1 left-side text-mobile text-md-left pb-3"
              }
            >
              <div class="row">
              <Submenu location={this.props.location}></Submenu>
              </div>
            </div>
            <div className="col-md-8 right-side mt-2">
              {this.props.children}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
