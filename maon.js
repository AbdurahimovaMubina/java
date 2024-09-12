alert("Sizda hozir random sonlar chiqishni boshlidi 😉")


let randomNum = Math.floor(Math.random() * 100)

alert(`Random son ${randomNum} chiqdi`)

let firstNum = randomNum * 2 
let secondNum = randomNum / 2 
let third = randomNum % 3


alert(`
    Random son ${randomNum} edi,
    ${randomNum} ni 2 ga ko'paytirganimizda ${firstNum},
    ${randomNum} ni 2 ga bo'lgada ${secondNum},
    ${randomNum} ni 3 ga bo'lganda ${third} qoldiq chiqadi
`)