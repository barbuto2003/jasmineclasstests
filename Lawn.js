// calculate minutes it would take to mow lawn
//input
var width= 5;
var length = 5;
//processing
var area = width * length;
var minutes = area / squareMetresPerMinute;
return minutes;
//output
console.log(
    `if the lawn is ${width} by ${length}, it would
    take ${minutes} minutes to cut the lawn`
);
