import React from "react";
import { isEmpty } from "lodash";

export default function LineText(props) {
  if (isEmpty(props.text)) {
    return "";
  }
  return (
    <React.Fragment>
          <React.Fragment>
            <div dangerouslySetInnerHTML={createMarkup(props.text)}></div>
          </React.Fragment>
    </React.Fragment>
  );
}

function createMarkup(strng) {
  return {__html: strng};
}
