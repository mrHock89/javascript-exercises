const reverseString = function (myString) {
  let mySplitString = myString.split("");
  const reverseArr = mySplitString.reverse();
  return reverseArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
