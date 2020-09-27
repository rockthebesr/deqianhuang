import React from "react";
import ProjectComponent from "../components/projectComponent/projectComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import Menu from "../components/menu/menu";

export default function Projects({ location }) {
  let projectName = getQueryVariable(location.search, "name");
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-4 left-side">
          <Menu location={location}></Menu>
        </div>
        <div className="col-lg-8 right-side">
          <ProjectComponent projectName={projectName} />
        </div>
      </div>
    </div>
  );
}

export function getQueryVariable(query, variable) {
  query = query.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  console.log("Query variable %s not found", variable);
}
