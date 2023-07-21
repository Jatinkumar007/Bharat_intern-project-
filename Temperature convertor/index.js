
let input = document.getElementById("input");
let show = document.getElementById("show");
let btn = document.getElementById("f");
let btn2 = document.getElementById("k");
function Unitconverter(value){
    value=value.trim().split("°");
    if(isNaN(value[0])){
        show.textContent="Invalid input";
    }
    else{
       let fahrenheit=(Number(value[0])*9/5) + 32; //converting a number value into an array;
       show.innerHTML=fahrenheit+"°F";
    }
}

function Unitconverter2(value){
    let result=document.getElementById("show");
    value=value.trim().split("°");
    if(isNaN(value[0])){
        result.textContent="Invalid input";
    }
    else{
       let kelvin=Number(value[0]) + 273.15; //converting a number value into an array;
       result.innerHTML=kelvin+"K";
    }
}

btn.addEventListener("click",()=>{
    show.innerHTML="";
    Unitconverter(input.value)
});

btn2.addEventListener("click",()=>{
    show.innerHTML="";
    Unitconverter2(input.value)
});
