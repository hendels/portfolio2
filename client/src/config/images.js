import redux from "../svg/redux.svg";
import mongodb from "../svg/mongodb.svg";
import bikeysh1 from "../img/bikeysh/resized/best_offers.png";
import bikeysh2 from "../img/bikeysh/resized/frames.png";
import bikeysh3 from "../img/bikeysh/resized/frames_modal.png";
import bikeysh4 from "../img/bikeysh/resized/favorites.png";
import bikeysh5 from "../img/bikeysh/resized/tags.png";
import bikeysh6 from "../img/bikeysh/resized/search.png";
import bikeysh7 from "../img/bikeysh/resized/favorite_view.png";
import bikeysh8 from "../img/bikeysh/resized/rwd.png";

import gmap1 from "../img/google-maps/filled.png";
import gmap2 from "../img/google-maps/search.png";
import gmap3 from "../img/google-maps/pin.png";
import gmap4 from "../img/google-maps/handling.png";

import portfolio1 from "../img/portfolio/home.png";

const resolutionUnsplash = "400x300";
{
  /* TODO - add label (animated) to inform that dyno is loading couple of seconds */
}
export default {
  // if something is landing show it as first, when mobile mode - show only landing!
  bikeysh: [
    {
      link: bikeysh8,
      label: "It's fully responsive.",
      landing: false
    },
    {
      link: bikeysh1,
      label:
        "Based on historical entries, app scores each offer by given parameters and shows the best ones.",
      landing: true
    },
    {
      link: bikeysh2,
      label: "Each category has dedicated view.",
      landing: false
    },
    {
      link: bikeysh3,
      label:
        "When you click on any offer it'll show modal with nice details about statistics and parameters.",
      landing: false
    },
    {
      link: bikeysh4,
      label: "You can add offers to favorites.",
      landing: false
    },
    {
      link: bikeysh7,
      label: "You can show your favorites on dedicated view.",
      landing: false
    },
    {
      link: bikeysh5,
      label:
        "App automatically add tags to offers - this the key to recognize collected data. Admin can manually tweak tags by drag & drop or add / delete them.",
      landing: false
    },
    {
      link: bikeysh6,
      label: "There is search feature.",
      landing: false
    }
  ],
  googleMap: [
    {
      link: gmap1,
      label:
        "Point & click on map multiple times and add selected places to list through ADD TO LIST BUTTON.",
      landing: false
    },
    {
      link: gmap2,
      label: "You can search your place through bar.",
      landing: false
    },
    {
      link: gmap3,
      label:
        "Navigation through places on map is possible by clicking the location PIN on list.",
      landing: false
    },
    {
      link: gmap4,
      label: "Messages from app has been wraped in Snackbars.",
      landing: false
    }
  ],
  portfolio: [
    {
      link: portfolio1,
      label: "Feel free to look around this site :)",
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
      id: "redux",
      iconClass: "redux",
      iconSvg: redux,
      specificClass: "redux-icon",
      label: "redux"
    },
    {
      id: "bootstrap",
      iconClass: "fab fa-bootstrap",
      iconSvg: "",
      specificClass: "bootstrap-icon",
      label: "bootstrap 4"
    },
    {
      id: "materialui",
      iconClass: "fas fa-spray-can",
      iconSvg: "",
      specificClass: "material-ui-icon",
      label: "material-ui"
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
