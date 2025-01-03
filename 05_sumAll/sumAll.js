const sumAll = function (startNum, endNum) {
  // chcking is the are number or not
  if (!Number.isInteger(startNum) || !Number.isInteger(endNum)) return "ERROR";
  // checking are the positive
  if (startNum < 0 || endNum < 0) return "ERROR";
  // Swaping number if start number is bigger than endNumber
  //swaping the numbers
  if (startNum > endNum) {
    let temp = startNum;
    startNum = endNum;
    endNum = temp;
  }

  // NOw if all the previous condition is true returning the sum
  let sum = 0;
  for (startNum; startNum <= endNum; startNum++) {
    sum += startNum;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
