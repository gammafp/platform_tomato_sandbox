import helpers  from '../share/helpers.js';
import constants from '../share/const.js';

import Cobaya from '../player/cobaya.js';
import Suelo from '../objetos/suelo.js';
import Obstaculos from '../objetos/obstaculos.js';
import Monedas from '../objetos/monedas.js';
import DataBase from '../DataBase.js';

class Play extends Phaser.Scene {
    constructor() {
        super({key: 'Play'});
        this.timmer = 0;
    }
    
    create() {
        // Cargar jugador
        this.player = new Cobaya({
            key: 'cobaya',
            x: 60,
            y: helpers.HEIGHT(this) - constants.SUELO.height - 16,
            scene: this
        });

        // Carga de obstaculos
        // this.add.sprite(200, helpers.HEIGHT(this) - constants.SUELO.height - 8, 'obstaculo');
        this.obstaculos = new Obstaculos(this);
        this.obstaculos.crearObstaculo();
        
        // Carga de suelo
        this.suelo = new Suelo(this);
        this.suelo.crearSuelo();

        // Carga monedas: 
        this.monedas = new Monedas(this);
        this.monedas.crearMoneda();
        
        // Colisiones
        this.physics.add.collider(this.player, this.suelo.sueloGrupo);

        // this.physics.add.collider(this.player, this.obstaculos.soporte);
        
        this.physics.add.overlap(this.player, this.monedas.monedas, (a, b) => this.monedas.addCoin(b));
        // Camera
        this.cameras.main.startFollow(this.player, false, 1, 0, constants.CAMARA.x, constants.CAMARA.y);
    }

    update(time, delta) {
        let Time = Math.round(time / 100);
        if(Time != this.timmer) {
            DataBase.points = Time;
            this.timmer = Time;
        }
        this.player.update(delta);
        this.suelo.update(delta);
        this.obstaculos.update(time);
        this.monedas.update(time);
    }
}

export default Play;
