/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {

        security: {
            csrf: {
                enable: false,
            }, // 必须加 否则： 403 Forbidden message: "missing csrf token"
            // domainWhiteList: [ '*' ]
        },
        cors: {
            origin: '*',
            allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
        },
        jwt: {
            secret: 'lxl',
        }
    };

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_lxl';

    // add your middleware config here
    config.routerAuth = ['/api/login', '/', '/api/home/getEntryList', '/api/checkToken'];
    config.middleware = ['report', 'auth'];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig,
    };
};
