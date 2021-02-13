// A number increased by 7 equals 22. Write a function that return A number's value.
//  Return null if initial_value or final_value is not a number and when final_value is less than initial_value.


// Write the function to find the increaseNumber obtained.
function increaseNumber(initialValue, finalValue) {
     //your code here
     if(typeof(initialValue) != "number" || typeof(finalValue) != "number" || finalValue < initialValue)
      return null
     return (finalValue - initialValue)
  }

//Use SpecRunner to check the Test Cases.