class Cobaya extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.body.maxVelocity.x = 170;
        this.body.setVelocityX(170);
        this.anims.play('run');
        this.body.setSize(40);

        this.changeAnim = false;

        this.cursor = this.scene.input.keyboard.createCursorKeys();

        this.scene.input.keyboard.on('keydown_UP', () => {
            if (this.body.touching.down && this.body.velocity.y === 0) {
                this.changeAnim = true;
                this.body.setSize(25, 24);
                this.anims.play('jump');
                this.body.setVelocityY(-235);
            }
        });
        this.scene.input.on('pointerdown', () => {
            if (this.body.touching.down && this.body.velocity.y === 0) {
                this.changeAnim = true;
                this.body.setSize(25, 24);
                this.anims.play('jump');
                this.body.setVelocityY(-235);
            }
        });
    }

    update(delta) {
        if (this.body.touching.down && this.body.velocity.y === 0) {
            if (this.changeAnim) {
                this.body.setSize(40, 33);
                this.changeAnim = false;
                this.anims.play('run');
            }

        }
        // Borrar
        if (this.cursor.right.isDown) {
            this.body.setVelocityX(170);
        } else if (this.cursor.left.isDown) {
            this.body.setVelocityX(-170);
        }
    }

    gameOver(cobaya) {
        console.log(cobaya.anims.pause());
        // cobaya.body.setVelocityY(-220);
        cobaya.body.setVelocityX(0);
        cobaya.body.setSize(40, 25);
        cobaya.flipY = true;
        this.scene.time.addEvent({
            delay: 1000,
            callback: () => this.scene.scene.start('Gameover'),
            repeat: 0,
        });
    }

}

export default Cobaya;