function scuberGreetingForFeet(canRide){
  // Write your code here!
  if (canRide <= 400){
    return "This one is on me!"
 }else if (canRide > 400 && canRide < 2000){
  return "That will be twenty bucks."
  }else if (canRide > 2000 && canRide < 2500){
    return "I will gladly take your thirty bucks."
  }else if (canRide >= 2500){
    return "No can do."
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  
 return city <= "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  
  
  
  switch(tip){
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return"Thank you."
      break;
    default:
      return "Bye."
      break;
    }
}