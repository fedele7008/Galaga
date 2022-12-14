function Enemy(x, y, id) {
    Enemy.movementSpeed = 3;
    Enemy.GlobalVelocity = createVector(Enemy.movementSpeed, 0);
    Enemy.radius = 10;

    this.position = createVector(x, y);
    this.id = id;
    this.randomShootInterval = int(random(100, 150));

    this.update = function(game) {
        this.position.add(Enemy.GlobalVelocity);

        if (this.id % 2 === 0 && frameCount % this.randomShootInterval === 0) {
            game.enemyBullets.push(new EnemyLaser(this.position));
        }
    }

    this.display = function() {
        colorMode(HSB);

        if (this.id % 2 === 0){
            fill(122,100,100);
        } else {
            fill(200,100,100);
        }

        ellipse(this.position.x, this.position.y, Enemy.radius * 2, Enemy.radius * 2);

        colorMode(RGB);
    }

    Enemy.turn = function () {
        Enemy.GlobalVelocity.x = -Enemy.GlobalVelocity.x;
    }
}