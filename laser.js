function Laser(position) {
    Laser.width = 10;
    Laser.height = 20;

    this.position = createVector(position.x, position.y);
    this.velocity = createVector(0, -10);

    this.update = function() {
        this.position.add(this.velocity);
    }

    this.display = function() {
        fill(255, 0, 0);
        rectMode(CENTER);
        rect(this.position.x, this.position.y, Laser.width, Laser.height);
    }

    this.isOffDisplay = function() {
        return this.position.y < 0;
    }
}