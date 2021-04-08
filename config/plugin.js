'use strict';

/** @type Egg.EggPlugin */
module.exports = {
    cors: {
        enable: true,
        package: 'egg-cors'
      },
      jwt: {
        enable: true,
        package: 'egg-jwt',
      },
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
};
