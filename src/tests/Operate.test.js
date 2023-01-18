import operate from '../logic/Operate';

describe('Testing math operations', () => {
  test('1 + 2 should equal 3', () => {
    // Arrange
    const numberOne = 1;
    const numberTwo = 2;
    const operation = '+';
    // Act
    const result = operate(numberOne, numberTwo, operation);
    // Assert
    expect(result).toBe('3');
  });
  test('100 - 99 should equal 1', () => {
    // Arrange
    const numberOne = 100;
    const numberTwo = 99;
    const operation = '-';
    // Act
    const result = operate(numberOne, numberTwo, operation);
    // Assert
    expect(result).toBe('1');
  });
  test('10 x 50 should equal 500', () => {
    // Arrange
    const numberOne = 10;
    const numberTwo = 50;
    const operation = 'x';
    // Act
    const result = operate(numberOne, numberTwo, operation);
    // Assert
    expect(result).toBe('500');
  });
  test('999 ÷ 9 should equal 111', () => {
    // Arrange
    const numberOne = 999;
    const numberTwo = 9;
    const operation = '÷';
    // Act
    const result = operate(numberOne, numberTwo, operation);
    // Assert
    expect(result).toBe('111');
  });
  test('48 % 7 should equal 6', () => {
    // Arrange
    const numberOne = 48;
    const numberTwo = 7;
    const operation = '%';
    // Act
    const result = operate(numberOne, numberTwo, operation);
    // Assert
    expect(result).toBe('6');
  });
});
