const calculate = require('./main');

test('should return an error if the user enters no weight or height', () => {

  const mockWindow = {
    document: {
      getElementById: jest.fn().mockImplementation((id) => {
        if (id === 'weight') {
          return { value: '' };
        } else if (id === 'height') {
          return { value: '' };
        }
      }),
      createElement: jest.fn(),
      getElementById: jest.fn().mockReturnValue({
        innerHTML: '',
      }),
    },
  };

  global.window = mockWindow;
});

test('should return an error if the user enters a negative weight', () => {

  const mockWindow = {
    document: {
      getElementById: jest.fn().mockImplementation((id) => {
        if (id === 'weight') {
          return { value: '-10' };
        } else if (id === 'height') {
          return { value: '170' };
        }
      }),
      createElement: jest.fn(),
      getElementById: jest.fn().mockReturnValue({
        innerHTML: '',
      }),
    },
  };
});

test('should calculate the BMI and return the appropriate message if the user enters a valid weight and height', () => {

  const mockWindow = {
    document: {
      getElementById: jest.fn().mockImplementation((id) => {
        if (id === 'weight') {
          return { value: '70' };
        } else if (id === 'height') {
          return { value: '170' };
        }
      }),
      createElement: jest.fn(),
      getElementById: jest.fn().mockReturnValue({
        innerHTML: '',
      }),
    },
  };
});