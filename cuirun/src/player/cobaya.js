import helpers from "../share/helpers.js";

class Cobaya extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.body.maxVelocity.x = 170;

        this.changeAnim = false;
        this.cursor = this.scene.input.keyboard.createCursorKeys();
        this.diet = false;

    }

    update(delta) {
        if (this.body.touching.down && this.body.velocity.y === 0) {
            if (this.changeAnim) {
                this.walk();
                this.changeAnim = false;
                // this.anims.play('run');
            }

        }

        // Borrar (Solo debug)
        if (this.cursor.right.isDown) {
            this.body.setVelocityX(170);
        } else if (this.cursor.left.isDown) {
            this.body.setVelocityX(-170);
        }
    }

    gameOver(cobaya) {
        this.diet = true;
        cobaya.anims.setTimeScale(1.7);
        cobaya.anims.pause();
        cobaya.body.setVelocityX(0);
        cobaya.body.setSize(40, 25);
        cobaya.flipY = true;

        helpers.EE.emit('game_over', null);

        this.scene.time.addEvent({
            delay: 1500,
            callback: () => {
                this.scene.scene.stop('UI');
                this.scene.scene.start('Gameover');
            },
            repeat: 0,
        });
    }

    idle() {
        this.body.setSize(45, 25);
        this.anims.play('idle');
        this.body.setVelocityX(0);
    }

    walk() {
        this.body.setSize(40, 30);
        this.body.setVelocityX(170);
        this.anims.play('run');
    }

    jump() {
        if (this.body.touching.down && this.body.velocity.y === 0 && !this.diet) {
            this.changeAnim = true;
            this.body.setSize(25, 24);
            this.anims.play('jump');
            this.body.setVelocityY(-235);
        }
    }
}

export default Cobaya;