function Ship() {
    Ship.width = 20;
    Ship.height = 50;
    Ship.movementSpeed = 4;

    this.position = createVector(width/2, height-50);
    this.velocity = createVector(0, 0);
    this.health = 3;

    this.update = function() {
        this.position.add(this.velocity);
        this.position.x = constrain(this.position.x, Ship.width / 2, width - (Ship.width / 2));
    }

    this.display = function() {
        if (this.health <= 0) fill(255, 0, 0);
        else fill(255, 255, 255);
        rectMode(CENTER)
        rect(this.position.x, this.position.y , Ship.width, Ship.height);
    }

    this.isAlive = function() {
        return this.health > 0;
    }
}