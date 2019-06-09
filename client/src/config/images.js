import scr1 from "../img/me1.jpg";
import scr2 from "../img/sender.jpg";
import scr3 from "../img/whippet.jpg";
import scr4 from "../img/whippet_logo.jpg";
import redux from "../svg/redux.svg";
import mongodb from "../svg/mongodb.svg";

const resolution = "400x300";
{
  /* TODO - add label (animated) to inform that dyno is loading couple of seconds */
}
export default {
  // if something is landing show it as first, when mobile mode - show only landing!
  bikeysh: [
    {
      link: scr2,
      label: "hjk",
      landing: true
    },
    {
      link: scr3,
      label: "fgh",
      landing: false
    },
    {
      link: scr4,
      label: "asd",
      landing: false
    }
  ],
  unsplash: [
    {
      link: `https://source.unsplash.com/random/${resolution}`,
      label: "FEATURE 1"
    },
    {
      link: `https://source.unsplash.com/${resolution}/?nature`,
      label: "FEATURE 2"
    },
    {
      link: `https://source.unsplash.com/${resolution}/?water`,
      label: "FEATURE 3"
    },
    {
      link: `https://source.unsplash.com/${resolution}/?woman`,
      label: "FEATURE 4"
    }
  ],
  logos: [
    {
      iconClass: "fab fa-sass",
      iconSvg: "",
      specificClass: "sass-icon",
      label: "sass"
    },
    {
      iconClass: "fab fa-css3-alt",
      iconSvg: "",
      specificClass: "css-icon",
      label: "css 3"
    },
    {
      iconClass: "fab fa-html5",
      iconSvg: "",
      specificClass: "html-icon",
      label: "html 5"
    },
    {
      iconClass: "fas fa-database",
      iconSvg: mongodb,
      specificClass: "mongodb-icon",
      label: "mongodb"
    },
    {
      iconClass: "fab fa-node-js",
      iconSvg: "",
      specificClass: "nodejs-icon",
      label: "nodejs"
    },
    {
      iconClass: "fab fa-react",
      iconSvg: "",
      specificClass: "react-icon",
      label: "react"
    },
    {
      iconClass: "redux",
      iconSvg: redux,
      specificClass: "redux-icon",
      label: "redux"
    },
    {
      iconClass: "fab fa-js",
      iconSvg: "",
      specificClass: "js-icon",
      label: "Our beloved"
    }
  ]
};
