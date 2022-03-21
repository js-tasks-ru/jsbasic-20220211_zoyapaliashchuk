function truncate(str, maxLength) {
  maxLength;
  if (str.length > maxLength) {
    return str.slice(0, maxLength -1) + '…';
  } else {
    return str;
   }
  }
 console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
 console.log(truncate('Всем привет!', 10));
 console.log(truncate('Марта хочет по попе очень сильно', 5));
