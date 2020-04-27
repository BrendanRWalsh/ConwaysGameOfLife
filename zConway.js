const gridSize = 2
const canvasSize = {
    x: 500,
    y: 500
}
const xVal = canvasSize.x / gridSize
const yVal = canvasSize.y / gridSize
let now = performance.now()
let timeDelay = 0
let cells = []
let nextGen = []
const gameOfLife = {
    play: true,
    ui: {},
    init: function () {
        canvas.makeCanvas('canvas', canvasSize.x, canvasSize.y + 100)
        mouse.init()
        this.populateGrid()
        this.animate()
    },
    animate: function () {
        globalID = requestAnimationFrame(gameOfLife.animate);
        gameOfLife.main();
    },
    main: function () {
        if (this.play) {
            if (now < performance.now()) {
                now = performance.now() + timeDelay
                canvas.clearCanvas()
                this.updateCells()
                cells = nextGen
                nextGen = []
            }
        }
    },
    populateGrid: function () {
        for (y = 0; y < canvasSize.y / gridSize; y++) {
            for (x = 0; x < canvasSize.x / gridSize; x++) {
                cells.push(Math.round(bMath.rand(0, 1)))
            }
        }
    },
    updateCells: function () {
        for (cell = 0; cell < cells.length; cell++) {
            neighbours = this.findNieghbours(cell)
            nextGen.push(cells[cell])
            if (cells[cell] == 1 && (neighbours < 2 || neighbours > 3)) { nextGen[cell] = 0 }
            if (neighbours == 3) { nextGen[cell] = 1 }
            if (nextGen[cell] == 1) { this.drawCell(cell, 'green') }
        }
    },
    findNieghbours: function (cell) {
        neighbours = 0
        left = false
        right = false
        if (cell / xVal % 1 != 0) {
            if (cells[cell - 1]) { neighbours += 1 }//3
            left = 1
        }
        if ((cell + 1) / xVal % 1 != 0) {
            if (cells[cell + 1]) { neighbours += 1 }//5
            right = 1
        }
        if (cell >= yVal) {
            if (cells[cell - xVal]) { neighbours += 1 }//1
            if (left) { if (cells[cell - 1 - xVal]) { neighbours += 1 } }//0
            if (right) { if (cells[cell + 1 - xVal]) { neighbours += 1 } }//2
        }
        if (cell < (cells.length - xVal)) {
            if (cells[cell + xVal]) { neighbours += 1 }//7
            if (left) { if (cells[cell - 1 + xVal]) { neighbours += 1 } }//6
            if (right) { if (cells[cell + 1 + xVal]) { neighbours += 1 } }//8
        }
        return neighbours
    },
    drawCell: function (cell, color) {
        cellX = cell % (canvasSize.x / gridSize);
        cellY = (Math.floor(cell / (canvasSize.y / gridSize)));
        draw.fillRect(cellX * gridSize, cellY * gridSize, gridSize, gridSize, color);
    }
}
gameOfLife.init();