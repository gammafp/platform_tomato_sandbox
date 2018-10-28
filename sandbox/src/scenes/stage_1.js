import Tomato from '../player/tomato.js';

class Stage_1 extends Phaser.Scene {
    constructor() {
        super('Stage_1');
    }
    create() {
        console.log('Create stage_1');
        // Escene - tile
        let map = this.make.tilemap({
            key: 'map'
        });

        let background = map.addTilesetImage('background');
        let layer_background = map.createStaticLayer(0, background, 0, -160);

        let tileset = map.addTilesetImage('tileset_tomato');
        let layer = map.createDynamicLayer(1, tileset, 0, 0);

        console.log(layer);
        // Set collision by property
        layer.setCollisionByProperty({
            collide: true
        });

        // This anims
        this.anims.fromJSON(this.cache.json.get('tomato_anim_json'));

        // Player    
        this.tomato = new Tomato({
            scene: this,
            key: 'tomato',
            x: 200,
            y: 6
        });

        this.physics.add.collider(this.tomato, layer);
        // Player 2   
        // this.tomato2 = new Tomato({
        //     scene: this,
        //     key: 'tomato',
        //     x: 190,
        //     y: 6
        // });
        // this.physics.add.collider(this.tomato2, this.tomato);

        // this.physics.add.collider(this.tomato2, layer);

    }

    update(time, delta) {
        this.tomato.update(delta);
    }
}

export default Stage_1;