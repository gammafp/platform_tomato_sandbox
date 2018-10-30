import helpers  from '../share/helpers.js';

class Main extends Phaser.Scene {
    constructor() {
        super({key: 'Main'});
    }
    
    preload() {
        console.log('Scene: Main');
    }

    create() {
        this.add.image(helpers.C_WIDTH(this), helpers.C_HEIGHT(this), 'logo_gamma');        
        this.input.on('pointerdown', () => {
            console.log('Se ha hecho pointer');
            this.scene.start('Story');
        });
    }

    update() {

    }
}

export default Main;
