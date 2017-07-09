export function formatPrice(num) {
  num = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return num + ' р';
}

export function formatDays(num) {
  let suffix;
  num = num.toString();
  // 308 дней
  if (num.length > 1 && +num > 20) {
    const lastDigit = +(num.slice(-1));
    suffix = formatDays(lastDigit);
    
  }

  // один день
  if (num.length === 1 && +num === 1 ){
    suffix = 'день';
  }

  // два дня три дня
  if (num.length === 1 && +num > 1 && +num < 5){
    suffix = 'дня';
  }

  // пять дней => 20 дней 380 дней
  if (+num >= 5 && +num <= 20 || +num === 0){
    suffix = 'дней';
  }


  return suffix;
}
