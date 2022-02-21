import React from "react";
import LineText from "./lineText";
import { getPDFDir } from "../../util/util";

export default function TextWithPDF(props) {
  let profile = props.profile;
  let profileName = "";
  if (profile.name) {
    profileName = (
      <div className="profileName">
        <LineText text={profile.name}></LineText>
        <br />
      </div>
    );
  }
  let profileText = "";
  if (profile.text) {
    profileText = (
      <div className="profileText">
        <LineText text={profile.text}></LineText>
      </div>
    );
  }
  let profilePDF = "";
  if (profile.filename) {
    profilePDF = (
      <a
        class="resume col-auto ml-auto readMoreButton "
        href={getPDFDir() + profile.filename}
        target="_blank"
      >
        CV / Resume
      </a>
    );
  }

  return (
    <div className="row mb-4">
      <div className="col-12">{profileName}</div>
      <div className="col-12">{profileText}</div>
      <div className="d-flex w-100">{profilePDF}</div>
    </div>
  );
}
