export { priceList }

//these names have to be the same as the values in each <option> for it to work. right? do i really need to match these names?
//how to make a dollar sign after $9.90 and keep it as a number??

/**
 * ?These are a list of prices of each fruit. we need to take the price of each fruit and multiply it with the quantity: 
 */
let priceList = {
    smithApples: 9.90,
    pinkLadyApples: 19.90,
    hermanApples: 14.90,
    bananas: 6.50,
    watermelon: 4.90,
    mango: 24.90

}

//destructure: let {smithApples} = priceList