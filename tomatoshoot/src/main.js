import Bootloader from './Bootloader.js';
                
const config = {
    title: "tomatoshoot",
    width: 180,
    height: 320,
    type: "Phaser.AUTO",
    parent: "container",
    backgroundColor: "#ffffff",
    pixelArt: true,
    scene: [
        Bootloader
    ]
};

new Phaser.Game(config);