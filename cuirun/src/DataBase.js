// Se guarda desde el gameOver
const saveData = (coins, maxpoints, lastPoints) => {
    const Data = { coins: 0, maxPoints: 0 };
    if (localStorage.getItem('gamma') != null) {
        const datos = JSON.parse(localStorage.getItem('gamma'));
        Data.coins = coins + money();
        Data.maxPoints = (maxPoints() > maxpoints) ? maxPoints() : maxpoints;
        Data.lastPoint = lastPoints;
    } else {
        console.log('Monedas colelccionadas en DB: ',coins);
        Data.coins = coins;
        Data.maxPoints = maxpoints;
        Data.lastPoint = lastPoints;
    }

    localStorage.setItem('gamma', JSON.stringify(Data));
}

// se obtiene desde getdata
const getData = () => {
    const data = (localStorage.getItem('gamma') != null) ?
        JSON.parse(localStorage.getItem('gamma')) : {
            coins: 0,
            maxPoints: 0
        };
    return data;
}

let money = (compra = false) => (compra) ? getData().coins - compra : getData().coins;
let maxPoints = () => getData().maxPoints;

let coinCollect = 0;
let points = 0;

export default {
    money,
    maxPoints,
    points,
    coinCollect,
    saveData,
    getData
}