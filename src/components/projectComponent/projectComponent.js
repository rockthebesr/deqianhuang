import React from "react";
import ImageAlbum from "../imageAlbum/imageAlbum";
import YAMLdata from "../../../content/project.yaml";
import { find } from "lodash";
import "./projectComponent.css";
import ProjectDescriptionComponent from "../projectDescriptionComponent/projectDescriptionComponent";

/* ATTENTION: You need to specify the following:
    projectName: this is name of the project
    projectDescription: a text decription of the project
    imageFolder: the folder this project's related images reside in
*/
export default function ProjectComponent(props) {
  let projectName = props.projectName;
  let projectDetail = find(YAMLdata, { projectName: projectName });
  if (projectDetail) {
    return (
      <div>
        <div className="float-right">{projectDetail.shortDescription}</div>
        <ImageAlbum
          imagePrefix={projectName}
          numberOfImages={projectDetail.numberOfImages}
        />
        <ProjectDescriptionComponent projectDescrption={projectDetail.projectDescrption}></ProjectDescriptionComponent>
      </div>
    );
  }
  return "";
}
