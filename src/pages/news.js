import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import newsYaml from "../../content/news.yaml";
import { find, toNumber } from "lodash";
import { returnNewsYearIfOnNewsPage } from "../util/util";
import TextWithLink from "../components/text/textWithLink";

export default function News({ location }) {
  let year = returnNewsYearIfOnNewsPage(location);
  let newsCollection = find(newsYaml, function (news) {
    return news.year === toNumber(year);
  });

  if (!newsCollection || !newsCollection.news) {
    return "";
  }

  return (
    <div className="">
      {newsCollection.news.map((newsDetail) => {
        return <TextWithLink profile={newsDetail}></TextWithLink>;
      })}
    </div>
  );
}

