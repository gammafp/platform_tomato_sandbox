
class Main extends Phaser.Scene {
    constructor() {
        super({key: 'Main'});
    }
    
    preload() {
        console.log('Scene: Main');
    }

    create() {
        this.add.image(this.sys.game.config.width/2, this.sys.game.config.height/2, 'logo_gamma');
    }

    update() {

    }
}

export default Main;
