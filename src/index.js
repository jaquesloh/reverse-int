module.exports = function reverse(n) {
    let result = Math.abs(n).toString();
    return +result.split("").reverse().join("");
};
