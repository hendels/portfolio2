import redux from "../svg/redux.svg";
import mongodb from "../svg/mongodb.svg";
import bikeysh1 from "../img/bikeysh/best_offers.PNG";
import bikeysh2 from "../img/bikeysh/frames.PNG";
import bikeysh3 from "../img/bikeysh/frames_modal.PNG";
const resolutionUnsplash = "400x300";
{
  /* TODO - add label (animated) to inform that dyno is loading couple of seconds */
}
export default {
  // if something is landing show it as first, when mobile mode - show only landing!
  bikeysh: [
    {
      link: bikeysh1,
      label: "It's responsive.",
      landing: true
    },
    {
      link: bikeysh2,
      label: "It's responsive.",
      landing: false
    },
    {
      link: bikeysh3,
      label: "It's responsive.",
      landing: false
    }
  ],
  unsplash: [
    {
      link: `https://source.unsplash.com/random/${resolutionUnsplash}`,
      label: "FEATURE 1"
    },
    {
      link: `https://source.unsplash.com/${resolutionUnsplash}/?nature`,
      label: "FEATURE 2"
    },
    {
      link: `https://source.unsplash.com/${resolutionUnsplash}/?water`,
      label: "FEATURE 3"
    },
    {
      link: `https://source.unsplash.com/${resolutionUnsplash}/?woman`,
      label: "FEATURE 4"
    }
  ],
  logos: [
    {
      id: "sass",
      iconClass: "fab fa-sass",
      iconSvg: "",
      specificClass: "sass-icon",
      label: "sass"
    },
    {
      id: "css",
      iconClass: "fab fa-css3-alt",
      iconSvg: "",
      specificClass: "css-icon",
      label: "css 3"
    },
    {
      id: "html",
      iconClass: "fab fa-html5",
      iconSvg: "",
      specificClass: "html-icon",
      label: "html 5"
    },
    {
      id: "mongodb",
      iconClass: "fas fa-database",
      iconSvg: mongodb,
      specificClass: "mongodb-icon",
      label: "mongodb"
    },
    {
      id: "nodejs",
      iconClass: "fab fa-node-js",
      iconSvg: "",
      specificClass: "nodejs-icon",
      label: "nodejs"
    },
    {
      id: "react",
      iconClass: "fab fa-react",
      iconSvg: "",
      specificClass: "react-icon",
      label: "react"
    },
    {
      id: "sass",
      iconClass: "redux",
      iconSvg: redux,
      specificClass: "redux-icon",
      label: "redux"
    },
    {
      id: "bootstrap",
      iconClass: "bootstrap",
      iconSvg: "",
      specificClass: "bootstrap-icon",
      label: "redux"
    },
    {
      id: "materialui",
      iconClass: "material-ui",
      iconSvg: "",
      specificClass: "material-ui-icon",
      label: "redux"
    },
    {
      id: "js",
      iconClass: "fab fa-js",
      iconSvg: "",
      specificClass: "js-icon",
      label: "Our beloved"
    }
  ]
};
