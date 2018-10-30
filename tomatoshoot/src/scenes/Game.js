import helps from '../share/helpers.js';
class Game extends Phaser.Scene {
    constructor() {
        super({key: 'Game'});
    }
    
    create() {
        this.add.text(helps.C_WIDTH(this), 100, 'Game scene', {color: '#fff'}).setOrigin(0.5);
    }

    update() {

    }
}

export default Game;
