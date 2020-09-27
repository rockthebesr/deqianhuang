import React from "react";
import "./projectDescriptionComponent.css";

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

  render() {
    let projectDescrption = this.props.projectDescrption;
    if (projectDescrption) {
      return (
        <div className="row">
          <button
            className="col-12 readMoreButton float-right"
            onClick={() => this.handleClick()}
          >
            read more
          </button>
          {this.state.isToggleOn && (
            <div className="projectDescriptionText col-12">{projectDescrption}</div>
          )}
        </div>
      );
    }
    return "";
  }
}
