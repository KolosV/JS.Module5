const result = +prompt('Введите Ваше значение', '')
if (typeof +result !== 'number') {
  alert('Упс, кажется, вы ошиблись')
} else if (isNaN(result % 2)) {
  alert('Ошибка, введено не число. Повторите попытку')
} else if (result % 2 === 0) {
  alert('Число четное')
} else {
  alert('Число нечетное')
}