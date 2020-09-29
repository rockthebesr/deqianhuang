import React from "react";
import ImageAlbum from "../imageAlbum/imageAlbum";
import YAMLdata from "../../../content/work.yaml";
import { find } from "lodash";
import "./projectComponent.css";
import ProjectDescriptionComponent from "../projectDescriptionComponent/projectDescriptionComponent";

export default function ProjectComponent(props) {
  let name = props.name;
  let projectDetail = find(YAMLdata, { name: name });
  if (projectDetail) {
    return (
      <div>
        <div className="float-right shortDescription">{projectDetail.shortDescription}</div>
        <ImageAlbum
          imagePrefix={name}
          numberOfImages={projectDetail.numberOfImages}
        />
        <ProjectDescriptionComponent
          projectDescrption={projectDetail.descrption}
        ></ProjectDescriptionComponent>
      </div>
    );
  }
  return "";
}
