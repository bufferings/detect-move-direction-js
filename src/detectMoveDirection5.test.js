import * as targetFunctions from './detectMoveDirection';

describe.each(Object.values(targetFunctions))('%p test', (targetFunction) => {
  describe.each`
    prevX  | nextX
    ${10}  | ${15}
    ${0}   | ${1}
    ${-1}  | ${0}
    ${-15} | ${-10}
  `('Xが増加($prevX -> $nextX)', ({ prevX, nextX }) => {
    test.each`
      prevY  | nextY
      ${10}  | ${15}
      ${0}   | ${1}
      ${-1}  | ${0}
      ${-15} | ${-10}
    `('Yが増加($prevY -> $nextY)', ({ prevY, nextY }) => {
      expect(targetFunction(prevX, prevY, nextX, nextY)).toStrictEqual({
        horizontal: 'right',
        vertical: 'bottom',
      });
    });
    test.each`
      prevY  | nextY
      ${15}  | ${10}
      ${1}   | ${0}
      ${0}   | ${-1}
      ${-10} | ${-15}
    `('Yが減少($prevY -> $nextY)', ({ prevY, nextY }) => {
      expect(targetFunction(prevX, prevY, nextX, nextY)).toStrictEqual({
        horizontal: 'right',
        vertical: 'top',
      });
    });
    test.each`
      prevY  | nextY
      ${10}  | ${10}
      ${0}   | ${0}
      ${-10} | ${-10}
    `('Yが変わらない($prevY -> $nextY)', ({ prevY, nextY }) => {
      expect(targetFunction(prevX, prevY, nextX, nextY)).toStrictEqual({
        horizontal: 'right',
        vertical: 'neutral',
      });
    });
  });

  describe.each`
    prevX  | nextX
    ${15}  | ${10}
    ${1}   | ${0}
    ${0}   | ${-1}
    ${-10} | ${-15}
  `('Xが減少($prevX -> $nextX)', ({ prevX, nextX }) => {
    test.each`
      prevY  | nextY
      ${10}  | ${15}
      ${0}   | ${1}
      ${-1}  | ${0}
      ${-15} | ${-10}
    `('Yが増加($prevY -> $nextY)', ({ prevY, nextY }) => {
      expect(targetFunction(prevX, prevY, nextX, nextY)).toStrictEqual({
        horizontal: 'left',
        vertical: 'bottom',
      });
    });
    test.each`
      prevY  | nextY
      ${15}  | ${10}
      ${1}   | ${0}
      ${0}   | ${-1}
      ${-10} | ${-15}
    `('Yが減少($prevY -> $nextY)', ({ prevY, nextY }) => {
      expect(targetFunction(prevX, prevY, nextX, nextY)).toStrictEqual({
        horizontal: 'left',
        vertical: 'top',
      });
    });
    test.each`
      prevY  | nextY
      ${10}  | ${10}
      ${0}   | ${0}
      ${-10} | ${-10}
    `('Yが変わらない($prevY -> $nextY)', ({ prevY, nextY }) => {
      expect(targetFunction(prevX, prevY, nextX, nextY)).toStrictEqual({
        horizontal: 'left',
        vertical: 'neutral',
      });
    });
  });

  describe.each`
    prevX  | nextX
    ${10}  | ${10}
    ${0}   | ${0}
    ${-10} | ${-10}
  `('Xが変わらない($prevX -> $nextX)', ({ prevX, nextX }) => {
    test.each`
      prevY  | nextY
      ${10}  | ${15}
      ${0}   | ${1}
      ${-1}  | ${0}
      ${-15} | ${-10}
    `('Yが増加($prevY -> $nextY)', ({ prevY, nextY }) => {
      expect(targetFunction(prevX, prevY, nextX, nextY)).toStrictEqual({
        horizontal: 'neutral',
        vertical: 'bottom',
      });
    });
    test.each`
      prevY  | nextY
      ${15}  | ${10}
      ${1}   | ${0}
      ${0}   | ${-1}
      ${-10} | ${-15}
    `('Yが減少($prevY -> $nextY)', ({ prevY, nextY }) => {
      expect(targetFunction(prevX, prevY, nextX, nextY)).toStrictEqual({
        horizontal: 'neutral',
        vertical: 'top',
      });
    });
    test.each`
      prevY  | nextY
      ${10}  | ${10}
      ${0}   | ${0}
      ${-10} | ${-10}
    `('Yが変わらない($prevY -> $nextY)', ({ prevY, nextY }) => {
      expect(targetFunction(prevX, prevY, nextX, nextY)).toStrictEqual({
        horizontal: 'neutral',
        vertical: 'neutral',
      });
    });
  });
});
