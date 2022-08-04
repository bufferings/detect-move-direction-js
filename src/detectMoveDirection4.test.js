import * as targetFunctions from './detectMoveDirection';

describe.each(Object.values(targetFunctions))('%p test', (targetFunction) => {
  describe('Xが増加', () => {
    test('Yが増加', () => {
      expect(targetFunction(20, 20, 30, 30)).toStrictEqual({
        horizontal: 'right',
        vertical: 'bottom',
      });
    });
    test('Yが減少', () => {
      expect(targetFunction(20, 20, 30, 10)).toStrictEqual({
        horizontal: 'right',
        vertical: 'top',
      });
    });
    test('Yが変わらない', () => {
      expect(targetFunction(20, 20, 30, 20)).toStrictEqual({
        horizontal: 'right',
        vertical: 'neutral',
      });
    });
  });
  describe('Xが減少', () => {
    test('Yが増加', () => {
      expect(targetFunction(20, 20, 10, 30)).toStrictEqual({
        horizontal: 'left',
        vertical: 'bottom',
      });
    });
    test('Yが減少', () => {
      expect(targetFunction(20, 20, 10, 10)).toStrictEqual({
        horizontal: 'left',
        vertical: 'top',
      });
    });
    test('Yが変わらない', () => {
      expect(targetFunction(20, 20, 10, 20)).toStrictEqual({
        horizontal: 'left',
        vertical: 'neutral',
      });
    });
  });
  describe('Xが変わらない', () => {
    test('Yが増加', () => {
      expect(targetFunction(20, 20, 20, 30)).toStrictEqual({
        horizontal: 'neutral',
        vertical: 'bottom',
      });
    });
    test('Yが減少', () => {
      expect(targetFunction(20, 20, 20, 10)).toStrictEqual({
        horizontal: 'neutral',
        vertical: 'top',
      });
    });
    test('Yが変わらない', () => {
      expect(targetFunction(20, 20, 20, 20)).toStrictEqual({
        horizontal: 'neutral',
        vertical: 'neutral',
      });
    });
  });
});
