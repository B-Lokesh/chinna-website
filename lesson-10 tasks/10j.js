let calculation = JSON.parse(localStorage.getItem('calculation')) ||' ';
      // Display the calculation when the page first loads.
      displayResOnScreen();
      function updateCalculation(value)
      {
        calculation += value;
        
       // console.log(calculation);
        localStorage.setItem('calculation', JSON.stringify(calculation));
        //setitem after calculation  parameter is been any name used to retrive result for getitem 
        displayResOnScreen();
      }

      function displayResOnScreen(){
        document.querySelector('.display-calculation').innerHTML = calculation;
      }