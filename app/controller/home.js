'use strict';

const ApiController = require('./api');

class HomeController extends ApiController {
    async index() {
        const { ctx } = this;
        ctx.body = 'hi, egg';
    }

    async getEntryList() {
        const { ctx } = this;
        const data = await ctx.service.entry.select();
        ctx.body = {
            code: 0,
            msg: 'success',
            data,
        };
    }

    async getEntryList2() {
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

    async addEntry() {
        const { ctx, app } = this;
        const params = ctx.request.body;
        const result = await ctx.service.entry.add();
        if (!result) {
            ctx.body = {
                code: 1,
                msg: 'fail',
                data: result
            };
            return false;
        }
        ctx.body = {
            code: 0,
            msg: 'success',
            data: result
        };
    }

    async deleteEntryById() {
        const { ctx, app } = this;
        const { id } = ctx.request.body;
        const result = await ctx.service.entry.del(id);
        if (!result) {
            ctx.body = {
                code: 1,
                msg: 'fail',
                data: result
            };
            return false;
        }
        ctx.body = {
            code: 0,
            msg: 'success',
            data: result
        };
    }

}

module.exports = HomeController;
