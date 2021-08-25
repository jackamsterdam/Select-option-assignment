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
        injection.innerText = 'Please enter number of kilograms only  ' /* extra space doesnt do anything? */
        return
    }
    /***End form validation */

    let fruitFinalPrice = pQ() //is there a way not to save this to a variable and use the answer outside the function?? for the switch that comes after?

    function pQ() {
        let fruitPrice = fruitQuantity * priceList[fruitName]
        console.log('fruitPrice', fruitPrice)
        return fruitPrice
    }
    console.log('fruitFinalPrice:', fruitFinalPrice)

    displayPayment()

    function displayPayment() {
        injection.style.display = 'block';
        injection.innerText = `You final payment is: $${fruitFinalPrice}`
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








}
console.log(priceList)
    // console.log(priceList.bananas) immported from model.js