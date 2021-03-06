import { get, contain } from "lodash";

export const WORK = "work";
export const WORK_NAME = "workname";
export const INFO = "info";
export const CONTACT = "contact";
export const PROFILE = "profile";
export const COLLABORATORS = "collaborators";
export const NEWS = "news";
export const YEAR = "year";

export const IMAGE_DIR = "/";
export const PDF_DIR = "/pdf/";

export function getImageDir() {
  return IMAGE_DIR;
}

export function getPDFDir() {
  return PDF_DIR;
}

export function getQueryVariable(query, variable) {
  query = query.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  console.log("Query variable %s not found", variable);
}

export function returnWorkNameIfOnWorkPage(location) {
  if (location.pathname.indexOf(WORK) >= 0) {
    return getQueryVariable(location.search, WORK_NAME) || "";
  } else {
    return null;
  }
}

export function isOnInfoPage(location) {
  return location.pathname.indexOf(INFO) >= 0;
}

export function returnInfoPageTypeIfOnInfoPage(location) {
  let search = location.search;
  if (!search) {
    return null;
  } else {
    search = search.substring(1);
    return search;
  }
}

export function returnNewsYearIfOnNewsPage(location) {
  if (location.pathname.indexOf(NEWS) >= 0) {
    return getQueryVariable(location.search, YEAR) || "";
  } else {
    return null;
  }
}

export function computeWorkUrl(workname) {
  return "/" + WORK + "/" + "?" + WORK_NAME + "=" + workname;
}
export function computeInfoUrl(infoName) {
  return "/" + INFO + "/" + "?" + infoName;
}

export function computeNewsUrl(newsYear) {
  return "/" + NEWS + "/" + "?" + YEAR + "=" + newsYear;
}
