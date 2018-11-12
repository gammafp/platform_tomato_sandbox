import DataBase from '../DataBase.js';
import Suelo from '../objetos/suelo.js';
import constants from '../share/const.js';
import helpers from '../share/helpers.js';

import Confetis from '../objetos/confetis.js';
import Cobaya from '../player/cobaya.js';

class Gameover extends Phaser.Scene {
    constructor() {
        super({
            key: 'Gameover'
        });

    }

    preload() {
        // Carga de suelo
        this.suelo = new Suelo(this);

        // Cargar plato
        this.player = new Cobaya({
            key: 'cobaya',
            x: 60,
            y: helpers.HEIGHT(this) - constants.SUELO.height - 16,
            scene: this
        });

        this.add.image(helpers.WIDTH(this), helpers.HEIGHT(this) - 38, 'comidita');

        // confetis
        this.confetis = Confetis(this);
        this.confetis();
      
        // Camera
        this.cameras.main.startFollow(this.player, false, 0, 0, constants.CAMARA.x - 100, constants.CAMARA.y, false);
    }

    create() {
        
        this.cameras.main.fadeIn(300);

        // console.log(DataBase.saveData());
        console.log("Punto anterior", DataBase.points);
        console.log('Dinero ', DataBase.coinCollect);
        console.log('Max POint', DataBase.maxPoints());
        
        const lastPoint = DataBase.points;
        const coin = DataBase.coinCollect;
        const maxPoints = DataBase.maxPoints();

        if (lastPoint > maxPoints) {
            console.log("CONFETTIIIIIIII....");
        }


        // setTimeout(() => this.scene.start('Play'), 2000 );

        this.suelo.crearSuelo();
        // Colisiones
        this.physics.add.collider(this.player, this.suelo.sueloGrupo);

        // Animación de comida
        this.player.anims.play('run');
        this.tweens.add({
            targets: this.player,
            duration: 2000,
            x: 285,
            onComplete: () => {
                this.player.anims.play('eat');
                this.player.body.setSize(30, 27);
            }
        });
    }

}

export default Gameover;