class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        console.log('Bootloader');
        this.load.path = './assets/';
        this.load.image('logo_gamma', 'logo_gamma.png');
    }

    create() {
        this.scene.start('Main');
    }
}
export default Bootloader;