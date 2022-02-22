window.addEventListener("DOMContentLoaded", domLoaded);

// const errorMessage = document.getElementById('errorMessage');
// // errorMessage.innerHTML = "";
// const convertButton = document.getElementById('convertButton');
// const celBox = document.getElementById('cInput');
// const farBox = document.getElementById('fInput');
// const weatherBox = document.getElementById('weatherImage');



// function selectCelBox() {
//    farBox.innerHTML = "";
// }

// function selectFarBox() {
//    celBox.value = "";
// }

// celBox.addEventListener("click", selectCelBox);
// farBox.addEventListener("click", selectFarBox);

function domLoaded() {
   // TODO: Complete the function
   let userInput;
   const errorMessage = document.getElementById('errorMessage');
   errorMessage.textContent = "";
   const convertButton = document.getElementById('convertButton');
   const celBox = document.getElementById('cInput');
   // document.getElementById('cInput').value = 'This sucks';
   const farBox = document.getElementById('fInput');
   // celBox.value = 'This should not exist';
   // celBox.addEventListener('select', selectCelBox());
   // farBox.addEventListener('select', selectFarBox());
   convertButton.addEventListener("click", conversion);
   let bool = false;
   while (bool == false) {
      if (convertButton.addEventListener("click", conversion))
      celBox.addEventListener('focus', selectCelBox());
      farBox.addEventListener('focus', selectFarBox());
   }

   function selectCelBox() {
      farBox.value = null;
      celBox.value = null;
   }

   function selectFarBox() {
      farBox.value = null;
      celBox.value = null;
   }

   function conversion() {
      bool = true;
      userInput = "";
      if (celBox != "" || farBox != ""){
         if (celBox != "") {
            userInput = parseFloat(celBox.value);
            if (userInput == NaN){
               errorMessage.innerHTML = celBox + ' is not a number';
               celBox.value = '';
            }
            else {
               convertCtoF(userInput);
            }
         }
         else if (farBox != ""){
            userInput = parseFloat(farBox.value);
            if (userInput == NaN){
               errorMessage.innerHTML = farBox + ' is not a number';
               farBox.value = '';
            }
            else {
               convertFtoC(userInput);
            }
         }
      }
      // domLoaded()
   }

   // convertButton.addEventListener("click", conversion);
   domLoaded()
}

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   const farBox = document.getElementById('fInput');
   const weatherBox = document.getElementById('weatherImage');

   degreesFahrenheit = (degreesCelsius * (9/5)) + 32;
   farBox.value = degreesFahrenheit;
   if (degreesFahrenheit <= 32) {
      weatherBox.src = "cold.png";
   }
   else if (degreesFahrenheit > 32 && degreesFahrenheit <= 50) {
      weatherBox.src = "cool.png";
   }
   else {
      weatherBox.src = "warm.png";
   }
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   const celBox = document.getElementById('cInput');
   const weatherBox = document.getElementById('weatherImage');

   degreesCelsius = (degreesFahrenheit - 32) * (5/9);
   celBox.value = degreesCelsius;
   if (degreesFahrenheit <= 32) {
      weatherBox.src = "cold.png";
   }
   else if (degreesFahrenheit > 32 && degreesFahrenheit <= 50) {
      weatherBox.src = "cool.png";
   }
   else {
      weatherBox.src = "warm.png";
   }
}
