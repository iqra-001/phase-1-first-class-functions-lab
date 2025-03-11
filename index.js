// // Code your solution in this file!
// const returnFirstTwoDrivers = function(['Antonia', 'Nuru', 'Amari', 'Mo',]) {
//     return drivers.slice(0, 2);
//   };
//   const  returnFirstTwoDrivers() = function (drivers){
//    return drivers.slice(0, 2)

//   }
//   returnFirstTwoDrivers()

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
  };
  
  
 
 const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

  const createFareMultiplier = (FareMultiplier) => {
    return function(value){
      return FareMultiplier * value;
    }
  }

  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);

  function fetchSpecifiedDrivers(drivers, func) {
    return func(drivers);
  }

 function selectDifferentDrivers(driversArray, fn) {
  return fn(driversArray);
 }