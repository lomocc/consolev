/* eslint-disable */
const version = process.env.VERSION || process.env.REACT_APP_VERSION;
module.exports = function() {
  const args = Array.prototype.slice
    .call(arguments)
    .map(val => {
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
    `%c [${process.env.NODE_ENV}] ${version} %c ${args}`,
    `background: ${
      process.env.NODE_ENV === 'production' ? '#000' : '#f00'
    }; color: #fff;`,
    ``
  );
};
