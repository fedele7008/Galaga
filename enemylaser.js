function EnemyLaser(position) {
    EnemyLaser.radius = 8;

    this.position = createVector(position.x, position.y);
    this.velocity = createVector(0, 7);

    this.update = function() {
        this.position.add(this.velocity);
    }

    this.display = function() {
        fill(255, 0, 0);
        ellipse(this.position.x, this.position.y, EnemyLaser.radius * 2, EnemyLaser.radius * 2);
    }

    this.isOffDisplay = function() {
        return this.position.y > height + EnemyLaser.radius;
    }
}