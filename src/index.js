module.exports = function toReadable(number) {

  const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tensWords = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  // проверяем является ли число 0
  if (number === 0) {
    return numberWords[0];
  }

  // проверяем является ли число 1-19
  if (number < 20) {
    return numberWords[number];
  }

  // переменной с пустой строкой конкатенацией будем добавлять следуещие числа:
  let result = '';

  // если число больше 99 выполняем код ниже, в противном случае пропускаем эту инструкцию
  if (number >= 100) {
    result += numberWords[Math.floor(number / 100)] + ' hundred ';
    number %= 100;
  }
  
  // если число больше 19 выполняем код ниже, в противном случае пропускаем эту инструкцию
  if (number >= 20) {
    result += tensWords[Math.floor(number / 10)] + ' ';
    number %= 10;
  }

  if (number > 0) {
    result += numberWords[number];
  }

  return result.trim();

}