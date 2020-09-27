import React from "react";
import { Link } from "gatsby";
import JSONData from "../../../content/projectDetails.json";
import { getQueryVariable } from "../../pages/projects";
import "./menu.css";

export default function Menu(props) {
  console.log(props.location);
  let projectName = getQueryVariable(props.location.search, "name");
  let projectButtons = JSONData.map((projectDetail) => {
    let to = "/projects?name=" + projectDetail.projectName;
    let dom = (
      <div
        className={
          "col-4 col-sm-4 col-md-12 col-lg-12 " +
          (projectDetail.projectName == projectName ? "selected" : "")
        }
      >
        <Link to={to}>{projectDetail.title}</Link>
      </div>
    );
    return dom;
  });

  let pathname = props.location.pathname;
  return (
    <div class="row justify-content-center">
      <div className="col-sm-4 col-md-12 col-lg-12">
        <Link to="/" activeClassName="selected">De Studio</Link>
      </div>
      <div className="col-sm-4 col-md-12 col-lg-12">
        <Link to="/info/" activeClassName="selected">
          Info
        </Link>
      </div>
      {projectButtons}
    </div>
  );
}
