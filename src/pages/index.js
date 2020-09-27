import React from "react";
import ProjectComponent from "../components/projectComponent/projectComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import Menu from "../components/menu/menu";
import { Location } from "@reach/router";

export default function Home({ location }) {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-4 left-side">
          <Menu location={location}></Menu>
        </div>
        <div className="col-lg-8 right-side">
          {false && (
            <ProjectComponent
              projectName="ProjectNameOne"
              projectDescription="this is a dummy project description idont know what you want blah blah blah blah blah blah blah"
              imagePrefix="project1"
              numberOfImages={2}
            />
          )}
          {false && (
            <ProjectComponent
              projectName="ProjectName2"
              projectDescription="this is another dummy project description hhhhhhhhhhhhhhahahahahhahaahhahahahahhaah"
              imagePrefix="project1"
              numberOfImages={2}
            />
          )}
        </div>
      </div>
    </div>
  );
}
