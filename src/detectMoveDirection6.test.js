import * as targetFunctions from './detectMoveDirection';

describe.each(Object.values(targetFunctions))('%p test', (targetFunction) => {
  describe('Xが増加・Yが増加', () => {
    test.each`
      prevX  | prevY  | nextX  | nextY  | expectedHorizontal | expectedVertical
      ${20}  | ${20}  | ${30}  | ${30}  | ${'right'}         | ${'bottom'}
      ${0}   | ${0}   | ${1}   | ${1}   | ${'right'}         | ${'bottom'}
      ${-1}  | ${-1}  | ${0}   | ${0}   | ${'right'}         | ${'bottom'}
      ${-20} | ${-20} | ${-10} | ${-10} | ${'right'}         | ${'bottom'}
    `(
      '($prevX, $prevY) -> ($nextX, $nextY)',
      ({ prevX, prevY, nextX, nextY, expectedHorizontal, expectedVertical }) => {
        expect(targetFunction(prevX, prevY, nextX, nextY)).toStrictEqual({
          horizontal: expectedHorizontal,
          vertical: expectedVertical,
        });
      }
    );
  });

  describe('Xが増加・Yが減少', () => {
    test.each`
      prevX  | prevY  | nextX  | nextY  | expectedHorizontal | expectedVertical
      ${20}  | ${30}  | ${30}  | ${20}  | ${'right'}         | ${'top'}
      ${0}   | ${1}   | ${1}   | ${0}   | ${'right'}         | ${'top'}
      ${-1}  | ${0}   | ${0}   | ${-1}  | ${'right'}         | ${'top'}
      ${-20} | ${-10} | ${-10} | ${-20} | ${'right'}         | ${'top'}
    `(
      '($prevX, $prevY) -> ($nextX, $nextY)',
      ({ prevX, prevY, nextX, nextY, expectedHorizontal, expectedVertical }) => {
        expect(targetFunction(prevX, prevY, nextX, nextY)).toStrictEqual({
          horizontal: expectedHorizontal,
          vertical: expectedVertical,
        });
      }
    );
  });

  describe('Xが増加・Yが変わらない', () => {
    test.each`
      prevX  | prevY  | nextX  | nextY  | expectedHorizontal | expectedVertical
      ${20}  | ${20}  | ${30}  | ${20}  | ${'right'}         | ${'neutral'}
      ${0}   | ${0}   | ${1}   | ${0}   | ${'right'}         | ${'neutral'}
      ${-1}  | ${-1}  | ${0}   | ${-1}  | ${'right'}         | ${'neutral'}
      ${-20} | ${-20} | ${-10} | ${-20} | ${'right'}         | ${'neutral'}
    `(
      '($prevX, $prevY) -> ($nextX, $nextY)',
      ({ prevX, prevY, nextX, nextY, expectedHorizontal, expectedVertical }) => {
        expect(targetFunction(prevX, prevY, nextX, nextY)).toStrictEqual({
          horizontal: expectedHorizontal,
          vertical: expectedVertical,
        });
      }
    );
  });

  describe('Xが減少・Yが増加', () => {
    test.each`
      prevX  | prevY  | nextX  | nextY  | expectedHorizontal | expectedVertical
      ${30}  | ${20}  | ${20}  | ${30}  | ${'left'}          | ${'bottom'}
      ${1}   | ${0}   | ${0}   | ${1}   | ${'left'}          | ${'bottom'}
      ${0}   | ${-1}  | ${-1}  | ${0}   | ${'left'}          | ${'bottom'}
      ${-10} | ${-20} | ${-20} | ${-10} | ${'left'}          | ${'bottom'}
    `(
      '($prevX, $prevY) -> ($nextX, $nextY)',
      ({ prevX, prevY, nextX, nextY, expectedHorizontal, expectedVertical }) => {
        expect(targetFunction(prevX, prevY, nextX, nextY)).toStrictEqual({
          horizontal: expectedHorizontal,
          vertical: expectedVertical,
        });
      }
    );
  });

  describe('Xが減少・Yが減少', () => {
    test.each`
      prevX  | prevY  | nextX  | nextY  | expectedHorizontal | expectedVertical
      ${30}  | ${30}  | ${20}  | ${20}  | ${'left'}          | ${'top'}
      ${1}   | ${1}   | ${0}   | ${0}   | ${'left'}          | ${'top'}
      ${0}   | ${0}   | ${-1}  | ${-1}  | ${'left'}          | ${'top'}
      ${-10} | ${-10} | ${-20} | ${-20} | ${'left'}          | ${'top'}
    `(
      '($prevX, $prevY) -> ($nextX, $nextY)',
      ({ prevX, prevY, nextX, nextY, expectedHorizontal, expectedVertical }) => {
        expect(targetFunction(prevX, prevY, nextX, nextY)).toStrictEqual({
          horizontal: expectedHorizontal,
          vertical: expectedVertical,
        });
      }
    );
  });

  describe('Xが減少・Yが変わらない', () => {
    test.each`
      prevX  | prevY  | nextX  | nextY  | expectedHorizontal | expectedVertical
      ${30}  | ${20}  | ${20}  | ${20}  | ${'left'}          | ${'neutral'}
      ${1}   | ${0}   | ${0}   | ${0}   | ${'left'}          | ${'neutral'}
      ${0}   | ${-1}  | ${-1}  | ${-1}  | ${'left'}          | ${'neutral'}
      ${-10} | ${-20} | ${-20} | ${-20} | ${'left'}          | ${'neutral'}
    `(
      '($prevX, $prevY) -> ($nextX, $nextY)',
      ({ prevX, prevY, nextX, nextY, expectedHorizontal, expectedVertical }) => {
        expect(targetFunction(prevX, prevY, nextX, nextY)).toStrictEqual({
          horizontal: expectedHorizontal,
          vertical: expectedVertical,
        });
      }
    );
  });

  describe('Xが変わらない・Yが増加', () => {
    test.each`
      prevX  | prevY  | nextX  | nextY  | expectedHorizontal | expectedVertical
      ${20}  | ${20}  | ${20}  | ${30}  | ${'neutral'}       | ${'bottom'}
      ${0}   | ${0}   | ${0}   | ${1}   | ${'neutral'}       | ${'bottom'}
      ${-1}  | ${-1}  | ${-1}  | ${0}   | ${'neutral'}       | ${'bottom'}
      ${-20} | ${-20} | ${-20} | ${-10} | ${'neutral'}       | ${'bottom'}
    `(
      '($prevX, $prevY) -> ($nextX, $nextY)',
      ({ prevX, prevY, nextX, nextY, expectedHorizontal, expectedVertical }) => {
        expect(targetFunction(prevX, prevY, nextX, nextY)).toStrictEqual({
          horizontal: expectedHorizontal,
          vertical: expectedVertical,
        });
      }
    );
  });

  describe('Xが変わらない・Yが減少', () => {
    test.each`
      prevX  | prevY  | nextX  | nextY  | expectedHorizontal | expectedVertical
      ${20}  | ${30}  | ${20}  | ${20}  | ${'neutral'}       | ${'top'}
      ${0}   | ${1}   | ${0}   | ${0}   | ${'neutral'}       | ${'top'}
      ${-1}  | ${0}   | ${-1}  | ${-1}  | ${'neutral'}       | ${'top'}
      ${-20} | ${-10} | ${-20} | ${-20} | ${'neutral'}       | ${'top'}
    `(
      '($prevX, $prevY) -> ($nextX, $nextY)',
      ({ prevX, prevY, nextX, nextY, expectedHorizontal, expectedVertical }) => {
        expect(targetFunction(prevX, prevY, nextX, nextY)).toStrictEqual({
          horizontal: expectedHorizontal,
          vertical: expectedVertical,
        });
      }
    );
  });

  describe('Xが変わらない・Yが変わらない', () => {
    test.each`
      prevX  | prevY  | nextX  | nextY  | expectedHorizontal | expectedVertical
      ${20}  | ${20}  | ${20}  | ${20}  | ${'neutral'}       | ${'neutral'}
      ${0}   | ${0}   | ${0}   | ${0}   | ${'neutral'}       | ${'neutral'}
      ${-1}  | ${-1}  | ${-1}  | ${-1}  | ${'neutral'}       | ${'neutral'}
      ${-20} | ${-20} | ${-20} | ${-20} | ${'neutral'}       | ${'neutral'}
    `(
      '($prevX, $prevY) -> ($nextX, $nextY)',
      ({ prevX, prevY, nextX, nextY, expectedHorizontal, expectedVertical }) => {
        expect(targetFunction(prevX, prevY, nextX, nextY)).toStrictEqual({
          horizontal: expectedHorizontal,
          vertical: expectedVertical,
        });
      }
    );
  });
});
