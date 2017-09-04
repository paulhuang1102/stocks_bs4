const serverUrl = 'http://localhost:3000';


document.querySelector('.news').addEventListener('click', (e) => {
    e.preventDefault();
    getRequest('/getNews', (data) => {
        console.log(data);
    });
});

const getRequest = (path, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open('get', serverUrl + path);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
    xhr.onload = function() {
        const data = JSON.parse(xhr.responseText);
        callback(data);
    }
};

document.querySelector('.search').addEventListener('click', (e) => {
    e.preventDefault();
    getRequest('/getProfit', data => {

    })
});