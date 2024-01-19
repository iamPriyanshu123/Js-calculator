/* const data=document.querySelectorAll("btn");
data.addEventListener("click",()=>{
    console.log("user clicked");
}); */
/* let str1="hello";
let str2=str1.substring(0,str1.length-1)
            console.log(str2); */

let buttons = document.querySelectorAll(".btn");
let input = document.getElementById("input-disp")
let arr = Array.from(buttons);
let str = "";
arr.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.target.innerHTML == '=') {
            str = eval(str);
            input.value = str;
        }
        else if (event.target.innerHTML == 'AC') {
            str = "";
            input.value = str;
        }
        else if (event.target.innerHTML == 'x') {
            str = str.substring(0, str.length - 1);
            input.value = str;
        }
        else {
            str += event.target.innerHTML;
            input.value = str;
        }
    })
})























/* let buttons = document.querySelectorAll(".btn");
let input = document.getElementById("input-disp");
let arr = Array.from(buttons);
let str = "";
console.log(arr);
arr.forEach((button) => {
    button.addEventListener("click", (event) => {
        str = event.target.innerHTML;
        console.log(str);
        if (event.target.innerHTML == '=') {
            str = eval(str);
            input.value = str;
        }
        str += event.target.innerHTML;
        input.value = str;
    });
}) */










