/**
 * Generates a randomized color
 * @returns Randomized color ready for use on styles/css
 */
export function getRandomColor() {
  var color = Math.floor(0x1000000 * Math.random()).toString(16);
  return '#' + ('000000' + color).slice(-6);
}
