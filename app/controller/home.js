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

    /**
     * 添加新入口
     * @author Bruce Lee
     * @date 2021-05-17
     * @returns {any}
     */
    async addEntry() {
        const { ctx, app } = this;
        const params = ctx.request.body;
        const insertData = {
            name: params.name,
            icon: params.icon,
            link_url: params.link_url,
        };
        const result = await ctx.service.entry.add(insertData);
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
        const { id } = ctx.request.query;
        if (!id) {

            ctx.body = {
                code: 1,
                msg: '删除失败',
                data: null
            };
            return false;
        }

        const result = await ctx.service.entry.deleteByid(id);
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

    async switchEntryDisplayByid() {
        const { ctx, app } = this;
        const { id } = ctx.request.body;
        if (!id) {

            ctx.body = {
                code: 1,
                msg: '更改失败',
                data: null
            };
            return false;
        }
        const details = await ctx.service.entry.getDetailsByid(id);
        if (!details) {
            ctx.body = {
                code: 1,
                msg: '入口数据不存在',
                data: result
            };
            return false;
        }

        let row = {
            display: !details.display
        }
        const result = await ctx.service.entry.switchDisplayByid(id, row);
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
