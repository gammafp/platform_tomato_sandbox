import helps from '../share/helpers.js';

class Story extends Phaser.Scene {
    constructor() {
        super({key: 'Story'});
    }
    
    create() {
        this.add.text(helps.C_WIDTH(this), 100, 'Scene story', {color: '#fff'}).setOrigin(0.5);
        this.input.on('pointerdown', () => {
            this.scene.start('Game');
        });        
    }

    update() {

    }
}

export default Story;
