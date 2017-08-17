//Business Logic(Back-End)


function convert(num){
  var roman = "";
  //Create an empty string
  var romanNumeral = ["M", "CM", "D" , "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  //Create an array of possible RN up to 1000
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  //Create an array of possible number values
  for(var i=0;i<numbers[i];i++){
    //Iterate for a length of our numbers of array
    while(num>=numbers[i]){
      //While original number is larger than our inputted numbers arrays
      roman = roman + romanNumeral[i];
      //Add its equivlent
      num = num - numbers[i];
    }
  }
  return roman;

}


//User Interface (UI or Front-End)
$(document).ready(function(){
  $("#roman-numeral-form").submit(function(event){
    var num = $("#num-input").val();


    $("#output").text(convert(num));
    event.preventDefault();
  });

});
