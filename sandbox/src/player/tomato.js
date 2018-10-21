class Tomato extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.acceleration = 200;
        this.body.maxVelocity.x = 150;
        this.body.mass = 2000;
        this.desaceleracion = 2;
        this.anims.play('idle');
        this.prevAnim = '';
        this.cursor = this.scene.input.keyboard.createCursorKeys();
        // log(this);

    }
    update() {
        if (this.cursor.up.isDown ||
            this.cursor.right.isDown ||
            this.cursor.left.isDown ||
            this.cursor.down.isDown) {

            // Derecha
            if (this.cursor.right.isDown) {
                if (this.body.velocity.y === 0) {
                    if(Math.abs(this.body.velocity.x) > 100 && this.prevAnim == 'left') {
                        console.log("Entra en velocidad DERECHA");
                        this.walk(this.acceleration * this.desaceleracion * 9);
                    } else {
                        this.walk(this.acceleration);
                    }
                } else {
                    // si se está saltando
                    this.walk(this.acceleration / 3);
                }
                if (this.prevAnim != 'right') {
                    this.anims.play('walk');
                    this.flipX = false;
                }
                this.prevAnim = 'right';
                
            }
            // Izquerda 
            else if (this.cursor.left.isDown) {
                if (this.body.velocity.y === 0) {
                    if(this.body.velocity.x > 100 && this.prevAnim == 'right') {
                        console.log("Entra en velocidad IZQUIERDA");

                        this.walk(-(this.acceleration * this.desaceleracion * 9));
                    } else {
                        this.walk(-this.acceleration);
                    }
                } else {
                    // Si se está saltando
                    this.walk(-this.acceleration / 3);
                }
                if (this.prevAnim != 'left') {
                    this.anims.play('walk');
                    this.flipX = true;
                }
                this.prevAnim = 'left';

            } else if (this.cursor.down.isDown) {

                if (this.prevAnim != 'down') {
                    this.body.velocity.x = 0;
                    this.body.setAccelerationX(0);

                    this.anims.play('down');
                }
                this.prevAnim = 'down';
            }

            if (this.cursor.up.isDown) {
                if(this.body.blocked.down) {
                    if (this.prevAnim != 'jump') {
                        this.body.setVelocityY(-200);
                        this.anims.play('jump');
                    }
                    this.prevAnim = 'jump';
                }
            } 

        } else {
            if (this.body.blocked.down) {

                if (Math.abs(this.body.velocity.x) < 10) {
                    this.body.setVelocityX(0);
                    this.walk(0);
                    if (this.prevAnim != 'idle') {
                        this.anims.play('idle');
                    }
                    this.prevAnim = 'idle';
                } else {
                    this.walk(((this.body.velocity.x > 0) ? -1 : 1) * this.acceleration * this.desaceleracion);
                }
    
            } else {
                this.walk(0);
            }

        }

    }

    walk(vel) {
        this.body.setAccelerationX(vel);
    }
}

export default Tomato;