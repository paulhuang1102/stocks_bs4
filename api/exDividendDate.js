const request = require('request');
const cheerio = require('cheerio');
const url = 'http://fund.bot.com.tw/z/ze/zeb/zeb.djhtm';

// router.get('/soon', (req, res) => {
//     const getData = () => {
//         return new Promise((resolve, reject) => {
//             request(url, (err, res, body) => {
//                 if (err) reject(err);
//                 const trs = [];
//                 const $ = cheerio.load(body);
//                 const l = $('#oMainTable tbody').contents().length;

//                 for (let i = 0; i < l; i++) {
//                     const h = $('#oMainTable tbody > tr').eq(i).html();
//                     if (h) trs.push(h);
//                 }

//                 console.log(trs);
//                 // trs.forEach(d => {
//                 //     console.log(d.html());
//                 // })
//                 resolve();
//             });
//         })
//     }

    
// })


class exDividendDate {
    constructor() {
        this.routes = [
            { method: 'get', url: '/api/soon' }
        ];

        this.getData = this.getData.bind(this);
        this.exec = this.exec.bind(this);
    }

    init() {
        console.log('exDividendDate init');
        return Promise.resolve();
    };

    exec(req, res) {
        this.getData()
            .then((result) => {
                res.send(result);
            })
            .catch(console.log);
    }

    getData() {
        return new Promise((resolve, reject) => {
            request(url, (err, res, body) => {
                if (err) reject(err);
                const trs = [];
                const $ = cheerio.load(body);
                const l = $('#oMainTable tbody').contents().length;

                for (let i = 0; i < l; i++) {
                    const h = $('#oMainTable tbody > tr').eq(i).html();
                    if (h) trs.push(h);
                }
                // trs.forEach(d => {
                //     console.log(d.html());
                // })
                resolve(trs);
            });
        })
    }    
}

module.exports = exDividendDate;
