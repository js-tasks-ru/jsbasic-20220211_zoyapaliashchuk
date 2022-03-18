function print(text) {
  console.log(text);
}

 function isValid(name) {
  if(name == null) {
    return false;
  } 
    if(name == undefined) {
      return false;
    } 
    if(name.includes(' ')) {
      return false;
    }
    if(name.length < 4) {
      return false; 
      } else {
        return true;
      }
  }
let name = 'Marina';
console.log(isValid(name));

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
