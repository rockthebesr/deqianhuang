import React from "react";
import { Link } from "gatsby";
import YAMLData from "../../../content/work.yaml";
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
  computeWorkUrl,
  returnInfoPageTypeIfOnInfoPage,
  returnWorkNameIfOnWorkPage,
  returnNewsNameIfOnNewsPage,
} from "../../util/util";

export default class Submenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let location = this.props.location;
    if (returnInfoPageTypeIfOnInfoPage(location) != null) {
      return this.renderInfoMenu();
    } else if (returnWorkNameIfOnWorkPage(location) != null) {
      console.log(location);
      return this.renderWorkMenu(returnWorkNameIfOnWorkPage(location));
    } else if (returnNewsNameIfOnNewsPage(location) != null) {
      return this.renderNewsMenu();
    }

    return ""
  }

  getSubMenus(location) {
    if (returnInfoPageTypeIfOnInfoPage(location) != null) {
      return this.renderInfoMenu();
    } else if (returnWorkNameIfOnWorkPage(location) != null) {
      console.log(location);
      return this.renderWorkMenu(returnWorkNameIfOnWorkPage(location));
    } else if (returnNewsNameIfOnNewsPage(location) != null) {
      return this.renderNewsMenu();
    }
  }

  renderInfoMenu(infoName) {
    return "";
  }

  renderWorkMenu(workName) {
    return YAMLData.map((projectDetail) => {
      let to = computeWorkUrl(projectDetail.name);
      let dom = (
        <div
          className={
            "col-4 col-sm-4 col-md-12 col-lg-12 " +
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
