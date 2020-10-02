import React from "react";
import ProjectComponent from "../components/projectComponent/projectComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import Layout from "../components/layout/layout";
import { returnWorkNameIfOnWorkPage } from "../util/util";

export default function Work({ location }) {
  let name = returnWorkNameIfOnWorkPage(location);
  console.log(name);
  return <ProjectComponent name={name} />;
}
