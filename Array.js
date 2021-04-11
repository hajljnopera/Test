

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}


// https://stackoverflow.com/a/12623365
Array.prototype.contains = function(element){
    return this.indexOf(element) > -1;
};


String.prototype.append = function(w) {
  if (this.endsWith(w)) return this;
  return this + w;
}

String.prototype.prepend = function(w) {
  if (this.startsWith(w)) return this;
  return w + this;
}

String.prototype.rtrim = function(s) {
    if (s == undefined) s = '\\s';
    return this.replace(new RegExp("[" + s + "]*$"), '');
}

String.prototype.ltrim = function(s) {
    if (s == undefined) s = '\\s';
    return this.replace(new RegExp("^[" + s + "]*"), '');
}

// https://stackoverflow.com/a/4673436
if (!String.format) {
  String.format = function(format) {
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number] 
        : match
      ;
    });
  };
}





var upCase = function(s) {
	return s.toUpperCase();
}
