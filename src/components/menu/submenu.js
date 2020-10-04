import React from "react";
import { Link } from "gatsby";
import workYaml from "../../../content/work.yaml";
import newsYaml from "../../../content/news.yaml";
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
  returnNewsYearIfOnNewsPage,
  computeInfoUrl,
  computeNewsUrl,
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
    } else if (returnNewsYearIfOnNewsPage(location) != null) {
      return this.renderNewsMenu(returnNewsYearIfOnNewsPage(location));
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

  renderNewsMenu(newsYear) {
    return newsYaml.map((newsDetail) => {
      let to = computeNewsUrl(newsDetail.year);
      return (
        <div
          className={
            "col-md-12 col-auto workMenuButton " +
            (newsDetail.year == newsYear ? "selected" : "")
          }
        >
          <Link to={to}>{newsDetail.year}</Link>
        </div>
      );
    });
  }
}
