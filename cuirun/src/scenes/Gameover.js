import DataBase from '../DataBase.js';

class Gameover extends Phaser.Scene {
    constructor() {
        super({key: 'Gameover'});
    }
    
    preload() {
        console.log('Scene: Gameover');
    }

    create() {
        DataBase.saveData(DataBase.coinCollect, DataBase.points);
        console.log('Puntos máximos', DataBase.maxPoints()); 
        console.log('Puntos moonedas máximas', DataBase.coinCollect);       
    }
}

export default Gameover;
