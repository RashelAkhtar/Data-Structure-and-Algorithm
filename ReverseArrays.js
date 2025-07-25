// ===> Reverse a String in array.

function reverse(str) {
  if (!str || str.length < 2) {
    return "Can't reverse string!";
  }

  const backwards = [];
  const totalLength = str.length - 1;
  for (let i = totalLength; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);
  return backwards.join('');
}


function reverse2 (str) {
  return str.split('').reverse().join('');
}

const reverse3 = str => str.split('').reverse().join('');

const reverse4 = str => [...str].reverse().join('');

const string = 'Hello World!';
reverse(string);
console.log(reverse2(string));
console.log(reverse3(string));
console.log(reverse4(string));
