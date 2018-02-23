module.exports = function getZerosCount(number) {
    var i = 1, count = 0;

    while(Math.pow(5,i)<number){
        count+=Math.floor(number /Math.pow(5,i));
        i++;
    }
    return count;
}

