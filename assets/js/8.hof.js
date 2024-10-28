const numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.map()

// 1. CUSTOM HUF

// function sayHello() {
//     console.log("Hello, apa kabar?")
// }

// function sayGoodMorning() {
//     console.log("Hello, selamat pagi!")
// }

// function printWithTimeout(cb) {
//     console.log("Waiting for device...")
//     console.log("Found device : X")
//     console.log("Star printing...")
//     setTimeout(() => {
//        cb()
//         console.log("Finish printing!")
//     }, 3000)
// }

// printWithTimeout(sayGoodMorning)

// SISTEM PURCHASE

// function discount25(price) {
//     return price - (price * 25 / 100)
// }

// function discount50(price) {
//     return price - (price * 50 / 100)
// }

// function discount100(price) {
//     return price - (price * 100 / 100)
// }

// function purchase(price, callback) {
//     const discoundtedPrice =callback(price)
//     console.log(`Final price : ${discoundtedPrice}`)
// }

// purchase(5000, discount100)

// function purchasewithDiscount25(price, callback) {
//     const discoundtedPrice = price - (price * 25 / 100)
// console.log(`Final price : ${discoundtedPrice}`)
// }

// function purchasewithDiscount50(price, callback) {
 //    const discoundtedPrice = price - (price * 50 / 100)
 //    console.log(`Final price : ${discoundtedPrice}`)
// }

// function purchasewithDiscount100(price, callback) {
//     const discoundtedPrice = price - (price * 100 / 100)
//     console.log(`Final price : ${discoundtedPrice}`)
// }

// purchaseWithDiscount100(5000)

// 2. HOF BUILT-IN

// 0. PRECEDURAL
//  const number = {1,2,3,4,5,6,7,8,9,10}


// let result = 0

// for(let index = 0; index < numbers.length; index ++) {
//     result += numbers{index}
// }

// console.log(result)

// 1. FOREACH

// const numbers = {1,2,3,4,5,6,7,8,9,10}

// let result = 0

// number.forEach((number) => {
//     result += number
// })

// console.log(result)

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// let doubledNumber = []

// numbers.forEach(number => {
//     doubledNumber.push(number * 2)

// console.log(doubledNumber)

// 2. MAP

// const numbers = {1,2,3,4,5,6,7,8,9,10}

// constdoubledNumbers = numbers.map(number => {
 //    return number * 2
// })

// let result = 0

doubledNumbers.forEach((doubledNumber) => {
//     result += doubledNumber
// })

// })

// console.log(doubledNumbers)