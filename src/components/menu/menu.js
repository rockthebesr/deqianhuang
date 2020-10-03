import React from "react";
import { Link } from "gatsby";
import "./menu.css";
import metaYaml from "../../../content/meta.yaml";

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
  }

  render() {
    return (
      <div class="row justify-content-center">
        <div className="col-6 text-mobile text-md-left">
          <div className="row">
            <div className="col-2 text-mobile text-md-left">
              <Link to={"/" + INFO}>
                <img src={getImageDir() + "logo.jpg"} className="logo"></img>
              </Link>
            </div>
            <div className="col-10 text-mobile text-md-left">
              <Link to={"/" + INFO} className="studioName">
                {metaYaml.name}
              </Link>
            </div>
          </div>
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
