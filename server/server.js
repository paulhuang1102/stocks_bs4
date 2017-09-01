const cheerio = require('cheerio');
const request = require('request');
const express = require('express');
const bodyParder = require('body-parser');

const app = express();
app.use(bodyParder.json());
app.use(bodyParder.urlencoded({ extend: true }));

let path = 'https://goodinfo.tw/StockInfo/StockAnnounceList.asp?START_DT=2017%2F8%2F29&END_DT=2017%2F9%2F1';

app.get('/getNews', (req, res) => {
    let result = [];
    const getNews = () => {
            request(path, (err, res, body) => {
                const $ = cheerio.load(body);
                let newsCom = [];
                let newsTitle = [];

                $('body table[bgcolor="#EBF7FF"] tbody').last().find('.link_blue').each(function() {
                    newsCom.push($(this).text())
                });

                $('body table[bgcolor="#EBF7FF"] tbody').last().find('.link_black').each(function() {
                    newsTitle.push($(this).text())
                });

                for (let i in newsCom) {
                    result.push({ company: newsCom[i], title: newsTitle[i] });
                }
            })
        

        }
        ;

    getNews()

    console.log(result);
    res.json(result);
})
;


app.use(express.static('../docs'));
app.listen(3000, () => {
    console.log('Server running on port 3000');
});

