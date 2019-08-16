const sluggify = (text = "") => {
  if (typeof text !== "string") {
    return "";
  }
  return text.replace(/\s/g, "").toLowerCase();
};

export default sluggify;
