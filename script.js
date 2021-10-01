function formatDate () {
    let n = 30;// количество секунд назад
    let m = 7; // количество минут назад
    //#1
    //let ourTime = new Date(); // просто время сейчас

    //#2
    // let ourTime = new Date (new Date - n*1000); // время  n  секунд назад

    //#3
    // let ourTime = new Date (new Date - m*60*1000)// время m минут назад

    //#4
    let ourTime = new Date (new Date - 86400*1000)//время вчера
    let options ={
        year:'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };

    let date = new Date (ourTime).getTime();// date  в милисекундах
    let now = new Date().getTime(); //  время сейчас в милисекундах
    
    let distance = now-date
    console.log (distance)
    if (distance <1){
        alert ("прямо сейчас");
    }
    else if (distance < 60*1000){
        alert (n + " секунд назад");
    }
    else if ( distance < 3600*1000){
        alert (m + " минут назад");
    }
    else {
        // alert (`${ourTime.getDate()} ${ourTime.getMonth()} ${ourTime.getFullYear()} ${ourTime.getHours()} ${ourTime.getMinutes()}`);
        alert( ourTime.toLocaleString("ru", options));
    }
}
formatDate()