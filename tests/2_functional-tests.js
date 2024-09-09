const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');
const { time } = require('console');

suite('Functional Tests', () => {
//Translation with text and locale fields: POST request to /api/translate
    test('Translation with text and locale fields: POST request to /api/translate', (done) => {
        let text = 'I ate yogurt for breakfast.'
        let locale = 'american-to-british'
    
        chai
        .request(server)
        .post('/api/translate')
        .send({text: text, locale: locale})
        .end(function (err, res) {
            assert.equal(res.status, 200)
            assert.equal(res.body.translation, 'I ate <span class="highlight">yoghurt</span> for breakfast.')
            done();
    })
})
//Translation with text and invalid locale field: POST request to /api/translate
    test('Translation with text and invalid locale field', (done) => {
        let text = 'hello'
        let locale = 'wakanda'

        chai
        .request(server)
        .post('/api/translate')
        .send({
            text: text, 
            locale: locale
        })
        .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.error, 'Invalid value for locale field');
            done();
        });
        
    });
//Translation with missing text field: POST request to /api/translate
    test('Translation with missing text field', (done) => {
        let locale = 'american-to-british'

        chai
        .request(server)
        .post('/api/translate')
        .send({
            locale: locale
        })
        .end(function (err, res) {
            assert.equal(res.status, 200)
            assert.equal(res.body.error, 'Required field(s) missing')
            done();
        })

    })
//Translation with missing locale field: POST request to /api/translate
    test('Translation with missing locale field', (done) => {
        let text = 'hullo'
        

        chai
        .request(server)
        .post('/api/translate')
        .send({
            text: text
        })
        .end(function (err, res) {
            assert.equal(res.status, 200)
            assert.equal(res.body.error, 'Required field(s) missing')
            done();
        })
    })
//Translation with empty text: POST request to /api/translate
    test ('Translation with empty text', (done) => {
        let input = ''
        let locale = 'american-to-british'

        chai
        .request(server)
        .post('/api/translate')
        .send({
            text: input, 
            locale: locale
        })
        .end(function (err, res) {
            assert.equal(res.status, 200)
            assert.equal(res.body.error, 'No text to translate')
            done();
        })
    })
//Translation with text that needs no translation: POST request to /api/translate
    test('Translation with text that needs no translation', (done) => {
        let input = 'La la la'
        let locale = 'american-to-british'

        chai
        .request(server)
        .post('/api/translate')
        .send({
            text: input,
            locale: locale
        })
        .end(function (err, res) {
            assert.equal(res.status, 200)
            assert.equal(res.body.translation, 'Everything looks good to me!')
            done();
        })
    })
});
