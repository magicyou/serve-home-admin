module.exports = (options, app) => {
    return async function (ctx, next) {
        //拿到不需要验证的token的路由
        const routerAuth = app.config.routerAuth;
        //获取当前路由
        const url = ctx.url;
        console.log('********');
        console.log('method:', ctx.method);
        console.log('url:', url);
        console.log('********');
        //判断当前路由是否需要验证token
        const flag = routerAuth.includes(url)

        // if ('/api/checkToken' === url) {
            
        // } else 
        
        if (flag && '/api/checkToken' !== url) {
            await next();
            return false;
        } else {
            //获取token,如果没有传入token，则为空
            let token = ctx.headers.authorization ? ctx.headers.authorization : '';
            token = token.substring(7); //把Bearer 截取掉，解析的时候不需要加上Bearer
            let decode = '';
            if ('/api/checkToken' === url && !token) {
                ctx.state.userinfo = null;
            } else {
                try {
                    decode = await app.jwt.verify(token, app.config.jwt.secret);
                    ctx.state.userinfo = decode;
                } catch (err) {
                    ctx.status = 401;
                    ctx.body = {
                        code: 401,
                        message: 'token失效或解析错误',
                        data: null
                    };
                    return false;
                }
            }
            
            await next();

        }

    }
}