(function() {
  var contador = 0;

  setInterval(setDates, 1000);

  function setDates() {
    var date = new Date;
    var hour = date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + String(date.getMinutes()):
                  date.getMinutes();
        hourTitle = document.getElementById('hour');

    if (!contador) {
      hourTitle.textContent = hour + ':' + minutes;
      contador = 1;
    }
    else {
      hourTitle.innerHTML = hour + '<span class="hidden">:</span>' +
                            minutes;
      contador = 0;
    }

    var day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear(),
        dateSubtitle = document.getElementById("date");

    switch (month) {
      case 0: month = '一月'
        break;
      case 1: month = '二月'
        break;
      case 2: month = '三月'
        break;
      case 3: month = '四月'
        break;
      case 4: month = '五月'
        break;
      case 5: month = '六月'
        break;
      case 6: month = '七月'
        break;
      case 7: month = '八月'
        break;
      case 8: month = '九月'
        break;
      case 9: month = '十月'
        break;
      case 10: month = '十一月'
        break;
      case 11: month = '十二月'
        break;
    }

    dateSubtitle.textContent = year + '年 ' + month + ' ' + day+'日'
  }
})()
