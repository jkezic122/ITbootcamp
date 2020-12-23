// SREDA

//1. Направити објекат покемон који садржи следеће информације:
//  (Направите макар 4 различита покемона)

// *Име
// *Врста
// *Способности (низ способности покемона)
// *Карактеристике (објекат са информацијама : напад (број), одбрана (број), брзина (број))


// Даље, направити низ од ових објеката

// пикачу:
// име: пикачу
// врста: електрични
// способности: Статички електрицитет,...
// карактеристике: напад: 55, одбрана: 30, брзина: 90
let pokemoni = [
    {
        ime: 'Pikachu',
        vrsta: 'Electric',
        sposobnosti: ['static', 'lightning rod'],
        karakteristike: {
            napad: 55,
            odbrana: 30,
            brzina: 90
        }
    },
    {
        ime: 'Snorlax',
        vrsta: 'Normal',
        sposobnosti: ['immunity', 'thick fat'],
        karakteristike: {
            napad: 110,
            odbrana: 65,
            brzina: 30
        }
    },
    {
        ime: 'Gengar',
        vrsta: 'Ghost',
        sposobnosti: ['cursed body'],
        karakteristike: {
            napad: 65,
            odbrana: 60,
            brzina: 110
        }
    },
    {
        ime: 'Bulbasaur',
        vrsta: 'Grass',
        sposobnosti: ['overgrow'],
        karakteristike: {
            napad: 49,
            odbrana: 49,
            brzina: 45
        }
    }
]

//2. Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона

function sposobnostiPokemona(pokemoni) {
    let tmp = []
    pokemoni.forEach(pokemon => pokemon.sposobnosti)

    for (let el of pokemoni)
        tmp.push(el.sposobnosti)

    return tmp
}
console.log(sposobnostiPokemona(pokemoni))

console.log('----------------')

//3. Сортирати покемоне по брзини, растуће.
console.log(pokemoni.sort((a, b) => a.karakteristike.brzina - b.karakteristike.brzina))

// NEDELJA

//4. Направити функцију која прима низ покемона,
//  пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.


//5. За дати html направити скрипту која:

//     <div class="wrapper">
// 		<button id="prikaz">PRIKAZI POKEMONE</button>
// 		<button id="pobednik">PRIKAZI NAJJACEG POKEMONA</button>
// 	</div>

// *На клик на дугме прикажи покемоне приказује све покемоне из низа у формату :
//     <div>
//         <p>Opis pokemona</p>
//         <img src="slika odgovarajućeg pokemona">
//     </div>

// *На клик на дугме прикажи најјачег покемона приказује покемона који има најјачи напад
//  (користити већ написану функцију иѕ 4. задатка) по истом формату.


//6. На страници постоје 2 дугмета за наручивање (као на страници пицерије, ORDER) И постоје 2 дугмета за наручивање одмах

//i. Дугмићи за 'наручивање' повећавају бројач
//ii. Дугмићи за 'наручивање одмах' ресетују бројач на нула и исписују додатну поруку (Порука у облику: Наручили сте [X] пица, [ danasnji datum i vreme ])
//  Напомена: X је бројач, проверити да ли је бројач 0, и ако јесте кликом на наручивање одмах избацује одговарајућу поруку за грешку