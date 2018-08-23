/**
 * Created by Vincent on 2017/10/23.
 */
module.exports = function() {
  console.log(
    '%c [%s] %s ',
    'background: ' +
      (process.env.NODE_ENV === 'production' ? '#000' : '#f00') +
      '; color: #fff;',
    process.env.NODE_ENV,
    v ? Array.prototype.slice.call(arguments).toString() : process.env.VERSION
  ); // eslint-disable-line
};