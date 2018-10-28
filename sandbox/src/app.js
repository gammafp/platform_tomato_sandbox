import Bootloader from './scenes/bootloader.js';
import Tiled from './scenes/tiled.js';
import Stage_1 from './scenes/stage_1.js';

const config = {
    width: 320,
    height: 190,
    type: Phaser.AUTO,
    parent: 'container',
    backgroundColor: '#eee',
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 }
        }
    },
    scene: [Bootloader, Tiled, Stage_1]
}

new Phaser.Game(config);