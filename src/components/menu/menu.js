import React from "react";
import { Link } from "gatsby";
import "./menu.css";
import Modal from "react-bootstrap/Modal";
import {
  getImageDir,
  WORK,
  WORK_NAME,
  NEWS,
  NEWS_NAME,
  INFO,
  CONTACT,
  PROFILE,
  computeWorkUrl,
  returnInfoPageTypeIfOnInfoPage,
  returnWorkNameIfOnWorkPage,
  returnNewsNameIfOnNewsPage,
} from "../../util/util";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen:
        typeof window !== "undefined" ? !localStorage.isModalOpen : false,
    };
  }

  render() {
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
            <img src={getImageDir() + "/logo.jpg"} className="w-100"></img>
          </Modal.Body>
        </Modal>
        <div className="col-6 text-mobile text-md-left">
          <Link to={"/" + INFO}>Oaid Studio</Link>
        </div>
        {this.createMenuButtons(this.props.location)}
      </div>
    );
  }

  createMenuButtons(location) {
    let menuButtonNamesList = [INFO, WORK, NEWS];
    let menuButtons = menuButtonNamesList.map((menuName) => {
      let selected = location.pathname.indexOf(menuName) >= 0;
      return (
        <div
          className={
            "col-2 text-mobile text-md-right " + (selected ? "selected" : "")
          }
        >
          <Link to={"/" + menuName + "/"}>{menuName}</Link>
        </div>
      );
    });
    return <React.Fragment>{menuButtons}</React.Fragment>;
  }
}
