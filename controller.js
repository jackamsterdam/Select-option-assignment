import { priceList } from './model.js';


//TODO: Enter logic to make sure what is entered is a number
//Todo  try doing it with radio button and datalist(with input)
//TODO: onchange()
//Todo: put back the grocery image and uncomment the form so will work
/**
 * Break it down:
   So we need to choose the fruit and multiply the Quantity of the fruit * Price
 */

let fruit = document.querySelector('select')
let quantity = document.querySelector('.quantity-box')
    //   why cant i do this: let quantity = document.querySelector('.quantity-box').value
let calcBtn = document.querySelector('.calculate-btn')
let injection = document.querySelector('.injection')


//      בעיה זה נמצא בעמוד האחר אז כרגע הוא לא ימצא אותו מה עושים???
// let cartInjection = document.querySelector('.cart-injection')
// console.log(cartInjection)



//document.querySelector('.calculate-btn').addEventListener('click', calculatePtimesQ)
calcBtn.addEventListener('click', calculatePtimesQ)



function calculatePtimesQ() {
    injection.style.display = "none"
    injection.classList.add('success')
    console.log('you just clicked the calculatePtimesQ button')
    console.log('fruit.value:', fruit.value)
    console.log('quantity.value:', +quantity.value)
    console.log('priceList.smithApples:', priceList.smithApples)
    console.log('priceList[fruit.value], This gives me the fruit that the user selects and checks it with my priceList', priceList[fruit.value])

    let fruitName = fruit.value
    let fruitQuantity = +quantity.value
    console.log('fruitName:', fruitName)
    console.log('fruitQuantity:', fruitQuantity)

    // שתי שורות הבאות לא נכונות
    // if (fruit.value === priceList.smithApples) console.log('yesh')
    // if (fruitQuantity === priceList[fruitName]) console.log('yesh')

    // Form Validation:

    if (isNaN(fruitQuantity)) {
        injection.style.display = "block"
        injection.classList.remove('success')
        injection.classList.add('error')
        injection.innerText = 'Please enter number of kilograms only  ' /* extra space doesnt do anything? */
        return
    }
    /***End form validation */

    let fruitFinalPrice = pQ() //is there a way not to save this to a variable and use the answer outside the function?? for the switch that comes after?

    function pQ() {
        let fruitPrice = fruitQuantity * priceList[fruitName]
            // console.log('fruitPrice', fruitPrice)
        return fruitPrice
    }
    console.log('fruitFinalPrice:', fruitFinalPrice)

    displayPayment()

    function displayPayment() {
        injection.style.display = 'block';
        injection.innerText = `You final payment is: $${fruitFinalPrice.toFixed(2)}`
            //return Do i have to return???
            //should i add Number.parseFloat(x).toFixed(2); ??
    }




    // switch staying in same page:

    // switch (fruitName) {
    //   case value:

    //     break;

    //   default:
    //     break;
    // }






    //Question can I assign switch to a variable???  let theswitch = switch(fruitname) for example??
    // switch (fruitName) {
    //     case fruitName:
    //         // injection.style.display = "block"
    //         cartInjection.innerText = fruitFinalPrice; //why is this null? becasue its on a different hmtl page
    //         console.log(fruitFinalPrice)
    //         console.log('hi')
    //         break;

    // }

    // *******************************הערה
    // different way: by השמה of a function to the element instead of putting it directly on it.
    // 1.instead of:(Enter your name: <input type="text" id="fname" onchange="myFunction()"></input>)
    // do: 
    // 2. Enter your name: <input type="text" id="fname">
    // document.getElementById("fname").onchange = function() {
    //   myFunction()
    //   };
    // function myFunction() {
    //   var x = document.getElementById("fname");
    //   x.value = x.value.toUpperCase(); or -->  x.value = e.target.value.toUpperCase()
    // }
    // 3.third way obviously is: <input type="text" id="fname">
    //  document.getElementById('fname').addEventListener('change' myFunction) ' (without calling it)
    // *******************************סיום הערה




}
//Taken from model.js page:
console.log('priceList', priceList)
    // console.log(priceList.bananas) immported from model.js




fruit.addEventListener('change', touched)

function touched(e) {
    //console.log(e.target)
    console.log(`I saw that you might like ${e.target.value}`)
        //console.log(e)
}

// another way to add onchange:  but i think you can add only one function like this not two. right?
// document.getElementById("fruit").onchange = function() {
//     console.log('hi')
// } 
//or just put in directly in html onchange="myFunction(); secondFunction();"
//  הערה:
//  document.getElementById("fruit").onchange = לא עובדsecondFunction() { אתתה לא יכול לקרא לזה כך
//    console.log('second hi')
//  }


// you cant do this though because you are just reassigning the anonymous function. only the second function will work:
// document.querySelector(".ff").onchange = function() {
//     console.log('hi')
// }
// document.querySelector(".ff").onchange = function() {
//     console.log('second hi')
// }
// But this works with add event listener giving multiple functions to same element when event changed happens:
// document.querySelector('.fff').addEventListener('change', dothis)
// document.querySelector('.fff').addEventListener('change', secondDothis)

// function dothis() {
//     console.log('addevent hi')
// }

// function secondDothis() {
//     console.log('second addevent hi')
// }





//so how to use the same function for multiple buttons on one page?
// let btnForRadio = document.querySelector('#btnForRadio')
// btnForRadio.addEventListener('click', calculatePtimesQ())