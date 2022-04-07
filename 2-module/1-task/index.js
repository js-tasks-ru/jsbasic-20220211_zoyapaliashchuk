let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
};

function sumSalary(salaries) {
  let sum = 0;
for(let key in salaries) {
  let value = (salaries[key]);
  
 if (isFinite(value) && !isNaN(value) && (value > 0)) { 
   sum += value;
 }
}
  return sum;
}

sumSalary(salaries);