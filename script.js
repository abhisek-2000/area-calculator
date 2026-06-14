// Modules in Javascript
import {calculateArea} from "./calculate.js"
 function displayArea(){
    let radius=parseFloat(document.querySelector("#radius-input").value);

    let area=calculateArea(radius);
    document.querySelector("#result").textContent=`The area is: ${area.toFixed(2)}`;
 }

 document
   .querySelector("#calculate-btn")
   .addEventListener("click", displayArea);

   console.log(pi);