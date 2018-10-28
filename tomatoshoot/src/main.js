import Bootloader from './Bootloader.js';
import Main from './scenes/Main.js';
import Story from './scenes/Story.js';
import Ranking from './scenes/Ranking.js';
import Game from './scenes/Game.js';
import Ending from './scenes/Ending.js';

const config = {
    title: "tomatoshoot",
    width: 180,
    height: 320,
    type: Phaser.AUTO,
    parent: "container",
    backgroundColor: "#e67e22",
    pixelArt: true,
    scene: [Bootloader, Main, Story, Ranking, Game, Ending]
};

new Phaser.Game(config);