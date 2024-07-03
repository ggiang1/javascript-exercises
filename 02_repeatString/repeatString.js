const repeatString = function(text, amount) {
    // return text.repeat(amount)
    var final_string = '';
    for (let i = 0; i < amount; i++) {
        final_string += text;
    }
    return final_string;
};

// Do not edit below this line
module.exports = repeatString;
