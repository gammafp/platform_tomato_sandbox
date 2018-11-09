class Cobaya extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.body.maxVelocity.x = 170;
        this.body.setVelocityX(170);
        this.anims.play('run');
        this.body.setSize(40);

        this.salto = true;
        this.changeAnim = false;

        this.cursor = this.scene.input.keyboard.createCursorKeys();
    
        this.scene.input.keyboard.on('keydown_UP', () => {
            if (this.body.touching.down && this.body.velocity.y === 0) {
                this.changeAnim = true;
                this.body.setSize(40, 24);
                this.anims.play('jump');
                this.body.setVelocityY(-260);
            } 
        });
        this.scene.input.on('pointerdown', () => { 
            if (this.body.touching.down && this.body.velocity.y === 0) {
                this.changeAnim = true;
                this.body.setSize(40, 24);
                this.anims.play('jump');
                this.body.setVelocityY(-260);
            } 
        });
    }
    
    update(delta) {
        if(this.body.touching.down && this.body.velocity.y === 0) {
            if(this.changeAnim) {
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

}

export default Cobaya;