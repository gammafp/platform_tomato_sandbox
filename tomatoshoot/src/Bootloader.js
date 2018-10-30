import helpers  from './share/helpers.js';

class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }

    preload() {
        console.log('Bootloader :D');
        const progress = this.add.graphics();
        this.load.path = './assets/';

        this.load.image('logo_gamma', 'logo_gamma.png');

        this.load.on('progress', (value) => {
            progress.clear();
            progress.fillStyle(0xffffff, 1);
            progress.fillRect(0, helpers.C_WIDTH(this), this.sys.game.config.width * value, 60);
        });

        this.load.on('complete', () => {
            progress.destroy();
            this.scene.start('Main');
        });
    }
}
export default Bootloader;