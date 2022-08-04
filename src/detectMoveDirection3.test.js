import * as targetFunctions from './detectMoveDirection';

describe.each(Object.values(targetFunctions))('%p test', (targetFunction) => {
  describe.each`
    caseName           | nextX | expectedHorizontal
    ${'Xが増加'}       | ${30} | ${'right'}
    ${'Xが減少'}       | ${10} | ${'left'}
    ${'Xが変わらない'} | ${20} | ${'neutral'}
  `('$caseName', ({ nextX, expectedHorizontal }) => {
    test.each`
      caseNameY          | nextY | expectedVertical
      ${'Yが増加'}       | ${30} | ${'bottom'}
      ${'Yが減少'}       | ${10} | ${'top'}
      ${'Yが変わらない'} | ${20} | ${'neutral'}
    `('$caseNameY', ({ nextY, expectedVertical }) => {
      expect(targetFunction(20, 20, nextX, nextY)).toStrictEqual({
        horizontal: expectedHorizontal,
        vertical: expectedVertical,
      });
    });
  });
});
