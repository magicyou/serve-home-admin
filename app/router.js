'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.post('/login', controller.login.index);
    router.get('/home/getEntryList', controller.home.getEntryList);
    router.post('/home/addEntry', controller.home.addEntry);
    router.delete('/home/deleteEntryById', controller.home.deleteEntryById);
    router.put('/home/switchEntryDisplayByid', controller.home.switchEntryDisplayByid);
};
