import React from "react";
import ProjectComponent from "../components/projectComponent/projectComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import Menu from "../components/menu/menu";
import Layout from "../components/layout/layout";

//{ location }
export default function News({ location }) {
  return <Layout location={location}></Layout>;
}

