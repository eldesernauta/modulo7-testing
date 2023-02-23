function calculateTravelTime(origin, destination, modeOfTransport) {
    const transportSpeeds = {
      plane: 800, 
      train: 120, 
      car: 60, 
    };
  
    const distanceInKm = getDistanceInKm(origin, destination);
    const travelTimeInHours = distanceInKm / transportSpeeds[modeOfTransport];
    
    return travelTimeInHours;
  }
  
  function getDistanceInKm(origin, destination) {
    return 1000; 
  }
  

exports.exported = calculateTravelTime