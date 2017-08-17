function addTwo (numOne, numTwo) {
  return numOne + numTwo;
}

console.log(addTwo(138, 10));


function bigSmall (numOne, numTwo) {
  if (numOne > numTwo) {
    return "The first number was bigger!";
  } else if (numOne < numTwo) {
    return "The second number was bigger!";
  } else {
    return "The numbers are the same!";
  }
}

console.log(bigSmall(138, 10));

function oneFour (array) {
  return array[0] + array[3];
}
console.log(oneFour([1, 2 ,3 ,4 ,5, 6]));

function twice (array, num) {
  for (var i = num; i < array.length; i++) {
     blah += array[i];
  }
  return blah;
}
console.log(['hey', 'hi', 'howdy', 'bye'], 1);
