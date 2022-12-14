const SIZE_X = 800;
const SIZE_Y = 600;

let game;

function setup() {
    createCanvas(SIZE_X, SIZE_Y);
    game = new Galaga();
    game.setup();
}

function draw() {
    game.update();
    game.display();
}

function keyPressed() {
    if (key == 'A' || keyCode == LEFT_ARROW) {
        game.moveLeft();
    }
    if (key == 'D' || keyCode == RIGHT_ARROW) {
        game.moveRight();
    }
    if (key == ' ') {
        game.shoot();
    }
}

function keyReleased() {
    if (key == 'A' || keyCode == LEFT_ARROW || key == 'D' || keyCode == RIGHT_ARROW) {
        game.moveStop();
    }
}

function mousePressed() {
    game.shoot();
}


