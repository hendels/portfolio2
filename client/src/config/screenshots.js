import scr1 from "../img/me1.jpg";
import scr2 from "../img/sender.jpg";
import scr3 from "../img/whippet.jpg";
import scr4 from "../img/whippet_logo.jpg";
import sass from "../svg/resized/sass.png";
import css from "../svg/resized/css.png";
import mongodb from "../svg/resized/mongodb.png";
import nodejs from "../svg/resized/nodejs.png";
import react from "../svg/resized/react.png";
import redux from "../svg/resized/redux.png";
import html from "../svg/resized/html.png";
import js from "../svg/resized/js.png";

const resolution = "400x300";
{
  /* TODO - add label (animated) to inform that dyno is loading couple of seconds */
}
export default {
  bikeysh: [
    {
      link: scr2,
      label: "hjk"
    },
    {
      link: scr3,
      label: "fgh"
    },
    {
      link: scr4,
      label: "asd"
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
      link: sass,
      label: "sass"
    },
    {
      link: css,
      label: "css 3"
    },
    {
      link: html,
      label: "html 5"
    },
    {
      link: mongodb,
      label: "mongodb"
    },
    {
      link: nodejs,
      label: "nodejs"
    },
    {
      link: react,
      label: "react"
    },
    {
      link: redux,
      label: "redux"
    },
    {
      link: js,
      label: "Our beloved"
    }
  ]
};
