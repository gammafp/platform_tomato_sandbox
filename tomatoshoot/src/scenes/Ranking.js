import helps from '../share/helpers.js';
class Ranking extends Phaser.Scene {
    constructor() {
        super({key: 'Ranking'});
    }
    
    create() {
        this.add.text(helps.C_WIDTH(this), 100, 'Ranking', {color: '#fff'}).setOrigin(0.5);
        this.input.on('pointerdown', () => {
            this.scene.start('Ranking');
        });    
    }

    update() {

    }
}

export default Ranking;
