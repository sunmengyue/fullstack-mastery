const calcGeometry = (r) => {
  function getCircumference() {
    let circ = 2 * Math.PI * r;
    console.log(circ);
    return circ;
  }

  function getArea() {
    let area = Math.PI * Math.pow(r, 2);
    console.log(area);
    return area;
  }

  getCircumference(r);
  getArea(r);
};

console.log(calcGeometry(5));
