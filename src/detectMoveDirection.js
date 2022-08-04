export function detectMoveDirection(prevX, prevY, nextX, nextY) {
  const toLeft = prevX - nextX > 0;
  const toRight = prevX - nextX < 0;
  const toTop = prevY - nextY > 0;
  const toBottom = prevY - nextY < 0;

  return {
    horizontal: toLeft ? 'left' : toRight ? 'right' : 'neutral',
    vertical: toTop ? 'top' : toBottom ? 'bottom' : 'neutral',
  };
}

export function ugly(prevX, prevY, nextX, nextY) {
  return {
    horizontal: prevX - nextX > 0 ? 'left' : prevX - nextX < 0 ? 'right' : 'neutral',
    vertical: prevY - nextY > 0 ? 'top' : prevY - nextY < 0 ? 'bottom' : 'neutral',
  };
}

export function fool(prevX, prevY, nextX, nextY) {
  let horizontal = 'neutral';
  if (prevX - nextX > 0) {
    horizontal = 'left';
  }
  if (prevX - nextX < 0) {
    horizontal = 'right';
  }

  let vertical = 'neutral';
  if (prevY - nextY > 0) {
    vertical = 'top';
  }
  if (prevY - nextY < 0) {
    vertical = 'bottom';
  }

  return { horizontal, vertical };
}

export function fool2(prevX, prevY, nextX, nextY) {
  let horizontal;
  if (prevX > nextX) {
    horizontal = 'left';
  } else if (prevX < nextX) {
    horizontal = 'right';
  } else {
    horizontal = 'neutral';
  }

  let vertical;
  if (prevY > nextY) {
    vertical = 'top';
  } else if (prevY < nextY) {
    vertical = 'bottom';
  } else {
    vertical = 'neutral';
  }

  return { horizontal, vertical };
}

export function fool3(prevX, prevY, nextX, nextY) {
  const horizontal = (() => {
    if (prevX > nextX) return 'left';
    if (prevX < nextX) return 'right';
    return 'neutral';
  })();

  const vertical = (() => {
    if (prevY > nextY) return 'top';
    if (prevY < nextY) return 'bottom';
    return 'neutral';
  })();

  return { horizontal, vertical };
}
