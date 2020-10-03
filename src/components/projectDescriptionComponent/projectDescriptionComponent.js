import React from "react";
import "./projectDescriptionComponent.css";
import LineText from "../text/lineText";

export default class ProjectDescriptionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  componentDidUpdate(prevProps) {
    if (this.props.projectDescrption !== prevProps.projectDescrption) {
      this.setState((state) => ({
        isToggleOn: false,
      }));
    }
  }

  render() {
    let projectDescrption = this.props.projectDescrption;
    if (projectDescrption) {
      return (
        <div className="row">
          <div
            className="col-12 readMoreButton text-right mt-3"
            onClick={() => this.handleClick()}
          >
            {!this.state.isToggleOn ? "read more" : "hide"}
          </div>
          {this.state.isToggleOn && (
            <div className="projectDescriptionText col-12 mt-2">
              <LineText text={projectDescrption}></LineText>;
            </div>
          )}
        </div>
      );
    }
    return "";
  }
}
