


var battery = 0;
var plus_battery = 0;




function getNum(){
    plus_battery = Math.floor(Math.random() * 299 + 1)
    battery += plus_battery
    const battery_st = document.querySelector('#wart_number');
    const stnum = battery.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    battery_st.innerHTML = `${stnum}  W`
}

function plus_minus(){
    const change_text = document.querySelector('#change_before');
    let text_num = "0"
    if (plus_battery > 0) {
        text_num = `🔺 ${plus_battery}`
    }
    else {
        text_num = `🔻 ${plus_battery}`
    }
    change_text.innerHTML = `${text_num}  W`
}


function init(){
    setInterval(getNum, 1000);
    setInterval(plus_minus, 1000);
}

init();
