
var Character = function(x, y, sprite) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
};

Character.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Enemy = function(x, y, sprite, speed) {
    Character.call(this, x, y, sprite);
    this.speed = speed;
};

Enemy.prototype = Object.create(Character.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt * 100;
    if(player.x < this.x +60&&
        player.x +37 >this.x &&
        player.y<this .y +25 &&
        30 +player.y>this.y){
        player.x=200;
    player.y=380;
}
};

var Player = function(x, y, sprite) {
    Character.call(this, x, y, sprite);
};
Player.prototype = Object.create(Character.prototype);
Player.prototype.constructor = Player;
Player.prototype.update = function() {
};
Player.prototype.handleInput = function(code) {
    if (code == 'left') {
        if (this.x - HORIZONTAL_MOVE < 0) {
            return;
        }
        this.x -= HORIZONTAL_MOVE;
    } else if (code == 'up') {

        if (this.y - VERTICLE_MOVE < 0) {
            this.x = TILE_WIDTH;
            this.y = TILE_HEIGHT;
            return;
        }
        this.y -= VERTICLE_MOVE;
    } else if (code == 'right') {

        if (this.x + HORIZONTAL_MOVE > 400) {
            return;
        }
        this.x += HORIZONTAL_MOVE;
    } else if (code == 'down') {

        if (this.y + VERTICLE_MOVE > 450) {
            return;
        }
        this.y += VERTICLE_MOVE;
    }

};

var TILE_WIDTH = 200;
var TILE_HEIGHT = 390;
var HORIZONTAL_MOVE = 100;
var VERTICLE_MOVE = 83;

allEnemies = new Array();
for (var i = 0; i < 20; i++) {
    var enemy1 = new Enemy(-300 * i, 58, 'images/enemy-bug.png', 1);
    var enemy2 = new Enemy(-600 * i, 141, 'images/enemy-bug.png', 2);
    var enemy3 = new Enemy(-800 * i, 224, 'images/enemy-bug.png', 3);
    allEnemies.push(enemy1, enemy2, enemy3);
}

player = new Player(TILE_WIDTH, TILE_HEIGHT, 'images/char-boy.png');

document.addEventListener('keyup', function(e)
{
    var allowedKeys =
    {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});