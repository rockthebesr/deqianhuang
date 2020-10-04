import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import newsYaml from "../../content/news.yaml";
import { find, toNumber } from "lodash";
import { returnNewsYearIfOnNewsPage } from "../util/util";
import TextWithLink from "../components/text/textWithLink";

export default function News({ location }) {
  console.log(newsYaml);
  let year = returnNewsYearIfOnNewsPage(location);
  let newsCollection = find(newsYaml, function (news) {
    return news.year === toNumber(year);
  });
  if (!newsCollection) {
    return "";
  }

  return newsCollection.news.map((newsDetail) => {
    return <TextWithLink profile={newsDetail}></TextWithLink>;
  });
}
