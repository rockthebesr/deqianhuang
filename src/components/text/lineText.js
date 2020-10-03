import React from "react";

export default function LineText(props) {
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
