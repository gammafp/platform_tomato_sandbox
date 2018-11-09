class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }

    preload() {
        this.load.path = './assets/';

        this.load.animation('cobayaData', 'cobaya/guinea_anim.json');
        this.load.atlas('cobaya', 'cobaya/guinea.png', 'cobaya/guinea_atlas.json');

        this.load.animation('monedasData', 'objetos/monedas/monedas_anim.json');
        this.load.atlas('monedas', 'objetos/monedas/monedas.png', 'objetos/monedas/monedas_atlas.json');

        this.load.image('suelo', 'objetos/suelos/suelo.png');

        this.load.atlas('obstaculo', 'objetos/obstaculos/aro.png', 'objetos/obstaculos/aro_atlas.json');

        this.load.on('complete', () => {
            this.scene.start('Menu');
        });
    }

    create() {

    }
}
export default Bootloader;