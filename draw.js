var draw = {
  //Text
  text: function (text, x, y, colour, font, size) {
    ctxt.save();
    ctxt.font = `${size}px ${font}` || "40px Georgia";
    ctxt.fillStyle = colour || 'white'
    ctxt.fillText(text, x, y)
    ctxt.restore();
  },
  //lines
  line: function (ax, ay, bx, by, colour) {
    ctxt.save();
    ctxt.strokeStyle = colour || 'white'
    ctxt.beginPath();
    ctxt.moveTo(ax, ay)
    ctxt.lineTo(bx, by)
    ctxt.stroke();
    ctxt.closePath();
    ctxt.restore();
  },
  //shapes
  //Poly - lines / stroked
  strokePoly: function () {
    if (Array.isArray(poly)) {
      ctxt.save();
      ctxt.strokeStyle = colour || 'white'
      ctxt.beginPath();
      ctxt.moveTo(poly[0], poly[1])
      for (i = 2; i < poly.length - 1; i += 2) {
        ctxt.lineTo(poly[i], poly[i + 1])
      }
      ctxt.closePath();
      ctxt.stroke();
      ctxt.restore();
    }
    else { console.log(`---Not an array ---`) }
  },
  //polygon - filled
  fillPoly: function (poly, colour) {
    if (Array.isArray(poly)) {
      ctxt.save();
      ctxt.fillStyle = colour || 'white'
      ctxt.beginPath();
      ctxt.moveTo(poly[0], poly[1])
      for (i = 2; i < poly.length - 1; i += 2) {
        ctxt.lineTo(poly[i], poly[i + 1])
      }
      ctxt.closePath();
      ctxt.fill();
      ctxt.restore();
    }
    else { console.log(`---Not an array ---`) }
  },
  //cirle - lines / stroked
  strokeCircle: function (x, y, radius, colour) {
    ctxt.save();
    ctxt.strokeStyle = colour || 'white'
    ctxt.beginPath();
    ctxt.arc(x, y, radius, 0, 2 * Math.PI)
    ctxt.stroke();
    ctxt.closePath();
    ctxt.restore();
  },
  //circle - filled
  fillCircle: function (x, y, radius, colour) {
    ctxt.save();
    ctxt.fillStyle = colour || 'white'
    ctxt.beginPath();
    ctxt.arc(x, y, radius, 0, 2 * Math.PI)
    ctxt.fill();
    ctxt.closePath();
    ctxt.restore();
  },
  //rect - lines / stroked
  strokeRect: function (x, y, width, height, colour) {
    ctxt.save();
    ctxt.strokeStyle = colour || 'white'
    ctxt.strokeRect(x, y, width, height)
    ctxt.restore();
  },
  //rect - filled
  fillRect: function (x, y, width, height, colour) {
    ctxt.save();
    ctxt.fillStyle = colour || 'white'
    ctxt.fillRect(x, y, width, height)
    ctxt.restore();
  },
  //images
  //draw img directly to canvas
  img: function (image, a, b, c, d, e, f, g, h) {
    //image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
    ctxt.save();
    if (arguments.length === 3) {
      ctxt.drawImage(image, a, b)
    }
    if (arguments.length === 5) {
      ctxt.drawImage(image, a, b, c, d)
    }
    if (arguments.length === 7) {
      ctxt.drawImage(image, a, b, c, d, e, f)
    }
    if (arguments.length === 9) {
      ctxt.drawImage(image, a, b, c, d, e, f, g, h)
    }

    ctxt.restore();
  },
  //draw image rotated
  drawImageRot: function (img, x, y, width, height, deg, flip) {
    flip = flip || false
    ctxt.save()

    ctxt.translate(x + width / 2, y + height / 2);
    if (flip === true) {
      flipImg(img)
      deg = 180 - deg
    }
    var rad = deg * Math.PI / 180;
    ctxt.rotate(rad);
    ctxt.drawImage(img, width / 2 * (-1), height / 2 * (-1), width, height);
    ctxt.restore();
    function flipImg(img) {

      // ctxt.translate(img.width, 0);
      ctxt.scale(-1, 1);
    }
  },
  drawObj: function (obj) {
    if (obj.img) {
      draw.drawImage(obj.img, obj.x, obj.y)
    }
  }
}