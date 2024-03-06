function yee_ha(number) {
    if (number %3 === 0 && number % 7 === 0) {
        return "Yee Ha";
    } else if (number % 3 === 0){
        return "Yee";
    } else if (number % 7 === 0){
        return "Ha";
    } else {
        return "Nada";
    }

}
//output
console.log (
`If the number is ${number}, then the answer is ${yee_ha}`
);
