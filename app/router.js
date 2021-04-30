'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.post('/api/login', controller.login.index);
    router.get('/api/home/getEntryList', controller.home.getEntryList);
    router.post('/api/home/addEntry', controller.home.addEntry);
    router.delete('/api/home/deleteEntryById', controller.home.deleteEntryById);
    router.put('/api/home/switchEntryDisplayByid', controller.home.switchEntryDisplayByid);
};
