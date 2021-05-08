'use strict';

const ApiController = require('./api');
const IconList = require('./iconfont.json');

class IconController extends ApiController {

    async getIconList() {
        const { ctx } = this;
        ctx.body = {
            code: 0,
            msg: 'success',
            data: IconList,
        };
    }
}

module.exports = IconController;
