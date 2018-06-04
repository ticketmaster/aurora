/**
 * getRelByTarget overrides the anchor tag's rel attribute to "noopener" when the target attribute equals "_blank"
 * Prevents a security vulnerability and improves performance: https://developers.google.com/web/tools/lighthouse/audits/noopener
 * @param { String } target - Specifies where to open the linked document (e.g. _blank, _self, _parent, _top, framename)
 * @param { String } rel - Specifies the relationship between the current document and the linked document (e.g. alternate, author, noopener, etc.)
 * @returns { String } rel
 */
const getRelByTarget = (target, rel) =>
  target === "_blank" ? "noopener" : rel;

export default getRelByTarget;
