class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }

    preload() {
        this.load.path = './assets/';

        this.load.animation('cobayaData', 'cobaya/cobaya_anim.json');
        this.load.atlas('cobaya', 'cobaya/cobaya.png', 'cobaya/cobaya_atlas.json');

        this.load.animation('monedasData', 'objetos/monedas/monedas_anim.json');
        this.load.atlas('monedas', 'objetos/monedas/monedas.png', 'objetos/monedas/monedas_atlas.json');

        this.load.image('suelo', 'objetos/suelos/suelo.png');

        this.load.atlas('obstaculo', 'objetos/obstaculos/aro.png', 'objetos/obstaculos/aro_atlas.json');

        this.load.image('comidita', 'objetos/adornos/comidita.png');

        this.load.json('fontJSON', 'fonts/16/font.json');
        this.load.image('font', 'fonts/16/font.png');

        this.load.json('fontTintJSON', 'fonts/16_tint/font_tint.json');
        this.load.image('font_tint', 'fonts/16_tint/font_tint.png');

        this.load.atlas('confetis', 'objetos/adornos/confetis/confetis.png', 'objetos/adornos/confetis/confetis_atlas.json');

        this.load.on('complete', () => {
            const fontJSON = this.cache.json.get('fontJSON');
            this.cache.bitmapFont.add('pixel2', Phaser.GameObjects.RetroFont.Parse(this, fontJSON));
    
            const fontTintJSON = this.cache.json.get('fontTintJSON');
            this.cache.bitmapFont.add('pixel2Tint', Phaser.GameObjects.RetroFont.Parse(this, fontTintJSON));
    
            this.scene.start('Menu');
        });
    }

    create() {

    }
}
export default Bootloader;