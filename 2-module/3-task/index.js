let calculator = {  
  read: function(a,b) {
    this.a = a;
    this.b = b;
  },
  sum: function() {
    return this.a + this.b;
  },
  mul: function() {
    return this.a*this.b;

  }
}
  let test = calculator.read(4,5);
  console.log(calculator.sum());
  console.log(calculator.mul())
   
window.calculator(calculator);