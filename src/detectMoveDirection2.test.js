import * as targetFunctions from './detectMoveDirection';

describe.each(Object.values(targetFunctions))('%p test', (targetFunction) => {
  test.each`
    nextX | nextY | expectedHorizontal | expectedVertical
    ${30} | ${30} | ${'right'}         | ${'bottom'}
    ${10} | ${30} | ${'left'}          | ${'bottom'}
    ${20} | ${30} | ${'neutral'}       | ${'bottom'}
    ${30} | ${10} | ${'right'}         | ${'top'}
    ${10} | ${10} | ${'left'}          | ${'top'}
    ${20} | ${10} | ${'neutral'}       | ${'top'}
    ${30} | ${20} | ${'right'}         | ${'neutral'}
    ${10} | ${20} | ${'left'}          | ${'neutral'}
    ${20} | ${20} | ${'neutral'}       | ${'neutral'}
  `('(20, 20) -> ($nextX, $nextY)', ({ nextX, nextY, expectedHorizontal, expectedVertical }) => {
    expect(targetFunction(20, 20, nextX, nextY)).toStrictEqual({
      horizontal: expectedHorizontal,
      vertical: expectedVertical,
    });
  });
});
