const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

// 1
const divisibleByThree = pokemon.filter(p => p.id % 3 === 0);
console.log("pokemon with ID divisible by 3:", divisibleByThree);

// 2
const fireType = pokemon.filter(p => p.types.includes("fire"));
console.log("Fire-type pokemon:", fireType);

// 3
const multipleTypes = pokemon.filter(p => p.types.length > 1);
console.log("pokemon with multiple types:", multipleTypes);

// 4
const pkmnNames = pokemon.map(p => p.name);
console.log("Names of all pokemon:", pkmnNames);

// 5
const namesWithIdGreaterThan99 = pokemon.filter(p => p.id > 99).map(p => p.name);
console.log("Names of pokemon with ID > 99:", namesWithIdGreaterThan99);

// 6
const poisonOnly = pokemon.filter(p => p.types.length === 1 && p.types[0] === "poison").map(p => p.name);
console.log("pokemon whose only type is poison:", poisonOnly);

// 7
const firstTypeOfFlyingSecond = pokemon
    .filter(p => p.types[1] === "flying")
    .map(p => p.types[0]);
console.log("First type of pokemon with 'flying' as second type:", firstTypeOfFlyingSecond);

// 8
const normalTypeCount = pokemon.filter(p => p.types.includes("normal")).length;
console.log("Number of 'normal'-type pokemon:", normalTypeCount);
