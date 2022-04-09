function countPrimes(number) {
    if( number < 0){
      return 0;
    }
    let count = 0;
    for (let index = 1; index < number; index++){
      if(itsPrimeNumber(index)){
        count += 1;
      }
    }
  
    return count;
}

function itsPrimeNumber(number) {
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number !== 1;
}

module.exports = countPrimes;