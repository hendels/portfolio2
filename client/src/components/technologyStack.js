import React from "react";
import CarouselStack from "../components/carouselStack";

const TechnologyStack = props => {
  const {
    mongodb,
    sass,
    javascript,
    css,
    react,
    redux,
    RWD,
    heroku,
    bootstrap,
    materialUi
  } = props.stack;
  return <CarouselStack />;
};

export default TechnologyStack;
