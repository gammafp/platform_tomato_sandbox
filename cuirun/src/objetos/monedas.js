import helpers from '../share/helpers.js';
import DataBase from '../DataBase.js';

class Monedas {

    constructor(scene) {
        this.scene = scene;
        this.cantidadInicial = 1;
        this.difficult = 300;
        this.heightPositionCoin = helpers.HEIGHT(this.scene) - 80;
        this.oldTween = [0];
    }

    crearMoneda() {
        this.monedas = this.scene.physics.add.staticGroup({
            key: 'monedas',
            repeat: this.cantidadInicial,
            setXY: {
                x: Phaser.Math.Between(212, 500),
                y: this.heightPositionCoin,
                stepX: Phaser.Math.Between(112, 556)
            }
        });

        this.monedas.children.iterate((x) => {
            x.setDepth(0);
            x.setOffset(3, 3);
            x.setSize(10, 10);
        });

        [...Array(20)].map(() => {
            this.crearNuevoObjeto();
        });

        this.scene.anims.play('moneda', this.monedas.getChildren());
        // this.scene.anims.play('moneda', , 50);
        return this;
    }

    update(time) {
        if (this.posObjetoRight(this.primerObjeto()) < this.scene.cameras.cameras[0].scrollX) {
            this.primerObjeto().destroy();
            this.crearNuevoObjeto();
        }
    }

    addCoin(coin) {
        // this.scene.physics.world.removeCollider(coin)
        if (!this.oldTween.some((x) => x === coin.x)) {
            this.oldTween.push(coin.x);
            if(this.oldTween.length === 100) {
                this.oldTween = [0];
            }
            this.activateTween = false;
            this.scene.tweens.add({
                targets: coin,
                ease: "Power1",
                duration: 300,
                props: {
                    y: coin.y - 20,
                },
                onComplete: () => {
                    this.activateTween = true;
                    this.crearNuevoObjeto();
                    coin.destroy();
                    DataBase.coinCollect += 1;
                }
            });
        }
    }

    // Obtenemos la posición exacta del primer suelo
    posObjetoRight(objeto) {
        return objeto.x + objeto.width;
    }

    // Obtenemos el primer objeto
    primerObjeto() {
        return this.monedas.getChildren()[0];
    }

    // Obtenemos el último suelo (normalmente lo usaremos para creación de nuevos suelos)
    ultimoObjeto() {
        const temp = this.monedas.getChildren();
        return temp[temp.length - 1];
    }

    // Creación de objeto
    crearNuevoObjeto() {
        const moneda = this.monedas.create(this.posObjetoRight(this.ultimoObjeto()) + Phaser.Math.Between(16, this.difficult), this.heightPositionCoin, 'monedas')
            .setOffset(3, 3).setSize(10, 10).setDepth(0);
        this.scene.anims.play('moneda', moneda);
    }

}
export default Monedas;