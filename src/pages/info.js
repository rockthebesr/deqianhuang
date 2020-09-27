import React from "react";
import ProjectComponent from "../components/projectComponent/projectComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "../components/menu/menu";

export default function Info({ location }) {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-4 left-side">
          <Menu location={location}></Menu>
        </div>
        <div className="col-lg-8 right-side">
          <div>
            This is just example text. You should fill out your information
            here. This is just example text. You should fill out your
            information here. This is just example text. You should fill out
            your information here. This is just example text. You should fill
            out your information here. This is just example text. You should
            fill out your information here. This is just example text. You
            should fill out your information here. This is just example text.
            You should fill out your information here. This is just example
            text. You should fill out your information here. This is just
            example text. You should fill out your information here. This is
            just example text. You should fill out your information here. This
            is just example text. You should fill out your information here.
            This is just example text. You should fill out your information
            here. This is just example text. You should fill out your
            information here. This is just example text. You should fill out
            your information here. This is just example text. You should fill
            out your information here. This is just example text. You should
            fill out your information here. This is just example text. You
            should fill out your information here. This is just example text.
            You should fill out your information here. This is just example
            text. You should fill out your information here.
            <br />
            <br />
            This is an example of line break
            <br />
            <br />
            This is just example text. You should fill out your information
            here. This is just example text. You should fill out your
            information here. This is just example text. You should fill out
            your information here. This is just example text. You should fill
            out your information here. This is just example text. You should
            fill out your information here. This is just example text. You
            should fill out your information here. This is just example text.
            You should fill out your information here. This is just example
            text. You should fill out your information here.
          </div>
        </div>
      </div>
    </div>
  );
}
