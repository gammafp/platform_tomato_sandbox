import Bootstrap from './bootstrap.js';
const config = {
    width: 300,
    height: 200,
    parent: 'container',
    backgroundColor: '#7ed6df',
    pixelArt: true,
    scene: [Bootstrap]
}

new Phaser.Game(config);