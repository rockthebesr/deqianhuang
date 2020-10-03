import React from "react";

export default function LineText(props) {
  return (
    <React.Fragment>
      {props.text.split("\n").map((i, key) => {
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
