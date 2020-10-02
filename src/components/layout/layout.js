import React from "react";
import Menu from "../menu/menu";
import Submenu from "../menu/submenu";
import { Helmet } from "react-helmet";

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
        <Helmet>
          <meta charSet="utf-8" />
          <title>OAID Studio | 一德</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
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
