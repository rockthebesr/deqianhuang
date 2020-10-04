import React from "react";
import LineText from "./lineText";
import { getPDFDir } from "../../util/util";

export default function TextWithPDF(props) {
  let profile = props.profile;
  let profileName = "";
  if (profile.name) {
    profileName = (
      <React.Fragment>
        <LineText text={profile.name}></LineText>
        <br />
      </React.Fragment>
    );
  }
  let profileText = "";
  if (profile.text) {
    profileText = <LineText text={profile.text}></LineText>;
  }
  let profilePDF = "";
  if (profile.filename) {
    profilePDF = (
      <a
        class="resume col-1 offset-10 readMoreButton "
        href={getPDFDir() + profile.filename}
        target="_blank"
      >
        CV / Resume
      </a>
    );
  }

  return (
    <div className="textSection mb-4">
      {profileName}
      {profileText}
      {profilePDF}
    </div>
  );
}
