// Calculate slope of a line

function slope (x1, y1, x2, y2){
    var rise = y2 - y1;
    var run = x2 - x1;
    return rise/run;
}

//output
console.log (
    `if rise is ${rise} and run is ${run}, then the slope is ${slope}`
);