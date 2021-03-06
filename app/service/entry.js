const Service = require('egg').Service;
class EntryService extends Service {
  // 默认不需要提供构造函数。
  // constructor(ctx) {
  //   super(ctx); 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
  //   // 就可以直接通过 this.ctx 获取 ctx 了
  //   // 还可以直接通过 this.app 获取 app 了
  // }
    async select() {
        const data = await this.app.mysql.select('entry', {'where': {'is_deleted': 0}});
        return data;
    }

    async add(insertData) {
        console.log('insertData:', insertData);
        const result = await this.app.mysql.insert('entry', insertData);
        return result.affectedRows === 1;
    }

    async deleteByid(id) {
        const result = await this.app.mysql.update('entry', {'is_deleted': 1}, {'where': {'id': id}});
        return result.affectedRows === 1;
    }

    async getDetailsByid(id) {
        const result = await this.app.mysql.get('entry', {'id': id});
        return result;
    }


    async switchDisplayByid(id, row={}) {
        const result = await this.app.mysql.update('entry', row, {'where': {'id': id}});
        return result.affectedRows === 1;
    }


//   async getPicture(uid) {
//     const result = await this.ctx.curl(`http://photoserver/uid=${uid}`, { dataType: 'json' });
//     return result.data;
//   }
}
module.exports = EntryService;