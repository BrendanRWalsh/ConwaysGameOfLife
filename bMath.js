//complex math functions not covered by JS Math.
var bMath = {
  calcDist: function (x1, y1, x2, y2) {
    if (arguments.length === 2) {
      let dx = x1.x - y1.x;
      let dy = x1.y - y1.y;
    }
    if (arguments.length === 4) {
      let dx = x1 - x2;
      let dy = y1 - y2;
    }
    return Math.sqrt(dx * dx + dy * dy);
  },
  calcAngle: function (x1, y1, x2, y2) {
    return Math.atan2(y1 - y2, x1 - x2) * 180 / Math.PI
  },
  calcAngleCoords: function(x1,y1,x2,y2){
    let angleX = Math.abs(this.calcAngle(x1,y1,x2,y2) / 180) * 2 - 1
    let angleY = Math.abs(this.calcAngle(y1,x1,y2,x2) / 180) * 2 - 1
    return ([angleX, angleY])
  },
  rand: function (min, max) {
    return Math.random() * (max - min) + min;
  },
  round2: function (num) {
    return +(Math.round(num + "e+2") + "e-2");
  },
  bubble_Sort: function (a) {
    let swapp;
    let n = a.length - 1;
    let x = a;
    do {
      swapp = false;
      for (var i = 0; i < n; i++) {
        if (x[i][1] > x[i + 1][1]) {
          var temp = x[i];
          x[i] = x[i + 1];
          x[i + 1] = temp;
          swapp = true;
        }
      }
      n--;
    }
    while (swapp);
    return x;
  }
}