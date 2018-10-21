class Tiled extends Phaser.Scene {
    constructor() {
        super({key: 'Tiled'}); 
    }
    preload() {
        console.log('Tiled cargado')
    }
}

export default Tiled;