/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string


// Print out the concatenated string
const tongueTwister = s1 + ' ' + s2 + ' ' + s3 + ' ' + s4 + ' ' + s5
console.log(tongueTwister);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

const convertLastLatter = (str) => {
    const lastIndex = str.length - 1
    return str.slice(0, lastIndex) + str[lastIndex].toUpperCase()
}
const result = convertLastLatter(part1) + convertLastLatter(part2)
console.log(result);
// Convert the last letter of part1 and part2 to uppercase and concatenate the strings


// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)


// Print out the tipAmount
const tipAmount = billTotal * 0.15
console.log(tipAmount);


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let randomNumber = Math.round(Math.random() * 10)
console.log(randomNumber);

// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //false
console.log(expression1);
const expression2 = a || b; // true
console.log(expression2);
const expression3 = !a && b; //false
console.log(expression3);
const expression4 = !(a && b);//true
console.log(expression4);
const expression5 = !a || !b; //true
console.log(expression5);
const expression6 = !(a || b);//false
console.log(expression6);
const expression7 = a && a; //true
console.log(expression7);
