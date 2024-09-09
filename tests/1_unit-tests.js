const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let trans = new Translator
suite('Unit Tests', () => {
 suite('Function translator.americanToBritish', () => {
    //Translate Mangoes are my favorite fruit. to British English
    test('Translate Mangoes are my favorite fruit. to British English', (done) => {
        let text = "Mangoes are my favorite fruit."
        assert.equal(trans.americanToBritish(text), 'Mangoes are my <span class="highlight">favourite</span> fruit.');
        done();
        });
    //Translate I ate yogurt for breakfast. to British English
    test('I ate yogurt for breakfast. to British English', (done) => {
        let text = "I ate yogurt for breakfast."
        assert.equal(trans.americanToBritish(text), 'I ate <span class="highlight">yoghurt</span> for breakfast.');
        done();
    });
    //Translate We had a party at my friend's condo. to British English
    test('We had a party at my friend\'s condo. to British English', (done) => {
        let text = "We had a party at my friend's condo."
        assert.equal(trans.americanToBritish(text), 'We had a party at my friend\'s <span class="highlight">flat</span>.');
        done();
    });
    //Translate Can you toss this in the trashcan for me? to British English
    test('Can you toss this in the trashcan for me?', (done) => {
        let text = "Can you toss this in the trashcan for me?"
        assert.equal(trans.americanToBritish(text), 'Can you toss this in the <span class="highlight">bin</span> for me?');
        done();
    });
    //Translate The parking lot was full. to British English
    test('The parking lot was full.', (done) => {
        let text = "The parking lot was full."
        assert.equal(trans.americanToBritish(text), 'The <span class="highlight">car park</span> was full.');
        done();
    });
    //Translate Like a high tech Rube Goldberg machine. to British English
    test('Like a high tech Rube Goldberg machine.', (done) => {
        let text = "Like a high tech Rube Goldberg machine."
        assert.equal(trans.americanToBritish(text), 'Like a high tech <span class="highlight">Heath Robinson device</span>.');
        done();
    });
    //Translate To play hooky means to skip class or work. to British English
    test('To play hooky means to skip class or work.', (done) => {
        let text = "To play hooky means to skip class or work."
        assert.equal(trans.americanToBritish(text), 'To <span class="highlight">bunk off</span> means to skip class or work.');
        done();
    });
    //Translate No Mr. Bond, I expect you to die. to British English
    test('No Mr. Bond, I expect you to die.', (done) => {
        let text = "No Mr. Bond, I expect you to die."
        assert.equal(trans.americanToBritish(text), 'No <span class="highlight">Mr</span> Bond, I expect you to die.');
        done();
    });
    //Translate Dr. Grosh will see you now. to British English
    test('Dr. Grosh will see you now.', (done) => {
        let text = "Dr. Grosh will see you now."
        assert.equal(trans.americanToBritish(text), '<span class="highlight">Dr</span> Grosh will see you now.');
        done();
    });
    //Translate Lunch is at 12:15 today. to British English
    test('Lunch is at 12:15 today.', (done) => {
        let text = "Lunch is at 12:15 today."
        assert.equal(trans.americanToBritish(text), 'Lunch is at <span class="highlight">12.15</span> today.');
        done();
    });
    })
 suite('Function translator.BritishToAmerican', () => {
    //Translate We watched the footie match for a while. to American English
    test('We watched the footie match for a while.', (done) => {
        let input = 'We watched the footie match for a while.'
        assert.equal(trans.britishToAmerican(input), 'We watched the <span class="highlight">soccer</span> match for a while.');
        done();
        });
    //Translate Paracetamol takes up to an hour to work. to American English
    test('Paracetamol takes up to an hour to work.', (done) => {
        let input = 'Paracetamol takes up to an hour to work.'
        assert.equal(trans.britishToAmerican(input), '<span class="highlight">Tylenol</span> takes up to an hour to work.');
        done();
        });
    //Translate First, caramelise the onions. to American English
    test('First, caramelise the onions.', (done) => {
        let input = 'First, caramelise the onions.'
        assert.equal(trans.britishToAmerican(input), 'First, <span class="highlight">caramelize</span> the onions.');
        done();
        });
    //Translate I spent the bank holiday at the funfair. to American English
    test('I spent the bank holiday at the funfair.', (done) => {
        let input = 'I spent the bank holiday at the funfair.'
        assert.equal(trans.britishToAmerican(input), 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.');
        done();
        });
    //Translate I had a bicky then went to the chippy. to American English
    test('I had a bicky then went to the chippy.', (done) => {
        let input = 'I had a bicky then went to the chippy.'
        assert.equal(trans.britishToAmerican(input), 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-<span class="highlight">fish-and-chip shop</span></span>.');
        done();
        });
    //Translate I've just got bits and bobs in my bum bag. to American English
    test("I've just got bits and bobs in my bum bag.", (done) => {
        let input = "I've just got bits and bobs in my bum bag."
        assert.equal(trans.britishToAmerican(input), 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.');
        done();
        });
    //Translate The car boot sale at Boxted Airfield was called off. to American English
    test('The car boot sale at Boxted Airfield was called off.', (done) => {
        let input = 'The car boot sale at Boxted Airfield was called off.'
        assert.equal(trans.britishToAmerican(input), 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
        done();
        });
    //Translate Have you met Mrs Kalyani? to American English
    test('Have you met Mrs Kalyani?', (done) => {
        let input = 'Have you met Mrs Kalyani?'
        assert.equal(trans.britishToAmerican(input), 'Have you met <span class="highlight">Mr.</span>s Kalyani?');
        done();
        });
    //Translate Prof Joyner of King's College, London. to American English
    test('Prof Joyner of King\'s College, London.', (done) => {
        let input = 'Prof Joyner of King\'s College, London.'
        assert.equal(trans.britishToAmerican(input), '<span class="highlight">Prof.</span> Joyner of King\'s College, London.');
        done();
        });
    //Translate Tea time is usually around 4 or 4.30. to American English
    test('Tea time is usually around 4 or 4.30.', (done) => {
        let input = 'Tea time is usually around 4 or 4.30.'
        assert.equal(trans.britishToAmerican(input), 'Tea time is usually around 4 or <span class="highlight">4:30</span>.');
        done();
        });
 suite('Highlight in span function', () => {
    //Highlight translation in Mangoes are my favorite fruit.    
    test('Highlight translation in Mangoes are my favorite fruit.', (done) => {
        let translated = trans.americanToBritish('Mangoes are my favorite fruit.')
        assert.include(translated, '<span class=\"highlight\">');
        done();
    })  
    //Highlight translation in I ate yogurt for breakfast.
    test('Highlight translation in I ate yogurt for breakfast.', (done) => {
        let translated = trans.americanToBritish('Highlight translation in I ate yogurt for breakfast.')
        assert.include(translated, '<span class="highlight">');
        done();
    }) 
     });
     //Highlight translation in We watched the footie match for a while.
     test('We watched the footie match for a while.', (done) => {
        let input = 'We watched the footie match for a while.'
        let translated = trans.britishToAmerican(input)        
        assert.include(translated, '<span class="highlight">');
        done();
        });
    //Highlight translation in Paracetamol takes up to an hour to work.
    test('Paracetamol takes up to an hour to work.', (done) => {
        let input = 'Paracetamol takes up to an hour to work.'
        let translated = trans.britishToAmerican(input)        
        assert.include(translated, '<span class="highlight">');
        done();
        });
    })
});
