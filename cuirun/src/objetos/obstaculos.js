import helpers from '../share/helpers.js';
import constants from '../share/const.js';

class Obstaculos {

    constructor(scene) {
        this.scene = scene;
        this.cantidadInicial = 1;
        this.timmer = 0;
        this.difficult = 300; // rango de acercamiento, disminuirlo hasta 112
        this.minTimeDifficult = 35;
    }

    crearObstaculo() {
        const steepRandom = Phaser.Math.Between(112, 556);
        const xInicial = Phaser.Math.Between(300, 556);
        this.soporte = this.scene.physics.add.staticGroup({
            key: 'obstaculo',
            frame: 'aro_s',
            repeat: this.cantidadInicial,
            setXY: {
                x: xInicial,
                y: helpers.HEIGHT(this.scene) - 41,
                stepX: steepRandom
            }
        });
        this.soporte.setDepth(-1);
        
        this.aroLeft = this.scene.physics.add.staticGroup({
            key: 'obstaculo',
            frame: 'aro_left',
            repeat: this.cantidadInicial,
            setXY: {
                x: xInicial - 1,
                y: helpers.HEIGHT(this.scene) - 73,
                stepX: steepRandom
            }
        });
        
        this.aroRight = this.scene.physics.add.staticGroup({
            key: 'obstaculo',
            frame: 'aro_right',
            repeat: this.cantidadInicial,
            setXY: {
                x: xInicial - 1,
                y: helpers.HEIGHT(this.scene) - 73,
                stepX: steepRandom
            }
        });

        this.aroRight.setDepth(2);
        this.aroLeft.setDepth(-2);

        [...Array(3)].map(() => {
            this.crearNuevoObjeto();
        });
        return this;
    }

    update(time) {
        let Time = Math.round(time / 100);
        if (this.timmer != Time) {
            if (this.timmer > 10 && Time <= this.minTimeDifficultv) {
                this.difficult = Math.round((this.minTimeDifficult * 113) / Time);
            }
            this.timmer = Time;
        }
        if (this.posObjetoRight(this.primerObjeto(this.soporte)) < this.scene.cameras.cameras[0].scrollX) {
            this.primerObjeto(this.soporte).destroy();
            this.primerObjeto(this.aroLeft).destroy();
            this.primerObjeto(this.aroRight).destroy();
            this.crearNuevoObjeto();
        }

    }
    // Obtenemos la posición exacta del primer suelo
    posObjetoRight(objeto) {
        return objeto.x + objeto.width;
    }

    // Obtenemos el primer objeto
    primerObjeto(x) {
        return x.getChildren()[0];
    }

    // Obtenemos el último suelo (normalmente lo usaremos para creación de nuevos suelos)
    ultimoObjeto() {
        const temp = this.soporte.getChildren();
        return temp[temp.length - 1];
    }

    // Creación de objeto
    crearNuevoObjeto() {
        const xRandom = this.posObjetoRight(this.ultimoObjeto()) + Phaser.Math.Between(90, this.difficult);
        this.soporte.create(xRandom, helpers.HEIGHT(this.scene) - 41, 'obstaculo', 'aro_s').setDepth(-1);
        this.aroRight.create(xRandom - 1, helpers.HEIGHT(this.scene) - 73, 'obstaculo', 'aro_right');
        this.aroLeft.create(xRandom - 1, helpers.HEIGHT(this.scene) - 73, 'obstaculo', 'aro_left').setDepth(-2);
    }

}
export default Obstaculos;