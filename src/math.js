class Math {
    sum(a, b, callback) {
        setTimeout(() => {
            callback(a + b);
        }, 5);
    };

    multiply(a, b) {
        return a * b
    };
    
    subtraction(a, b) {
        return a - b
    };

    printsum(res, a, b) {
        res.load('index', a + b)
    };
};

module.exports = Math