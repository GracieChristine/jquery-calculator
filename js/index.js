$(document).ready(function() {
  let display = $("#screen");
  let number = "";
  let operator = "";
  let result = "";
  let numberArray = [];

    // console.log("Screen...", display);

  //  Click the Span to Display and Store Info
  $("span").click(function(event) {
    let operand = $(event.target).text();

    // console.log("Event Target Span...", operand);

    if (!$(this).hasClass("operator")) {
      if (display.text() == 0) {
        display.text("");
      }
      number += operand;
      display.append(operand);

      // console.log("Dispalying Number...", operand);
    }
    else if ($(this).hasClass("operator")) {

      // console.log(`I'm clicking a ${operator} right now...`);

      if (number !== "") {
        numberArray.push(number);

        // console.log("Number Array...", numberArray);
      }

      //  Equaling Functionality
      if (this.innerHTML !== "=") {
        operator = this.innerHTML;
      }

      display.append(` ${operator} `);

      // console.log("Operator...", operator);
      number = "";

      //  Equaling Functionality
      if ($(event.target).attr("id") === "equals") {

        // console.log("I just clicked you, equals!", operator);

        //  Calcuation per Operators
        switch (operator) {
          case "+":
            result = +(numberArray[0]) + +(numberArray[1]);
            display.text(result);

            // console.log("Result of Addition...", result);
            numberArray = [];
            numberArray.push(result);
            break;
          case "-":
            result = +(numberArray[0]) - +(numberArray[1]);
            display.text(result);

            // console.log("Result of Subtraction...", result);
            numberArray = [];
            numberArray.push(result);
            break;
          case "x":
            result = +(numberArray[0]) * +(numberArray[1]);
            display.text(result);

            // console.log("Result of Multiplication...", result);
            numberArray = [];
            numberArray.push(result);
            break;
          case "÷":
            if (+(numberArray[1]) == 0) {
              result = "null";
              display.text("ERROR!!!");
              break;
            }
            else {
              result = (+(numberArray[0]) / +(numberArray[1])).toFixed(4);
              display.text(result);

              // console.log("Result of Division", result);
              numberArray = [];
              numberArray.push(result);
              break;
            }
          default:
            return "ERROR!!!";
        }
      }

      //  Erroring Situation
      if (numberArray.length === 0 && operator !== "C") {
        numberArray = [];
        number = "";
        display.text("ERROR!!!");
      } else if (true) {

      }

      //  Clearing Functionality
      if ($(event.target).attr("id") === "clear") {
        numberArray = [];
        number = "";
        display.text("0");
      }
    }
  })
})
