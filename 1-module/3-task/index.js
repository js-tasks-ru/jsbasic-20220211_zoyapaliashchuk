function ucFirst(str) {
  if (str == null) {
    return true;
   } 
   if(str == '') {
      return '';
    }
    if(str.length <= 1){
      return str[0].toUpperCase();
    }
  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst(""));