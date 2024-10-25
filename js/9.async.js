// 1.ASYNCHRONOUS

// console.log("Hello 1")
// seTimeout(() => {
//     console.log("Hello 2")
// }, 3000)
// console.log("Hello 3")

// 2. Promise => "saya berjanji..."

// STATUS =>
// PENDING => menunggu status,
// RESOLVED => ditepati,
// REJECTED => diingkari

// function janjiBayarHutang(sudahBayarHutang){
//   return new Promise((resolve, reject) => {
//   if(sudahBayarHutang) {
//     resolve("sudahBayarHutang!");
//   } else {
//     reject("Galbay hutang!");
//   }
//  });
// }

// janjiBayarHutang(false)
//   .then(message => console.log(message))
//   .catch(errorMessage => console.log(errorMessage));

// 3. ASYNC-await

// function janjiBayarHutang(sudahBayarHutang) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (sudahBayarHutang) {
//                resolve('SudahBayarHutang!')
//             } else {
//                 reject('Galbay hutang!')
//             }
//        }, 3000)
//     })
// }

// async function prosesJanji() {
//     try {
//      const message = await janjiBayarHutang(false)
//      console.log(message)
//   }  catch(erreorMessage) {
//     console.log(errorMessage)
//   }
// }

// prosesJanji()

// 4. AJAX

const xhr = new XMLHttpRequest();

// GET, POST, PUT, PATCH, DELETE

// xhr.open("GET", "https://www.npoint.io/docs/b73334cda3fb692d60fa", true);

// xhr.onerror = () => {
//     console.log("Network error!");
// };

// xhr.onload = () => {
//     const parsed = JSON.parsed(xhr.response);

//     console.log(parsed)
// };

// xhr.send();