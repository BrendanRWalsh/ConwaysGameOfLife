/* 
  Sets up a canvas on the page, 
  requires canvas to be defined on the DOM
*/
var canvas = {
  currentCanvas: null,
  currentRect: null,
  isFullscreen: false,
  fullscreenBehaviour: 'scale',
  defaultWidth : 800,
  defaultHight : 600,
  init: function () {
    this.makeCanvas()
    
  },
  makeCanvas: function (canvasName, sizeX, sizeY) {
    //initial canvas creation and connection to DOM

    console.log(`creating canvas...`);
    //check parameters, if null then values are assumed
    canvasName = canvasName || 'canvas';
    sizeX = sizeX || this.defaultWidth;
    sizeY = sizeY || this.defaultHight;

    //check if canvas by name provided exists, if not print error message
    if (document.getElementById(canvasName) === null) {
      canvas.canvasDoesNotExist(canvasName)
    }
    else {
      //set canvas element to variable
      this.element = document.getElementById(canvasName);
      this.element.width = sizeX;
      this.element.height = sizeY
      margin = sizeX / 2
      margin -= margin * 2
      this.element.setAttribute('style', `position: absolute;  left: 50%;margin-left:${margin}px;`);
      ctxt = this.element.getContext('2d');

      currentCanvas = this.element
      canvas.updateCanvasParams()
    }
    this.element.focus();
    //update canvas to be a blank object onscreen
    canvas.clearCanvas(canvasName)
  },
  clearCanvas: function (canvasName, bgCol) {
    //reset canvas to a blank state

    //check parameters, if null then values are assumed
    canvasName = canvasName || 'canvas';
    this.element = document.getElementById(canvasName)
    if (this.element === null) {
      canvas.canvasDoesNotExist(canvasName)
    }
    else {
      bgCol = bgCol || 'black'
      ctxt.save();
      ctxt.fillStyle = bgCol
      ctxt.fillRect(0, 0, this.element.width, this.element.height)
      ctxt.restore();
    }
  },
  canvasDoesNotExist: function (canvasName) {
    console.log('----------------------------------------')
    console.log('ERROR:')
    console.log(`Canvas: '${canvasName}' does not exist`)
    console.log('----------------------------------------')
  },
  resizeCanvas: function (sizeX, sizeY, canvasName) {
    canvasName = canvasName || 'canvas';
    this.element = document.getElementById(canvasName);
    
    this.element.width = sizeX;
    this.element.height = sizeY
    margin = sizeX / 2
    margin -= margin * 2
    this.element.setAttribute('style', `position: absolute;  left: 50%;margin-left:${margin}px;`);
    canvas.updateCanvasParams()

  },
  updateCanvasParams : function(){
    currentRect = currentCanvas.getBoundingClientRect();
  },
  // fullscreen: function () {
  //   var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
  //     (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
  //     (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
  //     (document.msFullscreenElement && document.msFullscreenElement !== null);

  //   if (!isInFullScreen) {
  //     if (currentCanvas.requestFullscreen) {
  //       currentCanvas.requestFullscreen();
  //     } else if (currentCanvas.mozRequestFullScreen) {
  //       currentCanvas.mozRequestFullScreen();
  //     } else if (currentCanvas.webkitRequestFullScreen) {
  //       currentCanvas.webkitRequestFullScreen();
  //     } else if (currentCanvas.msRequestFullscreen) {
  //       currentCanvas.msRequestFullscreen();
  //     }
  //   } else {
  //     if (currentCanvas.exitFullscreen) {
  //       currentCanvas.exitFullscreen();
  //     } else if (currentCanvas.webkitExitFullscreen) {
  //       currentCanvas.webkitExitFullscreen();
  //     } else if (document.mozCancelFullScreen) {
  //       document.mozCancelFullScreen();
  //     } else if (document.msExitFullscreen) {
  //       document.msExitFullscreen();
  //     }
  //   }
  // }
  fullscreen: function(){
    if(!canvas.isFullscreen){currentCanvas.webkitRequestFullScreen()}
    else{document.webkitExitFullscreen()}   
    canvas.isFullscreen = !canvas.isFullscreen
    canvas.updateCanvasParams()
  }
}