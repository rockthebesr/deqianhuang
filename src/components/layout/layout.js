import React from "react";
import Menu from "../menu/menu";
import Submenu from "../menu/submenu";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen:
        typeof window !== "undefined" ? !localStorage.isModalOpen : false,
    };
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <Menu location={this.props.location}></Menu>
        </div>
        <div class="row">
          <div class="col-lg-4 left-side">
            <Submenu location={this.props.location}></Submenu>
          </div>
          <div className="col-lg-8 right-side">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
