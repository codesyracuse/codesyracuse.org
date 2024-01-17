/*
 * These fields should be queried for any "block content"
 * (block content fields are arrays and should be referenced with a []
 * at the end.
 *
 * For example:
 * ```
 * // ...
 *   poem[]{
 *     ${blockContentFields}
 *   },
 * // ...
 * ```
 */
export const blockContentFields = `
  ...,
  _type == "image" => {
    ...,
    asset->
  },
  markDefs[]{
  ...,
  _type == "internalLink" => {
    "targetObject": @.reference->
  },
}`;
