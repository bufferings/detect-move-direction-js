import * as targetFunctions from './detectMoveDirection';

describe.each(Object.values(targetFunctions))('%p test', (targetFunction) => {
  test.each`
    prevX | prevY | nextX | nextY | expected
    ${20} | ${20} | ${30} | ${30} | ${{ horizontal: 'right', vertical: 'bottom' }}
    ${20} | ${20} | ${10} | ${30} | ${{ horizontal: 'left', vertical: 'bottom' }}
    ${20} | ${20} | ${20} | ${30} | ${{ horizontal: 'neutral', vertical: 'bottom' }}
    ${20} | ${20} | ${30} | ${10} | ${{ horizontal: 'right', vertical: 'top' }}
    ${20} | ${20} | ${10} | ${10} | ${{ horizontal: 'left', vertical: 'top' }}
    ${20} | ${20} | ${20} | ${10} | ${{ horizontal: 'neutral', vertical: 'top' }}
    ${20} | ${20} | ${30} | ${20} | ${{ horizontal: 'right', vertical: 'neutral' }}
    ${20} | ${20} | ${10} | ${20} | ${{ horizontal: 'left', vertical: 'neutral' }}
    ${20} | ${20} | ${20} | ${20} | ${{ horizontal: 'neutral', vertical: 'neutral' }}
  `('($prevX, $prevY) -> ($nextX, $nextY)', ({ prevX, prevY, nextX, nextY, expected }) => {
    expect(targetFunction(prevX, prevY, nextX, nextY)).toStrictEqual(expected);
  });
});
