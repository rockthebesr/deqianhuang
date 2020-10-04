import React from "react";
import { Link } from "gatsby";
import workYaml from "../../../content/work.yaml";
import { getQueryVariable } from "../../util/util";
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
  COLLABORATORS,
  computeWorkUrl,
  isOnInfoPage,
  returnInfoPageTypeIfOnInfoPage,
  returnWorkNameIfOnWorkPage,
  returnNewsNameIfOnNewsPage,
  computeInfoUrl,
} from "../../util/util";

export default class Submenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let location = this.props.location;

    if (isOnInfoPage(location)) {
      return this.renderInfoMenu(returnInfoPageTypeIfOnInfoPage(location));
    } else if (returnWorkNameIfOnWorkPage(location) != null) {
      return this.renderWorkMenu(returnWorkNameIfOnWorkPage(location));
    } else if (returnNewsNameIfOnNewsPage(location) != null) {
      return this.renderNewsMenu();
    }

    return "";
  }

  renderInfoMenu(selectedType) {
    let infoNames = [PROFILE, COLLABORATORS, CONTACT];
    return infoNames.map((infoName) => {
      let to = computeInfoUrl(infoName);
      let dom = (
        <div
          className={
            "col-md-12 col-auto " + (selectedType == infoName ? "selected" : "")
          }
        >
          <Link to={to}>{infoName}</Link>
        </div>
      );
      return dom;
    });
  }

  renderWorkMenu(workName) {
    return workYaml.map((projectDetail) => {
      let to = computeWorkUrl(projectDetail.name);
      let dom = (
        <div
          className={
            "col-md-12 col-auto workMenuButton " +
            (projectDetail.name == workName ? "selected" : "")
          }
        >
          <Link to={to}>{projectDetail.title}</Link>
        </div>
      );
      return dom;
    });
  }

  renderNewsMenu(newsName) {
    return "";
  }
}
