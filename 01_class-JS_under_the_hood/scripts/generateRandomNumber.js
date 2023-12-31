//This algorithm generates a positive integer random number with
//a random amout of digits spececified by a max digit number
//first digit will neve be 0, and number of digits will be always more than 1
function generateRandomNumber(maxDigitNumber) {
    let digits;
    do{
        digits = Math.floor(Math.random() * maxDigitNumber + 1);
    }while(digits == 0); //number of digitis will never be 0
    
    let randomNumber = '';
    
    for (let i = 0; i < digits; i++) {
      let digit;
      do{
        digit = Math.floor(Math.random() * 10);
      }while(i == 0 && digit == 0); //number of first digit will never be 0

      randomNumber += digit.toString();
    }
    return randomNumber;
  }

  module.exports = generateRandomNumber;