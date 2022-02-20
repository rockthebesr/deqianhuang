import React from "react";
import { isEmpty } from "lodash";

export default function LineText(props) {
  if (isEmpty(props.text)) {
    return "";
  }
  return (
    <React.Fragment>
      {/* {props.text.split("<br>").map((i, key) => {
        return (
          <React.Fragment>
            <div dangerouslySetInnerHTML={createMarkup(i)}></div>
            {i === "" && (
              <React.Fragment>
                <br />
              </React.Fragment>
            )}
          </React.Fragment>
        );
      })} */}

          <React.Fragment>
            <div dangerouslySetInnerHTML={createMarkup(props.text)}></div>
          </React.Fragment>
    </React.Fragment>
  );
}

function createMarkup(strng) {
  return {__html: strng};
}
