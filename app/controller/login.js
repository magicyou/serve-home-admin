'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {

    async index() {
        const { ctx, app } = this;
        const params = ctx.request.body;
        console.log('params:', params);

        if (!params.username || !params.password) {

            ctx.body = {
                code: 1,
                msg: '账户名和密码不能为空',
                data: null
            };
            return false;
        }

        if (params.username !== 'admin') {

            ctx.body = {
                code: 1,
                msg: '账户不存在',
                data: null
            };
            return false;
        }

        if (params.password !== 'admin') {

            ctx.body = {
                code: 1,
                msg: '密码错误',
                data: null
            };
            return false;
        }

        const data = await this.getUserInfo();
        const token = app.jwt.sign({
            uid: data.id,
        }, app.config.jwt.secret);

        ctx.body = {
            code: 0,
            msg: 'success',
            data: {
                ...data,
                token,
            },
        };
    }

    getUserInfo() {
        return new Promise(resolve => {
            setTimeout(() => { // 用定时器模拟异步请求
                const data = { id: 1, name: 'admin'}
                resolve(data);
            }, 1000);
        });
    }

    checkToken () {
        const { ctx, app } = this;
        const userinfo = ctx.state.userinfo;
        console.log('userinfo:', ctx.state.userinfo);
        if (userinfo) {
            ctx.body = {
                code: 0,
                msg: 'success',
                data: userinfo,
            };
        } else {
            ctx.body = {
                code: 1,
                msg: '请先登录',
                data: null,
            };
        }
    }
}

module.exports = LoginController;
