function Alien() {
    Alien.radius = 10;
    Alien.speed = 1.5;

    this.position = createVector(random(0, width), -Alien.radius);
    this.velocity = createVector(0, 6);

    this.update = function(game) {
        if (game.ship.position.x > this.position.x) {
            this.velocity.x = Alien.speed;
        } else if (game.ship.position.x < this.position.x) {
            this.velocity.x = -Alien.speed;
        } else {
            this.velocity.x = 0;
        }

        this.position.add(this.velocity);
    }

    this.display = function() {
        fill(128,0,128);
        ellipse(this.position.x, this.position.y, Alien.radius * 2, Alien.radius * 2);
    }

    this.isOffDisplay = function() {
        return this.position.y - Alien.radius > height
    }
}