const removeFromArray = function (arr, ...num) {
  const myArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!num.includes(arr[i])) {
      myArr.push(arr[i]);
    }
  }
  return myArr;
};

// Do not edit below this line
module.exports = removeFromArray;
