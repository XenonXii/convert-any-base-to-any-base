
function get(x) {
    return document.getElementById(x)
}
function cl(x, y) {
    y = Number(y)

    if (y == 1) {
        return console.log("[DEBUG] ", x)

    }
    else if (y == 2) {
        return console.log("[RESULT] ", x)

    }
    else {
        return console.log("[LOG] ", x)

    }
}
// history [log , log , log]
//          ^-->dict()
//          const history= JSON.parse(localStorage.getItem('history')) || [];
// function addLog(unit1, value1, unit2, value2) {
//     const log = {
//         unit1: unit1,
//         value1: value1,
//         unit2: unit2,
//         value2: value2
//     }
//     history.push(log)//push  :append
//     localStorage.setItem('history', JSON.stringify(history));
//     readLog()

// }
// function readLog() {
//     let list = get("list")
//     list.innerHTML=""
//     let x = 0
//     history.forEach((dict) => {
//         const li = document.createElement("li")
//         list.innerHTML = `${x + 1} converting [${dict.value1}](${dict.unit1}) = [${dict.value2}](${dict.unit2})`
//         list.appendChild(li)
//     });
// }
// readLog()

function convert() {

    let base1 = get("base1").value
    let base2 = get("base2").value
    let input1 = get("input1").value
    let decimal = parseInt(input1, Number(base1))
    let result = decimal.toString(base2)
    // readLog()
    // addLog(base1, input1, base2, result)
    get("result").innerHTML = result
    
    get("hidden").value=get("hidden").value+result+"<br>"

get("log").innerHTML=get("hidden").value    
    

}

// function ConvertLvl2(base1,base2){

// }
// function ConvertFromDecimalTo(x){
//     let ch=""
//     while(n != 0){
//         r=
//     }
// }
// function ConvertToDecimal(x){

// }
