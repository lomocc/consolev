/* eslint-disable */
module.exports = function () {
  const args = Array.prototype.slice
    .call(arguments)
    .map((val) => {
      if (val === undefined) {
        return 'undefined';
      } else if (typeof val === 'string') {
        return val;
      }
      try {
        return JSON.stringify(val);
      } catch (error) {
        return '[TypeError]';
      }
    })
    .join(' ');
  console.log(
    `%c [${process.env.NODE_ENV}] %c ${args}`,
    `background: ${
      process.env.NODE_ENV === 'production' ? '#000' : '#f00'
    }; color: #fff;`,
    ``
  );
};
