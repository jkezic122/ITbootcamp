// Написати функцију која исписује све елементе низа који су дељиви са 5

function divisibleByFive(arr) {
    let newarr = []
    for (let el of arr) {
        if (el % 5 == 0) {
            newarr.push(el)
        }
    }
    console.log(newarr)
}

divisibleByFive([1, 2, 3, 4, 5, 10, 15, 23, 1, 5])
