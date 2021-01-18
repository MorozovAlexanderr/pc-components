const express = require('express')
const x = require('x-ray-scraper')
const app = express()
const port = 3000

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/motherboards', (req, res) => {
    x('https://hard.rozetka.com.ua/motherboards/c80082/', '.goods-tile', [
        {
            title: '.goods-tile__title',
            id: '.g-id',
            info: ['.goods-tile__description-control'],
            image: 'img.lazy_img_hover@src'
        }
    ])
        .then(obj => {
            res.send(JSON.stringify(obj))
        });
})

app.get('/coolers', (req, res) => {
    x('https://hard.rozetka.com.ua/coolers/c80099/', '.goods-tile', [
        {
            title: '.goods-tile__title',
            id: '.g-id',
            info: ['.goods-tile__description-control'],
            image: 'img.lazy_img_hover@src'
        }
    ])
        .then(obj => {
            res.send(JSON.stringify(obj))
        });
})

app.get('/videocards', (req, res) => {
    x('https://hard.rozetka.com.ua/videocards/c80087/', '.goods-tile', [
        {
            title: '.goods-tile__title',
            id: '.g-id',
            info: ['.goods-tile__description-control'],
            image: 'img.lazy_img_hover@src'
        }
    ])
        .then(obj => {
            res.send(JSON.stringify(obj))
        });
})

app.get('/processors', (req, res) => {
    x('https://hard.rozetka.com.ua/processors/c80083/', '.goods-tile', [
        {
            title: '.goods-tile__title',
            id: '.g-id',
            info: ['.goods-tile__description-control'],
            image: 'img.lazy_img_hover@src'
        }
    ])
        .then(obj => {
            res.send(JSON.stringify(obj))
        });
})

app.get('/memory', (req, res) => {
    x('https://hard.rozetka.com.ua/memory/c80081/', '.goods-tile', [
        {
            title: '.goods-tile__title',
            id: '.g-id',
            info: ['.goods-tile__description-control'],
            image: 'img.lazy_img_hover@src'
        }
    ])
        .then(obj => {
            res.send(JSON.stringify(obj))
        });
})

app.get('/psu', (req, res) => {
    x('https://hard.rozetka.com.ua/psu/c80086/', '.goods-tile', [
        {
            title: '.goods-tile__title',
            id: '.g-id',
            info: ['.goods-tile__description-control'],
            image: 'img.lazy_img_hover@src'
        }
    ])
        .then(obj => {
            res.send(JSON.stringify(obj))
        });
})

app.get('/hdd', (req, res) => {
    x('https://hard.rozetka.com.ua/hdd/c80084/', '.goods-tile', [
        {
            title: '.goods-tile__title',
            id: '.g-id',
            info: '.goods-tile__description-control',
            image: 'img.lazy_img_hover@src'
        }
    ])
        .then(obj => {
            res.send(JSON.stringify(obj))
        });
})

app.get('/optical-drives', (req, res) => {
    x('https://hard.rozetka.com.ua/hdd/c80084/optical-drives/c80085/', '.goods-tile', [
        {
            title: '.goods-tile__title',
            id: '.g-id',
            info: ['.goods-tile__description-control'],
            image: 'img.lazy_img_hover@src'
        }
    ])
        .then(obj => {
            res.send(JSON.stringify(obj))
        });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
