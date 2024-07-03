const sumAll = function(num1, num2) {

    if (
        (typeof(num1) === 'number' && typeof(num2) === 'number') && 
        (num1 >= 0 && num2 >= 0) 
    ) {
        sum = 0;

        // Reverse so the bigger number is always num2
        if (num1 > num2) {
            temp = num1;
            num1 = num2;
            num2 = temp;
        }

        for (let i = num1; i <= num2; i++) {
            sum = sum + i;
        }

        return sum;

    } else {
        return 'ERROR';
    }
 
};

// Do not edit below this line
module.exports = sumAll;
