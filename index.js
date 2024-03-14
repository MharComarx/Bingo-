console.log("Hello World!");

generateNumber (15);


function generateNumber (max) {
    // addition  "+"
    //subrtract "-"
    //multiply "*"
    //division "/"
    //remainder ""
    let randomNumber = Math.floor(Math.random() *max) +1;

    // if...else if...else
    //greater than>, greter than uqual>=,less than equal<=,equal=,not equal!=, and&&, or||
    if(randomNumber < 15){
        console.log('The Number is in B.');
    } else if (randomNumber > 16 && randomNumber < 30) {
        console.log('The Number is in I');
    }  else if (randomNumber > 31 && randomNumber < 45) {
        console.log('The Number is in N.');
    } else if ((randomNumber > 46 && randomNumber < 60) ) {
        console.log('The Number is in G.');

    } else if ((randomNumber > 61 && randomNumber < 99) ) {
        console.log('The Number is in O.');
    } else {
        console.log('The Number is invalid!');
    }

    return console.log(randomNumber);
}