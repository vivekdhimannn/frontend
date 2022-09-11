const age=()=>{
    let GivenDate = new Date(document.querySelector('.date_input').value); //will bring us the given date fron date input
    let inputdate = {
        year: GivenDate.getFullYear(),
        month: GivenDate.getMonth()+1,
        day: GivenDate.getDay(),
    }
    let date = new Date(); // date method for JS to get date from device
    let todayDate = date.getDate();
    let todayMonth = date.getMonth() + 1;
    let todayYear = date.getFullYear();
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (inputdate['day']> todayDate) {
       todayDate = todayDate + months[todayMonth - 1]
       todayMonth = todayMonth - 1
    }
    if (inputdate['month']> todayMonth) {
       todayMonth = todayMonth + 12
        todayYear = todayYear - 1
    }
    let d = todayDate - inputdate['day'];
    let m = todayMonth - inputdate['month'];
    let y = todayYear - inputdate['year'];
    document.querySelector('.date').innerHTML = d
    document.querySelector('.month').innerHTML = m
    document.querySelector('.year').innerHTML = y
}