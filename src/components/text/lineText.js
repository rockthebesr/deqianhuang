import React from "react";
import { isEmpty } from "lodash";

export default function LineText(props) {
  if (isEmpty(props.text)) {
    return "";
  }
  return (
    <React.Fragment>
      {props.text.split("\n").map((i, key) => {
        return (
          <React.Fragment>
            {i}
            {i === "" && (
              <React.Fragment>
                <br /> <br />
              </React.Fragment>
            )}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}
