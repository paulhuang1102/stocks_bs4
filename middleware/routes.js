const fs = require('fs');
const path = require('path');

const folder = path.resolve(__dirname, '../api');;

const routeSet = (app) => {
    console.log('init routes');
    const Apis = [];
    return new Promise((resolve, rejsct) => {
        fs.readdir(folder, (err, files) => {
            if (err) rejsct(err);

            for (const file of files) {
                const api = require(`../api/${file}`);
                const apiObj = new api();
                Apis.push(apiObj);
                const { routes } = apiObj;
                
                for (const route of routes)
                {
                    app[route.method.toLowerCase()](route.url.toLowerCase(), apiObj.exec);
                }
            }
            Promise.all(Apis.map(v => v.init()))
                .then(() => {
                    resolve();
                });
        });
    })
}

module.exports = routeSet;
