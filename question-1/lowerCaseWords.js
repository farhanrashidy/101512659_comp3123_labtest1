const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        const words = mixedArray
            .filter(item => typeof item ==='string')
            .map(word => word.toLowerCase());
        resolve(words);
        
        if(!Array.isArray(mixedArray)) {
            reject("Input must be array");
            return;
        }
    });
};

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));