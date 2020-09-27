import React from "react"
import ImageAlbum from "../imageAlbum/imageAlbum"
import JSONData from "../../../content/projectDetails.json"
import { find } from "lodash"

/* ATTENTION: You need to specify the following:
    projectName: this is name of the project
    projectDescription: a text decription of the project
    imageFolder: the folder this project's related images reside in
*/
export default function ProjectComponent(props) {
  let projectName = props.projectName;
  let projectDetail = find(JSONData, {'projectName': projectName});
  return (
    <div>
      <p>{projectDetail.shortDescription}</p>
      <ImageAlbum imagePrefix={projectName} numberOfImages={projectDetail.numberOfImages}/>
    </div>
  )
}
