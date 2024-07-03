const removeFromArray = function(array, ...args) {

    // for (let num of args) {
    //     for (i = 0; i < array.length; i++) {
    //         const index = array.indexOf(num);
    //         if (index >-1) {
    //             array.splice(index, 1);
    //         }
    //     }
    // }
    // return array;
    return array.filter(num => !args.includes(num)); // Keep every number that is in array but not in args.
};

// Do not edit below this line
module.exports = removeFromArray;
