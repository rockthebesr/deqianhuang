import React from "react";
import Layout from "../components/layout/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import profileYaml from "../../content/profile.yaml";
import contactYaml from "../../content/contact.yaml";
import { returnInfoPageTypeIfOnInfoPage, CONTACT, PROFILE } from "../util/util";

export default function Info({ location }) {
  let infoType = returnInfoPageTypeIfOnInfoPage(location);
  let renderedText = "";
  if (infoType === CONTACT) {
    renderedText = contactYaml.contact;
  } else if (infoType === PROFILE) {
    renderedText = profileYaml.profile;
  }
  console.log(renderedText);
  return (
    <React.Fragment>
      {renderedText.split("\n").map((i, key) => {
        return (
          <React.Fragment>
            {i}
            <br />
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}
