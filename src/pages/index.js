import React from "react";
import ProjectComponent from "../components/projectComponent/projectComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import Menu from "../components/menu/menu";
import { Location } from "@reach/router";


//{ location }
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({ isModalOpen: true });
  }

  render() {
    return (
      <div class="container">
        
        <div class="row">
          <div class="col-lg-4 left-side">
            <Menu location={this.props.location}></Menu>
          </div>
          <div className="col-lg-8 right-side"></div>
        </div>
      </div>
    );
  }
}
