import UI from './scenes/UI.js';
import Menu from './scenes/Menu.js';
import Play from './scenes/Play.js';
import Gameover from './scenes/Gameover.js';
import Bootloader from './Bootloader.js';

const config = {
    title: "cuirum",
    width: 320,
    height: 180,
    type: Phaser.AUTO,
    parent: "container",
    backgroundColor: "#c7ecee",
    pixelArt: true,
    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 900,
            },
            // debug: true
        }
    },
    scene: [Bootloader, Menu, Play, Gameover, UI]
};

new Phaser.Game(config);