/*
 Input event handlers and logic
 js key event codes at https://keycode.info/ 
 Left = 37
*/
keys = []
lastPress = 0
function suppressInput(inputType, time) {
    inputType = inputType || 'all'
    time = time || 300
    now = performance.now()
    if (now - lastPress > delay) {
        lastPress = now
        return true
    }
    else { return false }
}
var keyboard = {
    init: function () {
        console.log('enabling keyboard functionality...')
        window.addEventListener("keydown", function (e) {
            keys[e.keyCode] = true;
        });
        window.addEventListener("keyup", function (e) {
            keys[e.keyCode] = false;
        });
    },
    whatKey: function () {
    },
    keyboardMove: function () {
    },
    submit: function () {
    }
}
var mouse = {
    x: 0,
    y: 0,
    mouseDown: false,
    init: function () {
        console.log('enabling mouse functionality...')

        //left click down
        window.addEventListener("mousedown", e => {
            mouse.click(e);
        });

        //left mouse up / mouse released
        window.addEventListener("mouseup", e => {
            mouse.unClick(e);
        });

        //right mouse down
        window.addEventListener("contextmenu", e => {
            e.preventDefault();
            mouse.rightClick(e);
        });

        //mouse movement
        window.addEventListener("mousemove", e => {
            mouse.moved(e);
        });

        //mouse wheel events
        window.addEventListener("wheel", e => {
            if (e.deltaY < 0) { mouse.mouseWheel(1) };
            if (e.deltaY > 0) { mouse.mouseWheel(0) };
        });
    },
    click: function (e) { mouse.mouseDown = true },
    unClick: function (e) { mouse.mouseDown = false },
    rightClick: function (e) {
    },
    moved: function (e) {
    },
    mouseWheel: function (dir) {
        if (dir < 0) { viewPort.zoom -= 1 }
        if (dir > 0) { viewPort.zoom += 1 }
        if (viewPort.zoom < 1) { viewPort.zoom = 1 }
    },
    isMouseOver: function (obj) {
        if (mouse.x > obj.x &&
            mouse.x < obj.x + obj.width &&
            mouse.y > obj.y &&
            mouse.y < obj.y + obj.height
        ) { return true }
        else { return false }
    }
}
var gamePad = {}//unimplimented yet