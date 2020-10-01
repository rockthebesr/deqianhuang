import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import Layout from "../components/layout/layout";
import { navigate } from "gatsby";
import { computeWorkUrl } from "../util/util";
import workYaml from "../../content/work.yaml";

//{ location }
export default function Home({ location }) {
  navigate(computeWorkUrl(workYaml[0].name));
  return <Layout location={location}></Layout>;
}
