// Написати функцију која израчунава цену пице по квадратном центиметру (параметри функције су полупречник у цм, и цена пице)

function picaPoCmNa2(r, cena) {
    if (r > 0 && cena > 0) {
        console.log(cena / (Math.pow(r, 2) * Math.PI))
    }
}
picaPoCmNa2(20, 1000);