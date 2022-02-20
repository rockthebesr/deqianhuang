import React from "react";
import { Link } from "gatsby";
import "./menu.css";
import metaYaml from "../../../content/meta.yaml";
import workYaml from "../../../content/work.yaml";
import newsYaml from "../../../content/news.yaml";

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
  computeInfoUrl,
  returnInfoPageTypeIfOnInfoPage,
  returnWorkNameIfOnWorkPage,
  returnNewsYearIfOnNewsPage,
  computeNewsUrl,
} from "../../util/util";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let firstName = metaYaml.name.split(" | ")[0];

    let lastName = metaYaml.name.split(" | ")[1];
    return (
      <div class="row justify-content-between">
        <div className="col-6 text-mobile text-md-left">
          <div className="row">
            <div className="col-2 text-mobile text-md-left">
            </div>
            <div className="col-10 text-mobile text-md-left">
              <Link to={"/" + INFO + "/?" + PROFILE} className="studioName">
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
    let menuButtonNamesList = [
      { name: INFO, to: computeInfoUrl(PROFILE) },
      { name: WORK, to: computeWorkUrl(workYaml[0].name) },
      { name: NEWS, to: computeNewsUrl(newsYaml[0].year) },
    ];
    let menuButtons = menuButtonNamesList.map((menuName) => {
      let selected = location.pathname.indexOf(menuName.name) >= 0;
      return (
        <div
          className={
            "col-auto text-mobile text-md-right topMenuButton " + (selected ? "selected" : "")
          }
        >
          <Link to={menuName.to}>{menuName.name}</Link>
        </div>
      );
    });
    return <React.Fragment>{menuButtons}</React.Fragment>;
  }
}
