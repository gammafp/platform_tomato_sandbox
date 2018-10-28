import Main from './scenes/Main.js';
import History from './scenes/History.js';
import Ranking from './scenes/Ranking.js';
import Game from './scenes/Game.js';
import Ending from './scenes/Ending.js';
import Bootloader from './Bootloader.js';

const config = {
    title: "tomatoshoot",
    width: 180,
    height: 320,
    type: "Phaser.AUTO",
    parent: "container",
    backgroundColor: "#ffffff",
    pixelArt: true,
    scene: [Bootloader, Main, History, Ranking, Game, Ending]
};

new Phaser.Game(config);