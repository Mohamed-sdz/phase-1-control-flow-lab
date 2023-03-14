function scuberGreetingForFeet(feet){ 
   
  if (feet <= 400) {
    return "This one is on me!";
  } else if (feet > 400 && feet <= 2000) {
    return "That will be twenty bucks.";
  } else if (feet > 2000 && feet <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}
  
function ternaryCheckCity(city){ 

  return (city.toLowerCase() === "nyc") ? "Ok, sounds good." : "No go.";
  
}
 function switchOnCharmFromTip(tipAmount) {
  if (tipAmount === "generous") {
    return "Thank you so much.";
  } else if (tipAmount === "not as generous") {
    return "Thank you.";
  } else {
    return "Bye.";
  }
}




  




   


