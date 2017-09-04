const cheerio = require('cheerio');
const request = require('request');
const express = require('express');
const bodyParder = require('body-parser');

const app = express();
app.use(bodyParder.json());

let newsPage = 1;
const today = new Date();
const yesterday = new Date(today.setDate(today.getDate() - 1));

let newsStart = yesterday.getFullYear() + '/' + (yesterday.getMonth() + 1) + '/' + yesterday.getDate();
let newsEnd = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();

let newsPath = 'https://goodinfo.tw/StockInfo/StockAnnounceList.asp?PAGE=' + newsPage + '&START_DT=' + newsStart + '&END_DT=' + newsEnd;
let stockID = 1587;
let profitPath = 'https://goodinfo.tw/StockInfo/StockDetail.asp?STOCK_ID=';


app.get('/getNews', (req, res) => {
    let result = [];
    const getNews = () => {
        return new Promise((resolve) => {
            request(newsPath, (err, res, body) => {
                const $ = cheerio.load(body);
                let newsCom = [];
                let newsTitle = [];

                $('table[bgcolor="#EBF7FF"] tbody').last().find('nobr .link_blue').each(function() {
                    newsCom.push($(this).text())
                });

                $('table[bgcolor="#EBF7FF"] tbody').last().find('.link_black').each(function() {
                    newsTitle.push($(this).text())
                });

                for (let i in newsCom) {
                    result.push({ company: newsCom[i], title: newsTitle[i] });
                }
                resolve(result);
            });

        })
    };

    getNews()
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            console.log(error);
            res.sendStatus(400);
        })

});

app.get('/getProfit', (req, res) => {
    let result = [];
    const getStock = () => {
        return new Promise((resolve, reject) => {
            for (let s = 0; s < 20; s++) {
                request(profitPath + (stockID + s), (err, res, body) => {
                    const $ = cheerio.load(body);
                    let data = [];
                    let profit = [];
                    let name;
                    let price;
                    let tmp = [];
                    let date = [];

                    name = $('.std_tbl span a.link_blue').text();
                    price = $('.std_tbl tr[bgcolor="white"] td').first().text();
                    $('.solid_1_padding_3_1_tbl tr[bgcolor="white"] td').each(function() {
                        tmp.push($(this).text());
                    });

                    for (let d = 0; d < tmp.length; d += 2) {
                        date.push({ event: tmp[d], time: tmp[d + 1] });
                    }

                    $('.solid_1_padding_3_2_tbl[style="font-size:11pt;"]').first().find('tr td').each(function() {
                        data.push($(this).text())
                    });

                    data.splice(0, 5);
                    for (let i = 0; i < data.length - 1; i += 4) {
                        profit.push({ year: data[i], cash: data[i + 1], stock: data[i + 2], total: data[i + 3] });
                    }

                    if (data[data.length - 1] !== undefined && (data[data.length - 1]).length > 5) {
                        profit.push(data[data.length - 1]);
                    }

                    if (name.length > 6) {
                        result.push({ name, price, profit, date })
                    }

                });
            }

            if (result.length > 0) {
                resolve(result);
            } else {
                reject('來源網站表示:您的瀏覽量異常, 已影響網站速度, 目前暫時關閉服務, 請稍後再重新使用');
            }

        })
    };

    getStock()
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error)
        })

});


app.use(express.static('../docs'));
app.listen(3000, () => {
    console.log('Server running on port 3000');
});

