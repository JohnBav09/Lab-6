'use strict'
// helper functions

var _random = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var alki = {
    min_cust : 2, 
    max_cust : 16,
    average_cookie_per_customer : 4.6, 
    store_name : 'alki',
    store_open: 6,
    store_close:  20,
    cookies_sold_each_hour: []
}

alki.cookies_per_hour = function (){
    var random_customers =  Math.floor(_random(this.min_cust, this.max_cust));
    return Math.floor(this.average_cookie_per_customer * random_customers);
};

alki.calculate_cookies_sold_each_hour = function () {
  for(var i= this.store_open ; i < this.store_close; i++) {
    var cookies_sold = this.cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold)
  } 
  console.log(this);
};

alki.render = function (){
var target = document.getElementById('store-container')
var h2_el = document.createElement('h2');
var li_el = document.createElement('li');
var ul_el = document.createElement('ul');

h2_el.textContent = this.store_name;

for(var i = 0; i < this.cookies_sold_each_hour.length; i++){
  var hour_li_el = document.createElement('li')
    hour_li_el.textContent = this.cookies_sold_each_hour[i]
    ul_el.appendChild(hour_li_el);
    
}

li_el.appendChild(h2_el);
li_el.appendChild(ul_el);
target.appendChild(li_el);
}

alki.calculate_cookies_sold_each_hour();

var pike = {
  min_cust : 23,
  max_cust : 65,
  average_cookie_per_customer : 6.3,
  store_name : 'pike',
  store_open: 6,
  store_close:  20,
  cookies_sold_each_hour: []
}

pike.cookies_per_hour = function (){
  var random_customers =  Math.floor(_random(this.min_cust, this.max_cust));
  return Math.floor(this.average_cookie_per_customer * random_customers);
};


pike.calculate_cookies_sold_each_hour = function () {
for(var i= this.store_open; i < this.store_close; i++) {
  var cookies_sold = this.cookies_per_hour();
  this.cookies_sold_each_hour.push(cookies_sold)
} 
console.log(this);
};

pike.render = function (){
var target = document.getElementById('store-container')
var h2_el = document.createElement('h2');
var li_el = document.createElement('li');
var ul_el = document.createElement('ul');

h2_el.textContent = this.store_name;

for(var i = 0; i < this.cookies_sold_each_hour.length; i++){
  var hour_li_el = document.createElement('li')
  hour_li_el.textContent = this.cookies_sold_each_hour[i]
  ul_el.appendChild(hour_li_el);
  
}

li_el.appendChild(h2_el);
li_el.appendChild(ul_el);
target.appendChild(li_el)
}

pike.calculate_cookies_sold_each_hour();

var stap = {
  min_cust : 3,
  max_cust : 24,
  average_cookie_per_customer : 1.2,
  store_name : 'seatac',
  store_open: 6,
  store_close:  20,
  cookies_sold_each_hour: []
}

stap.cookies_per_hour = function (){
  var random_customers =  Math.floor (_random(this.min_cust, this.max_cust));
  return Math.floor(this.average_cookie_per_customer * random_customers);
};

stap.calculate_cookies_sold_each_hour = function () {
for(var i= this.store_open; i < this.store_close; i++) {
  var cookies_sold = this.cookies_per_hour();
  this.cookies_sold_each_hour.push(cookies_sold);
} 
console.log(this);
};

stap.render = function (){
var target = document.getElementById('store-container')
var h2_el = document.createElement('h2');
var li_el = document.createElement('li');
var ul_el = document.createElement('ul');

h2_el.textContent = this.store_name;

for(var i = 0; i < this.cookies_sold_each_hour.length; i++){
  var hour_li_el = document.createElement('li')
  hour_li_el.textContent = this.cookies_sold_each_hour[i];
  ul_el.appendChild(hour_li_el);
  
}

li_el.appendChild(h2_el);
li_el.appendChild(ul_el);
target.appendChild(li_el)
}

stap.calculate_cookies_sold_each_hour();

var scenter = {
  min_cust : 11,
  max_cust : 38,
  average_cookie_per_customer : 3.7,
  store_name : 'scenter',
  store_open: 6,
  store_close:  20,
  cookies_sold_each_hour: []
}

scenter.cookies_per_hour = function (){
  var random_customers =  Math.floor (_random(this.min_cust, this.max_cust));
  return Math.floor(this.average_cookie_per_customer * random_customers);
};

scenter.calculate_cookies_sold_each_hour = function () {
for(var i= this.store_open; i < this.store_close; i++) {
  var cookies_sold = this.cookies_per_hour();
  this.cookies_sold_each_hour.push(cookies_sold);
} 
console.log(this);
};

scenter.render = function (){
var target = document.getElementById('store-container')
var li_el = document.createElement('li');
var h2_el = document.createElement('h2');
var ul_el = document.createElement('ul');

h2_el.textContent = this.store_name;



for(var i = 0; i < this.cookies_sold_each_hour.length; i++){
  var hour_li_el = document.createElement('li')
  hour_li_el.textContent = this.cookies_sold_each_hour[i]
  ul_el.appendChild(hour_li_el);
  
}

li_el.appendChild(h2_el);
li_el.appendChild(ul_el);
target.appendChild(li_el);
}

scenter.calculate_cookies_sold_each_hour();

var caphill = {
  min_cust : 20,
  max_cust : 38,
  average_cookie_per_customer : 3.7,
  store_name : 'caphill',
  store_open: 6,
  store_close:  20,
  cookies_sold_each_hour: []
}

caphill.cookies_per_hour = function (){
  var random_customers =  Math.floor (_random(this.min_cust, this.max_cust));
  return Math.floor(this.average_cookie_per_customer * random_customers);
};

caphill.calculate_cookies_sold_each_hour = function () {
for(var i= this.store_open; i < this.store_close; i++) {
  var cookies_sold = this.cookies_per_hour();
  this.cookies_sold_each_hour.push(cookies_sold);
  console.log(cookies_sold);
} 
console.log(this);
};

caphill.render = function (){
var target = document.getElementById('store-container')
var li_el = document.createElement('li');
var h2_el = document.createElement('h2');
var ul_el = document.createElement('ul');

h2_el.textContent = this.store_name;

for(var i = 0; i < this.cookies_sold_each_hour.length; i++){
  var hour_li_el = document.createElement('li')
  hour_li_el.textContent = this.cookies_sold_each_hour[i];
  ul_el.appendChild(hour_li_el);
  
}

li_el.appendChild(h2_el);
li_el.appendChild(ul_el);
target.appendChild(li_el);
}

caphill.calculate_cookies_sold_each_hour();

caphill.render();

scenter.render();

stap.render();

pike.render();

alki.render();
console.log(document)