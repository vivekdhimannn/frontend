let clock = () => {
    let a = new Date()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    let month = a.getMonth()
    let year = a.getYear()
    let d = a.getDate()
    //var time = moment.tz("America/Los_Angeles").format('YYYY-MM-DD HH:mm:ssZ').toString();
  
    let f = `${h}:${m}:${s}`
    if (h > 12) {
      f = `${h - 12}:${m}:${s} PM`
    }
    else {
      f = `${h}:${m}:${s} AM`
    }
    let date = `<br>Date : ${d}/${month + 1}/20${year - 100}`
    document.getElementById("India").innerHTML = 'IST ' + f + date;
    document.getElementById("spain").innerHTML = "EST " + f + date;
    document.getElementById("calfor").innerHTML = "PST " + f + date;
  
    setTimeout(() => clock(), 1000);
  };
  clock();