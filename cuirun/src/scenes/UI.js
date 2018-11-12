import helpers from '../share/helpers.js';
import DataBase from '../DataBase.js';

class UI extends Phaser.Scene {
    constructor() {
        super({key: 'UI'});
    }
    
    preload() {
        this.timmer = 0;
        this.acumulador = 0;
        DataBase.coinCollect = DataBase.money();
        this.bestPointsDB = DataBase.maxPoints();
        this.gameOver = false;
    }

    create() {
  
        // Puntos
        this.pointsCollect = this.add.dynamicBitmapText(helpers.WIDTH(this) - 70, 10, 'pixel2Tint', '0000000', 8, 1)
        .setTint(0x1289A7)
        .setScrollFactor(0);

        // Best points
        this.add.dynamicBitmapText(helpers.C_WIDTH(this), 10, 'pixel2Tint', 'BEST', 8, 1).setOrigin(.5)
        .setScrollFactor(0)
        .setTint(0x12CBC4);
        
        this.bestPoints = this.add.dynamicBitmapText(helpers.C_WIDTH(this), 20, 'pixel2Tint', this.bestPointsDB, 8, 1).setOrigin(.5)
        .setTint(0x1289A7)
        .setCenterAlign()
        .setScrollFactor(0);

        // Monedas
        this.coins = this.add.sprite(15, 15, 'monedas').setScrollFactor(0);
        this.coins.anims.play('moneda');
        this.coins.anims.setTimeScale(0.8);

        this.coinsCollect = this.add.dynamicBitmapText(28, 12, 'pixel2Tint', `${DataBase.coinCollect}`.padStart(5, '0'), 8, 1)
        .setScrollFactor(0)
        .setTint(0xFFC312, 0xFFC312, 0xEE5A24, 0xEE5A24);

        helpers.EE.on('coin_add', (coin) => {
            DataBase.coinCollect += coin;
            this.coinsCollect.setText(`${DataBase.coinCollect}`.padStart(5, '0'));
        });
        helpers.EE.on('game_over', () => {
            this.gameOver = true;
        });
    }

    update(time, delta) {
        this.acumulador += delta;
        let Time = Math.round(this.acumulador / 100);

        if (Time != this.timmer && !this.gameOver) {
            this.pointsCollect.setText(('' + Time).padStart(7, '0'));
            DataBase.points = Time;
            if(Time > this.bestPointsDB) {
                this.bestPoints.setText(Time);
                this.bestPoints.setTint(0x1289A7);
            }
            this.timmer = Time;
        }
    }
}

export default UI;
