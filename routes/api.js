'use strict';

const translator = require('../components/translator.js');

module.exports = function (app) {

<<<<<<< HEAD
  app.route('/api/translate')
    .post((req, res) => {
      return res.json(translator.translator(req.body.locale, req.body.text));
    });
};
=======
  app.route('/api/translate').post((req, res) => {
    let { locale, text } = req.body;

    if (!locale || text === undefined) {
      return res.json({ error: 'Required field(s) missing' });
    }

    if (text === '') {
      return res.json({ error: 'No text to translate' });
    }

    if (locale === 'american-to-british' || locale === 'british-to-american') {
      let translated = translator.translate(text, locale);

      if (translated) {
        if (text === translated[0] || !translated[0]) {
          return res.json({ text: text, translation: 'Everything looks good to me!' });
        } else {
          return res.json({ text: text, translation: translated[1] });
        }
      } else {
        return res.json({ text: text, translation: 'Everything looks good to me!' });
      }
    } else {
      return res.json({ text: text, error: 'Invalid value for locale field' });
    }
  });
};

>>>>>>> c04fb1283481595eabd8b7ccbe1be22d8f6e6a69
