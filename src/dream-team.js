

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {

  if (Array.isArray(members) == false) {
    return false
  }

  let element = []

  members.map((i => {

    if (typeof i == "string") {
      let trim = i.trim();
      element.push(trim.toUpperCase()[0])
      element.sort()
    }

  }))
  let result = element.join('');
  return result
}
module.exports = {
  createDreamTeam
};
