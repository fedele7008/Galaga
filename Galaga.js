function Galaga() {
    Galaga.maxLaserCount = 4;
    Galaga.ailenSpawnRate = 30;

    this.ship = new Ship();
    this.lasers = [];
    this.enemies = [];
    this.aliens = [];
    this.enemyBullets = [];
    this.EnemyID = 0;

    this.setup = function() {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 10; col++) {
                this.enemies.push(new Enemy(col * 50 + 50, row * 70 + 50, this.EnemyID++));
            }
        }
    }

    this.update = function() {
        this.ship.update();

        if (frameCount % Galaga.ailenSpawnRate === 0) {
            this.aliens.push(new Alien());
        }

        for (let i = 0; i < this.lasers.length; i++) {
            this.lasers[i].update();
        }

        for (let i = 0; i < this.enemyBullets.length; i++) {
            this.enemyBullets[i].update();
        }

        for (let i = 0; i < this.aliens.length; i++) {
            this.aliens[i].update(this);
        }

        let leftEnemyIdx = -1;
        let rightEnemyIdx = -1;
        for (let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].update(this);

            if (leftEnemyIdx < 0) leftEnemyIdx = i;
            if (rightEnemyIdx < 0) rightEnemyIdx = i;

            if (this.enemies[i].position.x < this.enemies[leftEnemyIdx].position.x) leftEnemyIdx = i;
            if (this.enemies[i].position.x > this.enemies[rightEnemyIdx].position.x) rightEnemyIdx = i;
        }

        if (this.enemies.length > 0 && (this.enemies[leftEnemyIdx].position.x < Enemy.radius || this.enemies[rightEnemyIdx].position.x > width - Enemy.radius)) Enemy.turn();

        for (let i = 0; i < this.lasers.length; i++) {
            let isCollided = false;

            for (let j = 0; j < this.enemies.length; j++) {
                if (this.lasers[i].position.dist(this.enemies[j].position) < Laser.height / 2 + Enemy.radius) {
                    this.enemies.splice(j, 1);
                    isCollided = true;
                    break;
                }
            }

            if (isCollided) {
                this.lasers.splice(i--, 1);
                continue;
            }

            for (let j = 0; j < this.aliens.length; j++) {
                if (this.lasers[i].position.dist(this.aliens[j].position) < Laser.height / 2 + Alien.radius) {
                    this.aliens.splice(j, 1);
                    this.lasers.splice(i--, 1);
                    break;
                }
            }
        }

        for (let i = 0; i < this.enemyBullets.length; i++) {

        }

        for (let i = 0; i < this.aliens.length; i++) {

        }

        for (let i = 0; i < this.lasers.length; i++) {
            if (this.lasers[i].isOffDisplay()) {
                this.lasers.splice(i--, 1);
            }
        }

        for (let i = 0; i < this.enemyBullets.length; i++) {
            if (this.enemyBullets[i].isOffDisplay()) {
                this.enemyBullets.splice(i--, 1);
            }
        }

        for (let i = 0; i < this.aliens.length; i++) {
            if (this.aliens[i].isOffDisplay()) {
                this.aliens.splice(i--, 1);
            }
        }
    }

    this.display = function() {
        background(0);

        for (let i = 0; i < this.lasers.length; i++) {
            this.lasers[i].display();
        }

        for (let i = 0; i < this.enemyBullets.length; i++) {
            this.enemyBullets[i].display();
         }

        for (let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].display();
        }

        for (let i = 0; i < this.aliens.length; i++) {
            this.aliens[i].display();
        }

        this.ship.display();
    }

    this.moveLeft = function() {
        if (this.ship.isAlive()) this.ship.velocity.x = -Ship.movementSpeed;
    }

    this.moveRight = function() {
        if (this.ship.isAlive()) this.ship.velocity.x = Ship.movementSpeed;
    }

    this.moveStop = function() {
        if (this.ship.isAlive()) this.ship.velocity.x = 0;
    }

    this.shoot = function() {
        if (this.ship.isAlive() && this.lasers.length < Galaga.maxLaserCount) {
            this.lasers.push(new Laser(this.ship.position));
        }
    }
}