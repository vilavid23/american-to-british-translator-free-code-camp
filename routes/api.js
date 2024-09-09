'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
   
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {

      let text = req.body.text
      let locale = req.body.locale
      let translation;
      
      if (text == "") return res.json({ error: 'No text to translate' })

      if (!text || !locale){
        return res.json({ error: 'Required field(s) missing' });
      } 
          
      if (locale == "american-to-british"){
        translation = translator.americanToBritish(text)
      } else if (locale == "british-to-american"){
        translation = translator.britishToAmerican(text)
      } else {
        res.json({ error: 'Invalid value for locale field' })
      }

      if (text == translation){
        translation = "Everything looks good to me!"
      }
      res.json({
        text: text,
        translation: translation
      })
    });
};
