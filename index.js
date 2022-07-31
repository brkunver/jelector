/**
 * Returns selected html element by id
 *
 * 
 * @param {string} id ID of html element.
 * 
 * @return {Object} html element with given id.
 */
function j(id) {
  if (typeof id == "string") {
    if (id.length > 0) {
      return document.getElementById(id);
    } else {
      throw new Error("please enter a valid id");
    }
  } else {
    throw new Error("please enter a valid id");
  }
}

module.exports = j
