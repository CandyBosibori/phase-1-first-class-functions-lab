// Code your solution in this file!
const drivers= ["1", "2", "3", "4", "5"];

const returnFirstTwoDrivers =  function(drivers) {
    return drivers.slice(0, 2);
  }

  const returnLastTwoDrivers =  function(drivers) {
    return drivers.slice(-2);
  }

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  function createFareMultiplier(number){

 return (function(fare){
   return fare * number
 })
  }

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, choiceOfDrivers){
  return choiceOfDrivers(drivers);
}
