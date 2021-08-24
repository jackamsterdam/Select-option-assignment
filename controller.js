//TODO: Enter logic to make sure what is entered is a number
/**
 * !Break it down:
   So we need to choose the fruit and multiply the Quantity of the fruit * Price
 */

let fruit = document.querySelector('select')
let quantity = document.querySelector('.quantity-box')
    //   why cant i do this: let quantity = document.querySelector('.quantity-box').value


function calculatePtimesQ() {
    console.log('you just clicked the button')
    console.log('fruit chosen:', fruit.value)
    console.log('quantity.value:', +quantity.value)

}