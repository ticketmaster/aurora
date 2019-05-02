const getBackgroundImage = ({ backgroundImage, deg, stops }) =>
  [
    deg && stops && `linear-gradient(${deg}, ${stops.join(", ")})`,
    backgroundImage && `url(${backgroundImage})`
  ].join(backgroundImage && deg && stops ? ", " : "");

export default getBackgroundImage;
