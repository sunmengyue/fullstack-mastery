class Calculator {
  constructor(name) {
    this.name = name;
    this.result = 0;
  }

  add(num) {
    // summation code
    return (this.result += num);
  }

  subtract(num) {
    // subtraction code
    return (this.result -= num);
  }

  clear() {
    //clear result
    return (this.result = 0);
  }

  print() {
    console.log(this.result);
  }

  proveThis() {
    console.log(this);
  }

  devide(num) {
    return (this.result = Math.round(this.result / num));
  }
}

// delcare and instantiate class
let myCalculator = new Calculator('Casio');
let anotherCalculator = new Calculator('Sony');
//let mySecondCalculator = new Calulator('asdfcas');
myCalculator.proveThis();
anotherCalculator.proveThis();
// have fun with the calculator
