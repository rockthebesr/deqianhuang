import React from "react";
import LineText from "./lineText";
import { getPDFDir } from "../../util/util";

export default function TextWithLink(props) {
  let profile = props.profile;
  let profileText = "";
  if (profile.text) {
    profileText = <LineText text={profile.text}></LineText>;
  }
  let profileLink = "";
  if (profile.link) {
    profileLink = (
      <a
        class="resume col-auto ml-auto readMoreButton "
        href={profile.link}
        target="_blank"
      >
        read more
      </a>
    );
  }

  return (
    <div className="textSection mb-4 row">
      <div className="col-12">{profileText}</div>
      <div className="d-flex w-100">{profileLink}</div>
    </div>
  );
}
