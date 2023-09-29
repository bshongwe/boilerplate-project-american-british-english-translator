const chai = require('chai');
const assert = chai.assert;

<<<<<<< HEAD
const Translator = require('../components/translator.js');
let translator = new Translator();

const toBritish = 'american-to-british';
const toAmerican = 'british-to-american';
=======
const translator = require('../components/translator.js');
>>>>>>> c04fb1283481595eabd8b7ccbe1be22d8f6e6a69

suite('Unit Tests', () => {
  suite('Translations', () => {
    // Test #1
    test("Translate Mangoes are my favorite fruit. to British English", (done) => {
      const input = 'Mangoes are my favorite fruit.';
      const expected = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
      assert.equal(translator.translator(toBritish, input).translation, expected);
      done();
    });

    // Test #2
    test("Translate I ate yogurt for breakfast. to British English", (done) => {
      const input = 'I ate yogurt for breakfast.';
      const expected = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
      assert.equal(translator.translator(toBritish, input).translation, expected);
      done();
    });

    // Test #3
    test("Translate We had a party at my friend's condo. to British English", (done) => {
      const input = "We had a party at my friend's condo.";
      const expected = `We had a party at my friend's <span class="highlight">flat</span>.`;
      assert.equal(translator.translator(toBritish, input).translation, expected);
      done();
    });

    // Test #4
    test("Translate Can you toss this in the trashcan for me? to British English", (done) => {
      const input = 'Can you toss this in the trashcan for me?';
      const expected = 'Can you toss this in the <span class="highlight">bin</span> for me?';
      assert.equal(translator.translator(toBritish, input).translation, expected);
      done();
    });

    // Test #5
    test("Translate The parking lot was full. to British English", (done) => {
      const input = 'The parking lot was full.';
      const expected = 'The <span class="highlight">car park</span> was full.';
      assert.equal(translator.translator(toBritish, input).translation, expected);
      done();
    });

    // Test #6
    test("Translate Like a high tech Rube Goldberg machine. to British English", (done) => {
      const input = 'Like a high tech Rube Goldberg machine.';
      const expected = 'Like a high tech <span class="highlight">Heath Robinson device</span>.';
      assert.equal(translator.translator(toBritish, input).translation, expected);
      done();
    });

    // Test #7
    test("Translate To play hooky means to skip class or work. to British English", (done) => {
      const input = 'To play hooky means to skip class or work.';
      const expected = 'To <span class="highlight">bunk off</span> means to skip class or work.';
      assert.equal(translator.translator(toBritish, input).translation, expected);
      done();
    });

    // Test #8
    test("Translate No Mr. Bond, I expect you to die. to British English", (done) => {
      const input = 'No Mr. Bond, I expect you to die.';
      const expected = 'No <span class="highlight">Mr</span> Bond, I expect you to die.';
      assert.equal(translator.translator(toBritish, input).translation, expected);
      done();
    });

    // Test #9
    test("Translate Dr. Grosh will see you now. to British English", (done) => {
      const input = 'Dr. Grosh will see you now.';
      const expected = '<span class="highlight">Dr</span> Grosh will see you now.';
      assert.equal(translator.translator(toBritish, input).translation, expected);
      done();
    });

    // Test #10
    test("Translate Lunch is at 12:15 today. to British English", (done) => {
      const input = 'Lunch is at 12:15 today.';
      const expected = 'Lunch is at <span class="highlight">12.15</span> today.';
      assert.equal(translator.translator(toBritish, input).translation, expected);
      done();
    });

    // Test #11
    test("Translate We watched the footie match for a while. to American English", (done) => {
      const input = 'We watched the footie match for a while.';
      const expected = 'We watched the <span class="highlight">soccer</span> match for a while.';
      assert.equal(translator.translator(toAmerican, input).translation, expected);
      done();
    });

    // Test #12
    test("Translate Paracetamol takes up to an hour to work. to American English", (done) => {
      const input = 'Paracetamol takes up to an hour to work.';
      const expected = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
      assert.equal(translator.translator(toAmerican, input).translation, expected);
      done();
    });

    // Test #13
    test("Translate First, caramelise the onions. to American English", (done) => {
      const input = 'First, caramelise the onions.';
      const expected = 'First, <span class="highlight">caramelize</span> the onions.';
      assert.equal(translator.translator(toAmerican, input).translation, expected);
      done();
    });

    // Test #14
    test("Translate I spent the bank holiday at the funfair. to American English", (done) => {
      const input = 'I spent the bank holiday at the funfair.';
      const expected = 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
      assert.equal(translator.translator(toAmerican, input).translation, expected);
      done();
    });

    // Test #15
    test("Translate I had a bicky then went to the chippy. to American English", (done) => {
      const input = 'I had a bicky then went to the chippy.';
      const expected = 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
      assert.equal(translator.translator(toAmerican, input).translation, expected);
      done();
    });

    // Test #16
    test("Translate I've just got bits and bobs in my bum bag. to American English", (done) => {
      const input = "I've just got bits and bobs in my bum bag.";
      const expected = `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`;
      assert.equal(translator.translator(toAmerican, input).translation, expected);
      done();
    });

    // Test #17
    test("Translate The car boot sale at Boxted Airfield was called off. to American English", (done) => {
      const input = 'The car boot sale at Boxted Airfield was called off.';
      const expected = 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
      assert.equal(translator.translator(toAmerican, input).translation, expected);
      done();
    });

    // Test #18
    test("Translate Have you met Mrs Kalyani? to American English", (done) => {
      const input = 'Have you met Mrs Kalyani?';
      const expected = 'Have you met <span class="highlight">Mrs.</span> Kalyani?';
      assert.equal(translator.translator(toAmerican, input).translation, expected);
      done();
    });

    // Test #19
    test("Translate Prof Joyner of King's College, London. to American English", (done) => {
      const input = "Prof Joyner of King's College, London.";
      const expected = `<span class="highlight">Prof.</span> Joyner of King's College, London.`;
      assert.equal(translator.translator(toAmerican, input).translation, expected);
      done();
    });

    // Test #20
    test("Translate Tea time is usually around 4 or 4.30. to American English", (done) => {
      const input = 'Tea time is usually around 4 or 4.30.';
      const expected = 'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
      assert.equal(translator.translator(toAmerican, input).translation, expected);
      done();
    });
  });

  suite('Highlightings', () => {
    const expected = 'Everything looks good to me!'
    // Highlight #1
    test("Highlight translation in Mangoes are my favorite fruit.", (done) => {
      const input = 'Mangoes are my favorite fruit.';
      assert.equal(translator.translator(toAmerican, input).translation, expected);
      done();
    });

    // Highlight #2
    test("Highlight translation in I ate yogurt for breakfast.", (done) => {
      const input = 'I ate yogurt for breakfast.';
      assert.equal(translator.translator(toAmerican, input).translation, expected);
      done();
    });

    // Highlight #3
    test("Highlight translation in We watched the footie match for a while.", (done) => {
      const input = 'We watched the footie match for a while.';
      assert.equal(translator.translator(toBritish, input).translation, expected);
      done();
    });

<<<<<<< HEAD
    // Highlight #4
    test("Highlight translation in Paracetamol takes up to an hour to work.", (done) => {
     const input = 'Paracetamol takes up to an hour to work.';
      assert.equal(translator.translator(toBritish, input).translation, expected);
      done();
    });
  });
});
=======
    test('Translate Mangoes are my favorite fruit. to British English', (done) => {
        assert.equal(translator('Mangoes are my favorite fruit.', 'american-to-british')[0], 'Mangoes are my favourite fruit.')
        done();
    });

    test('Translate I ate yogurt for breakfast. to British English', (done) => {
        assert.equal(translator('I ate yogurt for breakfast.', 'american-to-british')[0], 'I ate yoghurt for breakfast.')
        done();
    });
  
    test('Translate We had a party at my friend\'s condo. to British English', (done) => {
        assert.equal(translator('We had a party at my friend\'s condo.', 'american-to-british')[0], 'We had a party at my friend\'s flat.')
        done();
    });

    test('Translate Can you toss this in the trashcan for me? to British English', (done) => {
        assert.equal(translator('Can you toss this in the trashcan for me?', 'american-to-british')[0], 'Can you toss this in the bin for me?')
        done();
    });

    test('Translate The parking lot was full. to British English', (done) => {
        assert.equal(translator('The parking lot was full.', 'american-to-british')[0], 'The car park was full.')
        done();
    });

    test('Translate Like a high tech Rube Goldberg machine. to British English', (done) => {
        assert.equal(translator('Like a high tech Rube Goldberg machine.', 'american-to-british')[0], 'Like a high tech Heath Robinson device.')
        done();
    });

    test('Translate To play hooky means to skip class or work. to British English', (done) => {
        assert.equal(translator('To play hooky means to skip class or work.', 'american-to-british')[0], 'To bunk off means to skip class or work.')
        done();
    });

    test('Translate No Mr. Bond, I expect you to die. to British English', (done) => {
        assert.equal(translator('Mr. Bond, I expect you to die.', 'american-to-british')[0], 'Mr Bond, I expect you to die.')
        done();
    });

    test('Translate Dr. Grosh will see you now. to British English', (done) => {
        assert.equal(translator('Dr. Grosh will see you now.', 'american-to-british')[0], 'Dr Grosh will see you now.')
        done();
    });
  
    test('Translate Lunch is at 12:15 today. to British English', (done) => {
        assert.equal(translator('Lunch is at 12:15 today.', 'american-to-british')[0], 'Lunch is at 12.15 today.')
        done();
    });

    test('Translate We watched the footie match for a while. to American English', (done) => {
        assert.equal(translator('We watched the footie match for a while.', 'british-to-american')[0], 'We watched the soccer match for a while.')
        done();
    });

    test('Translate Paracetamol takes up to an hour to work. to American English', (done) => {
        assert.equal(translator('Paracetamol takes up to an hour to work.', 'british-to-american')[0], 'Tylenol takes up to an hour to work.')
        done();
    });
  
    test('Translate First, caramelise the onions. to American English', (done) => {
        assert.equal(translator('First, caramelise the onions.', 'british-to-american')[0], 'First, caramelize the onions.')
        done();
    });
  
    test('Translate I spent the bank holiday at the funfair. to American English', (done) => {
        assert.equal(translator('I spent the bank holiday at the funfair.', 'british-to-american')[0], 'I spent the public holiday at the carnival.')
        done();
    });
  
    test('Translate I had a bicky then went to the chippy. to American English', (done) => {
        assert.equal(translator('I had a bicky then went to the chippy.', 'british-to-american')[0], 'I had a cookie then went to the fish-and-chip shop.')
        done();
    });
  
    test('Translate I\'ve just got bits and bobs in my bum bag. to American English', (done) => {
        assert.equal(translator('I\'ve just got bits and bobs in my bum bag.', 'british-to-american')[0], 'I\'ve just got odds and ends in my fanny pack.')
        done();
    });
  
    test('Translate The car boot sale at Boxted Airfield was called off. to American English', (done) => {
        assert.equal(translator('The car boot sale at Boxted Airfield was called off.', 'british-to-american')[0], 'The swap meet at Boxted Airfield was called off.')
        done();
    });

    test('Translate Have you met Mrs Kalyani? to American English', (done) => {
        assert.equal(translator('Have you met Mrs Kalyani?', 'british-to-american')[0], 'Have you met Mrs. Kalyani?')
        done();
    });

    test('Translate Prof Joyner of King\'s College, London. to American English', (done) => {
        assert.equal(translator('Prof Joyner of King\'s College, London.', 'british-to-american')[0], 'Prof. Joyner of King\'s College, London.')
        done();
    });

    test('Translate Tea time is usually around 4 or 4.30. to American English', (done) => {
        assert.equal(translator('Tea time is usually around 4 or 4.30.', 'british-to-american')[0], 'Tea time is usually around 4 or 4:30.')
        done();
    });

    test('Highlight translation in Mangoes are my favorite fruit.', (done) => {
        assert.equal(translator('Mangoes are my favorite fruit.', 'american-to-british')[1], 'Mangoes are my <span class=\"highlight\">favourite</span> fruit.')
        done();
    });

    test('Highlight translation in I ate yogurt for breakfast.', (done) => {
        assert.equal(translator('I ate yogurt for breakfast.','american-to-british')[1], 'I ate <span class=\"highlight\">yoghurt</span> for breakfast.')
        done();
    });

    test('Highlight translation in We watched the footie match for a while.', (done) => {
        assert.equal(translator('We watched the footie match for a while.', 'british-to-american')[1], 'We watched the <span class=\"highlight\">soccer</span> match for a while.')
        done();
    });

    test('Highlight translation in Paracetamol takes up to an hour to work.', (done) => {
        assert.equal(translator('Paracetamol takes up to an hour to work.','british-to-american')[1], '<span class=\"highlight\">Tylenol</span> takes up to an hour to work.')
        done();
    });
});
>>>>>>> c04fb1283481595eabd8b7ccbe1be22d8f6e6a69
