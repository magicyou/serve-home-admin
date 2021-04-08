'use strict';

const ApiController = require('./api');

class HomeController extends ApiController {
    async index() {
        const { ctx } = this;
        ctx.body = 'hi, egg';
    }
    async getEntryList() {
        const { ctx } = this;
        const data = [
            {id: 1, 'name': 'Blog', icon:'iconbiji', linkUrl: 'https://blog.magicyou.cn/'},
            {id: 2, 'name': 'Cloud', icon:'iconwenjianjia', linkUrl: ''},
            {id: 3, 'name': 'Frp', icon:'icondiannao', linkUrl: ''},
            {id: 4, 'name': 'Pi', icon:'iconcaomeigan', linkUrl: 'http://pi.magicyou.cn/'},
        ];
        ctx.body = {
            code: 0,
            msg: 'success',
            data,
        };
    }
}

module.exports = HomeController;
