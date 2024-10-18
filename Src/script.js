
function get(x){
    return document.getElementById(x)
}
function cl(x,y){
    y=Number(y)

    if (y==1){
        return console.log("[DEBUG] ",x)

    }
    else if (y==2){
        return console.log("[RESULT] ",x)
        
    }
    else 
    {
        return console.log("[LOG] ",x)

    }
}

function convert(){
    let base1=get("base1").value
    let base2=get("base2").value
    let input1=get("input1").value
    let decimal=parseInt(input1,Number(base1))
    let result=decimal.toString(base2)
    get("result").innerHTML = result

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
