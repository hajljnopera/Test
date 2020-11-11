

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}


// https://stackoverflow.com/a/12623365
Array.prototype.contains = function(element){
    return this.indexOf(element) > -1;
};


// Comment goes here !!!
