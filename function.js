//starting variables
var equation_string = "";
var screen = document.getElementById('display');

var inputClick = () => {
   var input = event.target;

    if(input.innerHTML == 'C'){

        equation_string = "";
        screen.innerHTML = equation_string;

    } else if((input.innerHTML == '=')) {

        //do the math, return a value

        if(equation_string == "80085" || equation_string == "4311" || equation_string == "8008"){
            var sum = "thats a swear, you cant say that"
        } else {
            var sum = eval(equation_string); 
        }

        equation_string = sum;

        screen.innerHTML = equation_string;

    } else {

        var lastChar = equation_string[equation_string.length - 1];

        //add input presses to string
        if((equation_string.length < 26)){

            if((lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/" || lastChar == ".") && (input.innerHTML == "+" || input.innerHTML == "-" || input.innerHTML == "*" || input.innerHTML == "/" || input.innerHTML == ".")){
                //blacklisted duplicate characters
            } else {

                if(input.innerHTML == "+" || input.innerHTML == "-" || input.innerHTML == "*" || input.innerHTML == "/"){

                    //special condition for operators that will make it look nice.
                    equation_string += " " + input.innerHTML + " ";

                } else {            

                    equation_string += input.innerHTML;

                }


            }
        }

        //set display
        screen.innerHTML = equation_string;

    }   
}
