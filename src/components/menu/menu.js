import React from "react";
import { Link } from "gatsby";
import YAMLData from "../../../content/work.yaml";
import { getQueryVariable } from "../../pages/work";
import "./menu.css";
import Modal from "react-bootstrap/Modal";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: !localStorage.isModalOpen,
    };
  }

  render() {
    let name = getQueryVariable(this.props.location.search, "name");
    let projectButtons = YAMLData.map((projectDetail) => {
      let to = "/work/?name=" + projectDetail.name;
      let dom = (
        <div
          className={
            "col-4 col-sm-4 col-md-12 col-lg-12 " +
            (projectDetail.name == name ? "selected" : "")
          }
        >
          <Link to={to}>{projectDetail.title}</Link>
        </div>
      );
      return dom;
    });

    setTimeout(
      function () {
        localStorage.isModalOpen = true;
        this.setState({ isModalOpen: false });
      }.bind(this),
      2000
    );

    return (
      <div class="row justify-content-center">
        <Modal show={this.state.isModalOpen}>
          <Modal.Body>
            <img src="/logo.jpg" className="w-100"></img>
          </Modal.Body>
        </Modal>
        <div className="col-12 d-flex justify-content-center justify-content-md-start mb-3">
          <Link to="/" activeClassName="selected">
            Oaid Studio
          </Link>
        </div>
        <div className="col-12 d-flex justify-content-center justify-content-md-start mb-3">
          <Link to="/info/" activeClassName="selected">
            Info
          </Link>
        </div>
        {projectButtons}
      </div>
    );
  }
}
