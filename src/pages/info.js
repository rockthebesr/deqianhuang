import React from "react";
import Layout from "../components/layout/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import profileYaml from "../../content/profile.yaml";
import contactYaml from "../../content/contact.yaml";
import collaboratorsYaml from "../../content/collaborators.yaml";
import {
  returnInfoPageTypeIfOnInfoPage,
  CONTACT,
  PROFILE,
  COLLABORATORS,
} from "../util/util";
import LineText from "../components/text/lineText";
import TextWithPDF from "../components/text/textWithPDF";

export default function Info({ location }) {
  let infoType = returnInfoPageTypeIfOnInfoPage(location);
  let renderedComponent = <div></div>;
  if (infoType === CONTACT) {
    renderedComponent = 
    (
      <div className="profileText">
        <LineText text={contactYaml.contact}></LineText>
      </div>
    );
  } else if (infoType === PROFILE) {
    renderedComponent = (
      <div>
        {profileYaml.map((profile) => {
          return <TextWithPDF profile={profile}></TextWithPDF>;
        })}
      </div>
    );
  } else if (infoType === COLLABORATORS) {
    renderedComponent = (
      <div>
        {collaboratorsYaml.map((profile) => {
          return <TextWithPDF profile={profile}></TextWithPDF>;
        })}
      </div>
    );
  }
  console.log(renderedComponent);
  return renderedComponent;
}
