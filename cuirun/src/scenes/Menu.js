import DataBase from '../DataBase.js';
class Menu extends Phaser.Scene {
    constructor() {
        super({
            key: 'Menu'
        });
    }

    preload() {

    }

    create() {
        // this.scene.launch('Play');
        this.scene.launch('Gameover');
    }

    update() {

    }
}

export default Menu;