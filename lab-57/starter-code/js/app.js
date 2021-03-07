'use strict';
var hours = ['6am', '7am','8am','9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm' , '7pm'];

var seattle = {
    locationName: 'Seattle',
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
      var unorderedList;
      unorderedList = seattle;
      document.querySelector('#seattle').textContent = seattle.calcCookiesEachHour;
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

