/*
Generic enemy class that extends Phaser sprites.
Classes for enemy types extend this class.
*/

export default class FallingText extends Phaser.GameObjects.Text {
    constructor(config) {
        super(config.scene, config.x, config.y, config.text, config.opts);
        config.scene.physics.world.enable(this);
      

        // start still and wait until needed
        this.body.setCollideWorldBounds(true);
        this.body.allowGravity = true;
        this.body.setMaxSpeed(5)
        
        // this.body.setVelocityY(5)
        this.body.debugShowBody=true


        // Standard sprite is 16x16 pixels with a smaller body
        // this.setSize(10, 10);
        // this.setDisplaySize(10, 10)

        
        

    // If you've scaled a Sprite by altering its `width`, `height`, or `scale` and you want to
    // position the Body relative to the Sprite's dimensions (which will differ from its texture's
    // dimensions), you should divide these arguments by the Sprite's current scale:
    //
         this.body.setSize(10 / this.scaleX, 10 / this.scaleY)
    //

        // this.body.offset.set(10, 12);
    }

    // activated() {
    //     // Method to check if an enemy is activated, the enemy will stay put
    //     // until activated so that starting positions is correct
    //     if (!this.alive) {
    //         if (this.y > 240) {
    //             this.kill();
    //         }
    //         return false;
    //     }
    //     if (!this.beenSeen) {
    //         // check if it's being seen now and if so, activate it
    //         if (this.x < this.scene.cameras.main.scrollX + this.scene.sys.game.canvas.width + 32) {
    //             this.beenSeen = true;
    //             this.body.velocity.x = this.direction;
    //             this.body.allowGravity = true;
    //             return true;
    //         }
    //         return false;
    //     }
    //     return true;
    // }

    // verticalHit(enemy, mario) {
    //     // quick check if a collision between the enemy and Mario is from above.
    //     if (!mario.alive) {
    //         return false;
    //     }
    //     return mario.body.velocity.y >= 0 && (mario.body.y + mario.body.height) - enemy.body.y < 10;
    // }

    // hurtMario(enemy, mario) {
    //     // send the enemy to mario hurt method (if mario got a star this will not end well for the enemy)
    //     this.scene.mario.hurtBy(enemy);
    // }

    // starKilled() {
    //     // Killed by a star or hit from below with a block, later on also fire
    //     if (!this.alive) {
    //         return;
    //     }
    //     this.body.velocity.x = 0;
    //     this.body.velocity.y = -200;
    //     this.alive = false;
    //     this.flipY = true;
    //     this.scene.sound.playAudioSprite('sfx', 'smb_stomp');
    //     this.scene.updateScore(100);
    // }

    // kill() {
    //     // Forget about this enemy
    //     this.scene.enemyGroup.remove(this);
    //     this.destroy();
    // }
}
