class Bootstrap extends Phaser.Scene {
    constructor() {
        super({key: 'Bootstrap'});
    }
    preload() {
        console.log('Bootstrap preload')
    }
    create() {
        console.log('Bootstrap create')
    }
}
export default Bootstrap;