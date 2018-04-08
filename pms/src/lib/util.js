/**
 * Created by John on 2017/11/29.
 */
const v4 = require('uuid/v4');

const Util = {
  uuid() {
    return v4();
  },
};
module.exports = Util;
