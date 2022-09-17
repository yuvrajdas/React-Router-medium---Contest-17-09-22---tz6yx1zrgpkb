import React from "react";


export const Calculator = () =>{
     let url_string = window.location.href;
    let url = new URL(url_string);
    let num1 = Number(url.searchParams.get("num1");
    let num2 = Number(url.searchParams.get("num2");
    let op = url.searchParams.get("op");
   console.log(num1, num2, op);
    let ans = 0;
    
    switch(op){
        case "+":{
            ans = num1+num2;
            break;
        }
            case "/":{
            ans = num1/num2;
            break;
        }
            case "-":{
            ans = num1-num2;
            break;
        }
            case "*":{
            ans = num1*num2;
            break;
        }
             case "%":{
            ans = num1%num2;
            break;
        }
            
    }
    return(
        <div>
            Your calculation Result is <span id="calc-result">{ans}</span>
        </div>
    )
}
