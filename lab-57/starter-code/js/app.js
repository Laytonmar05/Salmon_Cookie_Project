'use strict';
 
console.log('hello');
var hours = ['6am', '7am','8am','9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm' , '7pm'];
 
var seattle = {
   locationName: 'seattle',
   minCustomersPerHour: 23,
   maxCustomersPerHour: 65,
   avgCookiesPerSale: 6.3,
   customersEachHour: [],
   cookiesEachHour: [],
   totalDailyCookies: 0,
   calcCustomersEachHour: function () {
     for (var i = 0; i < hours.length; i++) {
       this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
     }
   },
   calcCookiesEachHour: function () {
     this.calcCustomersEachHour();
     for (var i = 0; i < hours.length; i++) {
       var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
       this.cookiesEachHour.push(oneHour);
       this.totalDailyCookies += oneHour;
     }
   },
   render() {
     this.calcCookiesEachHour();
     // TODO:  access the seattle store HTML list by it's ID
     // and assign it to the unorderedList variable below
     var unorderedList = document.querySelector('#seattle');
     for (var i = 0; i < hours.length; i++) {
       var listItem = document.createElement('li');
       listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
       unorderedList.appendChild(listItem);
     }
     listItem = document.createElement('li');
     listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
     unorderedList.appendChild(listItem);
  
 
   }
 };
// TODO:  copy the object data from above and paste it 4 times below, each time representing a new city:  tokyo, dubai, paris, lima
// the minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale should all have different sales counts
// you may make these counts up and will also need to update where you "select" or "access" your HTML for each store
 
let tokyo = {
 locationName: 'tokyo',
 minCustomersPerHour: 25,
 maxCustomersPerHour: 55,
 avgCookiesPerSale: 6.1,
 customersEachHour: [],
 cookiesEachHour: [],
 totalDailyCookies: 0,
 
  calcCustomersEachHour: function () {
   for (var i = 0; i < hours.length; i++) {
   this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
   }
 },
 calcCustomersEachHour: function () {
this.calcCustomersEachHour();
   for (var i = 0; i < hours.length; i++) {
     var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
     this.cookiesEachHour.push(oneHour);
     this.totalDailyCookies += oneHour;
   }
 },
 render () {
   this.calcCookiesEachHour();
  var unorderedList = document.querySelector('#tokyo');
   for (var i = 0; i < hours.length; i++) {
   var listItem = document.createElement('li');
   listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
   unorderedList.appendChild(listItem);
 }
 listItem = document.createElement('li');
 listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
 unorderedList.appendChild(listItem);
}
 
};
let dubai = {
 locationName: 'dubai',
 minCustomersPerHour: 20,
 maxCustomersPerHour: 72,
 avgCookiesPerSale: 5.4,
 customersEachHour: [],
 cookiesEachHour: [],
 totalDailyCookies: 0,
};
calcCustomersEachHour = function () {
   for (var i = 0; i < hours.length; i++) {
     this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
   }
 };
calcCustomersEachHour = function () {
   this.calcCustomersEachHour();
   for (var i = 0; i < hours.length; i++) {
     var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
     this.cookiesEachHour.push(oneHour);
     this.totalDailyCookies += oneHour;
   }
 },
 
 render() {
   this.calcCookiesEachHour();
 
    var unorderedList = document.querySelector('#dubai');
 
   for (var i = 0; i < hours.length; i++) {
     var listItem = document.createElement('li');
     listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
     unorderedList.appendChild(listItem);
   }
   listItem = document.createElement('li');
   listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
   unorderedList.appendChild(listItem);
  
 };
 
 
 
 
 
 
 
 
var paris = {
 locationName: 'paris',
 minCustomersPerHour: 15,
 maxCustomersPerHour: 100,
 avgCookiesPerSale: 4.2,
 customersEachHour: [],
 cookiesEachHour: [],
 totalDailyCookies: 0,
};
calcCustomersEachHour = function () {
 for (var i = 0; i < hours.length; i++) {
   this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
 }
};
calcCustomersEachHour = function () {
 this.calcCustomersEachHour();
 for (var i = 0; i < hours.length; i++) {
   var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
   this.cookiesEachHour.push(oneHour);
   this.totalDailyCookies += oneHour;
 }
};
 
render (); {
dubai.calcCookiesEachHour();
 
var unorderedList = document.querySelector('#paris');
 
for (var i = 0; i < hours.length; i++) {
var listItem = document.createElement('li');
listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
unorderedList.appendChild(listItem);
};
listItem = document.createElement('li');
listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
unorderedList.appendChild(listItem);
};
 
 
 
let lima = {
   locationName: 'lima',
   minCustomersPerHour: 22,
   maxCustomersPerHour: 50,
   avgCookiesPerSale: 5.1,
   customersEachHour: [],
   cookiesEachHour: [],
   totalDailyCookies: 0,
};
   function calcCustomersEachHour() {
     for (var i = 0; i < hours.length; i++) {
       this.customersEachHour.push(random(this.maxCustomersPerHour, this.maxCustomersPerHour));
     }
   };
 function calcCookiesEachHour() {
     this.calcCustomersEachHour(); };
     render ()
     var unorderedList = document.querySelector('#lima');
    
 
     for (var i = 0; i < hours.length; i++) {
     var listItem = document.createElement('li');
     listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
     unorderedList.appendChild(listItem);
     };
     listItem = document.createElement('li');
     listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
     unorderedList.appendChild(listItem);
    
    
function random(min, max) {
 // TODO: "floor" this random number generator
 return Math.floor(Math.random() * (max - min + 1) + min);
}
 
// TODO: list all shop objects in an array
 
//var myArray = [5,6,7,10];
var allShops = [seattle, tokyo, dubai, paris, lima];
for (let i=0; i < myArray.length; i++) {
// console.log(myArray[2]);// this will console log 7 for 4 times
 //console.log(myArray[i]); //this will console.log the contents of that position
}
 
(function renderAllShops() {
 for (var i = 0; i < allShops.length; i++) {
   allShops[i].render();
 };
})();
 









//this is the code for lab 

calcCustomersEachHour: function() {
  for (var i = 0; i < hours.length; i++)
  this.customersEachHour.push(random (this.minCustomersPerHour, this.maxCustomersPerHour));
};
calcCookiesEachHour: function() {
  this.calcCustomersEachHour;
  for (var i = 0; i < hours.length; i++) 
    var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
    this.cookiesEachHour.push(oneHour);
    this.totalDailyCookies += oneHour;
}

//I think that (this) is a way that a function is called and ran. So this.calCustomersEachHour would run that function. 
//It helps in js because it allows you to run something without typing all your lines fo code out. 