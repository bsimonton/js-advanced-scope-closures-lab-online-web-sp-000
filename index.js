function produceTipCalculator(tip){
  
  return function(fare){
    
    return tip * fare;
  };
  
  
}


function createDriver(){
  let driverID = 0 ;
  
  return class {
    constructor(name){
      this.id = ++driverID;
      this.name = name;
    }
    
  };
  
}


function produceDrivingRange(){
  
  
  
  
  
  
}











