// Acá hay funciones de ayuda
// Entre ellas tenemos el alto y ancho total del lienzo y la mitad del lienzo
const WIDTH = (x) => x.sys.game.config.width;
const HEIGHT = (x) => x.sys.game.config.height;
const C_WIDTH = (x) => WIDTH(x)/2;
const C_HEIGHT = (x) => HEIGHT(x)/2

const EE = new EventEmitter3();

export default {C_WIDTH, C_HEIGHT, WIDTH, HEIGHT, EE};