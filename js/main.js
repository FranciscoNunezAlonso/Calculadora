 const txtResultado = document.getElementById("txtResultado");
 const buttons = document.querySelectorAll("button");
 buttons.forEach(button => {
   button.addEventListener("click", function() {
     const buttonValue = this.textContent;
     if (buttonValue === "AC") {
       txtResultado.value = "";
     }
     else if (buttonValue === "DE") {
       txtResultado.value = txtResultado.value.slice(0, -1);
     }
     else if (buttonValue === "=") {
       try {
         txtResultado.value = eval(txtResultado.value);
       } catch (error) {
         txtResultado.value = "Error";
       }
     }
     else {
       txtResultado.value += buttonValue;
     }
   });//button
 });//buttons