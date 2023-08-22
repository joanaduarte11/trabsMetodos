/* REDUCE() */
const shop = [
    { clothe: "blazer", price: 300},
    { clothe: "camisa", price: 80},
    { clothe: "blusa", price: 45},
    { clothe: "tenis", price: 120} 
]

const totalPrice = shop.reduce( (prevVal, elem ) => prevVal + elem.price, 0 )

//console.log( totalPrice) 

/* FIND() */

const clothes = [
    { name: "blazer", price: 300},
    { name: "camisa", price: 80},
    { name: "Blusa", price: 45},
    { name: "tenis", price: 120} 
]

const foundClothes = clothes.find( clothes => clothes.name === "blazer")

//console.log( foundClothes )

/* EVERY() */

const freteGratis = (currentValue) => currentValue > 199;

const totalCompras = [465];

//console.log(totalCompras.every(freteGratis));

