module.exports = function (format) {
  const { performance } = require('perf_hooks');

  if (!format || typeof format !== 'string') {
    throw new Error('first argument is not string.');
  }

  const now = new Date().getMilliseconds();
  const isExistPerformance = performance && performance.now();
  let coefficient = now;

  if (isExistPerformance) {
    coefficient += performance.now();
  }

  return format.replace(/[xy]/g, char => {
    const rand = (coefficient + Math.random() * 16) % 16 | 0;
    return (char === 'x' ? rand : (rand & 0x3 | 0x8)).toString(16);
  });
};
