class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }
    preload() {
        console.log('bootloader cargado');

        this.load.path = './assets/';

        this.load.tilemapTiledJSON('map', 'tomato_land.json');
        this.load.image('tileset_tomato', 'tileset_tomato.png');
        this.load.image('background', 'background.png');
    
        this.load.atlas('tomato', 'tomato/tomato.png', 'tomato/tomato_atlas.json');
        this.load.json('tomato_anim_json', 'tomato/tomato_anim.json');
    }
    create() {
        this.scene.start('Stage_1');
    }
}

export default Bootloader;