class Tomato extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.body.maxVelocity.x = 150; // Máxima velocidad del body (interno)
        this.acceleration = 400; // Acceleración para caminar (externo)
        this.desaceleracion = 1; // Desacelera cuando camina y se detiene (externo) * multiplo de aceleración principal
        this.desaceleracionDevolver = 5; // Dessaceleración al devolverse (externo) * multiplo de aceleración principal
        this.jumpAceleration = 170; // Salto vertical (externo)
        this.prevAnim = ''; // Animación previa (externo) (historial)
        this.jumpin = false; // Comprobar mientras se está saltando (externo)
        this.jumpTime = 0;
        this.anims.play('idle');
        this.cursor = this.scene.input.keyboard.createCursorKeys();
        this.run = walk(this.body);

    }
    update(delta) {
        // if(
        //     this.cursor.left.isDown ||
        //     this.cursor.right.isDown ||
        //     this.cursor.down.isDown ||
        //     this.cursor.up.isDown
        // ) {
        this.jumpTimer -= delta;
        if(this.cursor.down.isDown) {
            stop(this.body, this.acceleration, this.desaceleracion);
        } else if (this.cursor.right.isDown) {
            if (this.body.velocity.y === 0) {
                this.run(this.acceleration);
            } else {
                this.run(this.acceleration / 3);
            }
        } else if (this.cursor.left.isDown) {
            if (this.body.velocity.y === 0) {
                this.run(-this.acceleration);
            } else {
                this.run(-this.acceleration / 3);
            }
        } else if (this.body.blocked.down) {
            stop(this.body, this.acceleration, this.desaceleracion);
        } else if (!this.body.blocked.down) {
            this.run(0);
        }

        if (this.cursor.up.isDown && (!this.jumping || this.jumpTimer > 0)) {
            this.jump();
        } else if (!this.cursor.up.isDown) {
            this.jumpTimer = -1; // Don't resume jump if button is released, prevents mini double-jumps
            if (this.body.blocked.down) {
                this.jumping = false;
            }
        }

        // Fin
    }

    jump() {

        if (!this.body.blocked.down && !this.jumping) {
            return;
        }
        if (this.body.velocity.y < 0 || this.body.blocked.down) {
            this.body.setVelocityY(-this.jumpAceleration);
        }
        if (!this.jumping) {
            this.jumpTimer = 200;
        }
        this.jumping = true;

    }


}

const walk = (body) => (vel) => body.setAccelerationX(vel);
const stop = (body, aceleration, desaceleracion) => {
    if (Math.abs(body.velocity.x) < 10) {
        body.setVelocityX(0);
        body.setAccelerationX(0);
    } else {
        body.setAccelerationX(((body.velocity.x > 0) ? -1 : 1) * aceleration * desaceleracion);
    }
}


export default Tomato;