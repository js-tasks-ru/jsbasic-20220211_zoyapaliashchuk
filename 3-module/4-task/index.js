  function showSalary(users, age){
  let arr = [];
   users.filter( item =>{
    if(item.age <= age){
      arr.push(`${item.name}, ${item.balance}`);
    }
  })
  return arr.join('\n');
}

console.log( showSalary(users, 30) )