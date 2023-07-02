const x = prompt('Введите x', '') // использовала prompt, потому что слишком поздно заметила комментарий к задаче. Приношу свои извинения
if (typeof(x) === "number") {
  alert('x - число');
  } else if  (typeof(x) === "string") {
  alert('x - строка');
  }  else if  (typeof(x) === "boolean") {
     alert('x - логическое');
    } else {
      alert('Тип x не определен');
    }
