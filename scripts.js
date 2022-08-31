console.log('veikia')

//1. Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų.
//Tiems darbuotojams, kurie dirba ilgiau nei 10 metų - prideda papildomus 50 eurų (bendrai - 100 eurų).
//O jei dirba 20 metų ar daugiau - papildomus 100 eurų (iš viso - 200 eurų).
//Parašyk programą, kuri leistų darbuotojui įsivesti skaičių kiek dirbo metų įmonėje, input elementu - atsirastų tekstas su pervedamu bonusu.
//Pvz: [16] => "Jūsų bonusas: 100 eurų".

// document.querySelector('form').addEventListener('submit', myFunction)
// function myFunction (event) {
//     event.preventDefault ()
//     const result = document.querySelector('input[name=years]').value
//     console.log(result)
    // if (result >= 10 && result < 20) {
    //     document.querySelector('h1').innerHTML = "Gaunate Kalėdų bonusą - 100EUR"
    // } if (result >= 20) {
    //     document.querySelector('h1').innerHTML = "Gaunate Kalėdų bonusą - 200EUR"
    // } else {
    //     document.querySelector('h1').innerHTML = "Gaunate Kalėdų bonusą - 50EUR"
    // }

//     let bonus = 50;
//     if (result >= 10) {
//         bonus += 50;
// }
//     if (result >= 20) {
//         bonus += 100;
// }
    // document.querySelector('h1').innerText = `Jūsų premija: ${bonus}`
// }


//2. Kiek dienų šiais metais? Parašykite programą, kur įvedus metus - pasakys
// ar jie keliemieji, ar ne (po forma). Kaip apskaičiuoti ar keliemiji metai?
// Jie turi dalintis iš keturių, bet jei dalinasi iš 100, tai turi dalintis ir
// iš 400, kad būtų keliamieji (angl. a year is a leap year if it is divisible
// by four, except that any year divisible by 100 is a leap year only if it is
// also divisible by 400). Tai - populiari užduotis, tad internete rasite
// ne vieną versiją, ir daug teorijos kaip skirtingi žmonės skaičiuoja.
// Tad rekomenduojame padarius - pasitikrinti ir kitų žmonių idėjas.

// document.querySelector('form').addEventListener('submit', (event) => {
//     event.preventDefault()
//     const years = document.querySelector('input[name=years]').value
//     console.log(years)
//     if ((years % 4 ==0) || (years % 100 !=0) && (years % 400 ==0)) {
//         document.querySelector('h1').innerText = 'Metai keliamieji'
//     } else {
//         document.querySelector('h1').innerText = 'Metai n4ra keliamieji'
//     }
// })


//3. Parašyk programą, kurioje vartotojas įrašo temperatūra Celsijumi,
// o programa paskaičiuoja ir atvaizduoja tą pačią temperatūrą Farenheitu.

// const celsius = document.querySelector('input[name=abc]').value
// console.log(celsius)
// const celsius1 = Number(celsius)
// const fahrenheit = (celsius1 * 1.8) + 32


// document.querySelector('form').addEventListener('submit', (event) => {
//     event.preventDefault()
//     console.log(fahrenheit)
//     document.querySelector('p').innerText = celsius1 + ' Celsijaus laispniu lygu ' + fahrenheit + ' Farenheito laispniams'
// })

//4. Sukurk programą, kurioje reikia įvesti elektroninį paštą ir paspausti mygtuką
// "sutinku gauti laiškus". Suvedus duomenis, jei mygtukas "sutinku"
// nepasirinktas - išmeta - "Registracija nesėkminga. Jei pasirinktas - išmeta
// "El. paštas [paštas] sėkmingai užregistruotas".

// function formSubmit(event) {
//     event.preventDefault()
//     const email = document.getElementById('email').value
//     console.log(email)
//     const agree = document.getElementById('checkbox').checked
//     document.querySelector('h1').textContent = agree ? 'El. paštas ${email} sėkmingai užregistruotas' : 'Registracija nesekmiga'
// }
// document.querySelector('form').addEventListener('submit', formSubmit)

//5.Sukurk programą, kurioje bus du inputai - vardas (text) ir skaičius (number)
//ir tuščias <ul>. Įrašius formoje duomenis, po apačia turi susikurti list itemų
//tiek, kiek tu parašei skaičių. List itemuose turi būti tavo vardas :)

// document.querySelector('form').addEventListener('submit', myFunction)
// function myFunction(event) {
//     event.preventDefault()
//     const myName = document.querySelector('input[name=abc]').value
//     const myNumber = document.querySelector('input[name=number]').value
//     const myNumber1 = Number(myNumber)
//     console.log(myName, myNumber1)
//     const list = document.querySelector('ul')
//     list.innerText = ''
//     for (let i=0; i < myNumber1; i++) {
//         const listItem = document.createElement('li')
//         listItem.innerText = myName
//         list.appendChild(listItem)
//     }
// }

//6. Sukurkite formą, kurioje vienas input - skaičius, įvesti stačiakampio dydį.
//Po forma - tegul būna tusčias div elementas. Jame reikia atvaizduoi trikampį
//pagal įvestą input. Šis pratimas - klasika programavimo ciklų srityje,
//tiek atsakymų, tiek teorijų, tiek sąmokslo teorijų internete - daugiau nei
//reikia; pasibaigus ar pastrigus - būtinai pasinagrinėkite
//(gal vienas iš paaiškinimų jums atvers duris į ciklų pasaulio aiškumą).

// document.querySelector('form').addEventListener('submit', myFunction)
// function myFunction (event) {
//     event.preventDefault()
//     let myNumber = Number(document.querySelector('input[name=rectangle]').value)
//     console.log(myNumber)
//     const outputElement = document.querySelector('p')
//     for (i=0; i < myNumber; i++) {
//         const newRow = document.createElement('div')
//         newRow.innerText += '*'
//         outputElement.appendChild(newRow)
//     }
// }


function myFunction(event) {
    event.preventDefault();
    let myNumber = Number(document.querySelector('input[name=rectangle]').value);
    const outputElement = document.querySelector('p');
  
    let output = '';
    for (i = 0; i < myNumber; i++) { 
      for (j = 0; j <= i; j++) {
        output += "*";
      }
      output += "<br>";
      outputElement.innerHTML = output;
    }
  }

  document.querySelector('form').addEventListener('submit', myFunction);