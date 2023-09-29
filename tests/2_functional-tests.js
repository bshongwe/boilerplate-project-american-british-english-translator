const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let translator = require('../components/translator.js');

suite('Functional Tests', () => {
  // Test #1
  test("Translation with text and locale fields: POST request to /api/translate", function (done) {
    chai.request(server)
      .post('/api/translate')
      .send({ locale: 'british-to-american', text: 'We watched the footie match for a while.'
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.text, 'We watched the footie match for a while.');
        assert.equal(res.body.translation, 'We watched the <span class="highlight">soccer</span> match for a while.');
        done();
      });
    after(function() {
      chai.request(server).get('/api')
    });
  });

<<<<<<< HEAD
  // Test #2
  test("Translation with text and invalid locale field: POST request to /api/translate", function (done) {
    chai.request(server)
      .post('/api/translate')
      .send({ locale: 'spanish', text: 'I ate yogurt for breakfast.'
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'Invalid value for locale field');
        done();
      });
    after(function() {
      chai.request(server).get('/api')
    });
  });

  // Test #3
  test("Translation with missing text field: POST request to /api/translate", function (done) {
    chai.request(server)
      .post('/api/translate')
      .send({ locale: 'british-to-american'
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      });
    after(function() {
      chai.request(server).get('/api')
    });
  });

  // Test #4
  test("Translation with missing locale field: POST request to /api/translate", function (done) {
    chai.request(server)
      .post('/api/translate')
      .send({ text: 'Can you toss this in the trashcan for me?'
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      });
    after(function() {
      chai.request(server).get('/api')
    });
  });

  // Test #5
  test("Translation with empty text: POST request to /api/translate", function (done) {
    chai.request(server)
      .post('/api/translate')
      .send({ locale: 'british-to-american', text: ' '
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'No text to translate');
        done();
      });
    after(function() {
      chai.request(server).get('/api')
    });
  });

  // Test #6
  test("Translation with text that needs no translation: POST request to /api/translate", function (done) {
    chai.request(server)
      .post('/api/translate')
      .send({ locale: 'american-to-british', text: 'We watched the footie match for a while.'
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.translation, 'Everything looks good to me!');
        done();
      });
    after(function() {
      chai.request(server).get('/api')
    });
  });
});
=======
    test('Translation with text and locale fields: POST request to /api/translate', done => {
        chai
        .request(server)
        .post('/api/translate')
        .send({text: 'Have you met Mrs Kalyani?', locale: 'british-to-american'})
        .end((err, res) => {
            //assert.equal(res.status, 200)
            assert.property(res.body, 'text')
            assert.equal(res.body.text, 'Have you met Mrs Kalyani?')
            assert.property(res.body, 'translation')
            assert.equal(res.body.translation, 'Have you met <span class="highlight">Mrs.</span> Kalyani?')
            done();
        });
      after(function() {
        chai.request(server).get('/api')
      });
    });

    test('Translation with text and invalid locale field: POST request to /api/translate', done => {
        chai
        .request(server)
        .post('/api/translate')
        .send({text: 'Have you met Mrs Kalyani?', locale: 'french-to-american'})
        .end((err, res) => {
            assert.property(res.body, 'error')
            assert.equal(res.body.error, 'Invalid value for locale field')
            done();
        });
      after(function() {
        chai.request(server).get('/api')
      });
    });

    test('Translation with missing text field: POST request to /api/translate', done => {
        chai
        .request(server)
        .post('/api/translate')
        .send({locale: 'british-to-american'})
        .end((err, res) => {
            assert.property(res.body, 'error')
            assert.equal(res.body.error, 'Required field(s) missing')
            done();
        });
      after(function() {
        chai.request(server).get('/api')
      });
    });

    test('Translation with missing locale field: POST request to /api/translate', done => {
        chai
        .request(server)
        .post('/api/translate')
        .send({text:'Hi there'})
        .end((err, res) => {
            assert.property(res.body, 'error')
            assert.equal(res.body.error, 'Required field(s) missing')
            done();
        });
      after(function() {
        chai.request(server).get('/api')
      });
    });

    test('Translation with empty text: POST request to /api/translate', done => {
        chai
        .request(server)
        .post('/api/translate')
        .send({text:'', locale: 'british-to-american'})
        .end((err, res) => {
            assert.property(res.body, 'error')
            assert.equal(res.body.error, 'No text to translate')
            done();
        });
      after(function() {
        chai.request(server).get('/api')
      });
    });

    test('Translation with text that needs no translation: POST request to /api/translate', done => {
        chai
        .request(server)
        .post('/api/translate')
        .send({text:'Hi there', locale: 'british-to-american'})
        .end((err, res) => {
            assert.property(res.body, 'text')
            assert.equal(res.body.text, 'Hi there')
            assert.property(res.body, 'translation')
            assert.equal(res.body.translation, 'Everything looks good to me!')
            done();
        });
      after(function() {
        chai.request(server).get('/api')
      });
    });
});
>>>>>>> c04fb1283481595eabd8b7ccbe1be22d8f6e6a69
