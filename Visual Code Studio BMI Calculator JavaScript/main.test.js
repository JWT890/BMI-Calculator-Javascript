const calculate = require('./main');

describe('calculate', () => {
    test('should calculate BMI and return normal', () => {
        const result = calculate(50, 170);
        expect(result).toBe('Your BMI is 24.8 which means you are normal');
    });
});
