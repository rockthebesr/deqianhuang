import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import Layout from "../components/layout/layout";

//{ location }
export default function Home({ location }) {
  return <Layout location={location}></Layout>;
}

