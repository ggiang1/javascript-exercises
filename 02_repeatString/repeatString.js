const repeatString = function(text, amount) {
    // if (amount >= 0) {
    //     return text.repeat(amount);
    // } else {
    //     return "ERROR";
    // }

    var final_string = '';
    if (amount >= 0) {
        for (let i = 0; i < amount; i++) {
            final_string += text;
        }

        return final_string;
    } else {
        return "ERROR"
    }
 
};

// Do not edit below this line
module.exports = repeatString;
