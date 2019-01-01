module.exports = function (format = 'xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx') {
  const { performance } = require('perf_hooks');

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
