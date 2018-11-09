import helpers from '../share/helpers.js';
import constants from '../share/const.js';
class Suelo {
    constructor(scene) {
        this.scene = scene;
        this.cantidadInicial = 4;
    }
    crearSuelo() {
        this.sueloGrupo = this.scene.physics.add.staticGroup({
            key: 'suelo',
            frame: 0,
            repeat: this.cantidadInicial,
            setXY: {
                x: 0,
                y: helpers.HEIGHT(this.scene),
                stepX: constants.SUELO.width
            }
        });
        this.sueloGrupo.children.iterate((x) => {
            x.setOrigin(0, 1);
        })
    
        this.sueloGrupo.refresh();
    }

    update() {     
        if(this.posSuelosRight(this.primerSuelo()) < this.scene.cameras.cameras[0].scrollX) {
            this.primerSuelo().destroy();
            this.crearNuevoSuelo();
        }        
    }

    // Obtenemos la posición exacta del primer suelo
    posSuelosRight(suelo) {
        return suelo.x + suelo.width;
    }

    // Obtenemos el primer suelo
    primerSuelo() {
        return this.sueloGrupo.getChildren()[0];
    }
    
    // Obtenemos el último suelo (normalmente lo usaremos para creación de nuevos suelos)
    ultimoSuelo() {
        const temp = this.sueloGrupo.getChildren();
        return temp[temp.length-1];
    }

    crearNuevoSuelo() {
        this.sueloGrupo.create(this.posSuelosRight(this.ultimoSuelo()), helpers.HEIGHT(this.scene), 'suelo')
            .setOrigin(0, 1)
            .refreshBody();
    }
    
}
export default Suelo;