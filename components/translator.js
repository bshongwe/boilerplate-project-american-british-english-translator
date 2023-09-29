const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const britishOnly = require('./british-only.js');
const americanToBritishTitles = require('./american-to-british-titles.js');

<<<<<<< HEAD
class Translator {
  textChecker(text) {
    if (text == null) return { error: 'Required field(s) missing' };
    if (!text || text.trim() == '') return { error: 'No text to translate' };
    return true;
  };

  localeChecker(locale) {
    if (!locale) return { error: 'Required field(s) missing' };
    if (locale != 'american-to-british' && locale != 'british-to-american') return { error: 'Invalid value for locale field' };
    return true;
  };

  americanToBritish(text) {
    let translated = text;
    for (const prop in americanOnly) {
      const regex = new RegExp('\\b' + prop + '\\b','gi');
      if (translated.match(regex)) {
        const britishProp = '<span class="highlight">' + americanOnly[prop] + '</span>';
        translated = translated.replace(regex, britishProp);
      };
    };

    for (const prop in americanToBritishSpelling) {
      const regex = new RegExp('\\b' + prop + '\\b','gi');
      if (translated.match(regex)) {
        const britishSpelling = '<span class="highlight">' + americanToBritishSpelling[prop] + '</span>';
        translated = translated.replace(regex, britishSpelling);
      };
    };

    for (const prop in americanToBritishTitles) {
      const regex = new RegExp(`(?<=^|[.'"\\s])${prop}(?=[.'"\\s]|$)`, 'gi');
      if (translated.match(regex)) {
        let capTitle = americanToBritishTitles[prop].charAt(0).toUpperCase() + americanToBritishTitles[prop].slice(1);
        const britishTitles = '<span class="highlight">' + capTitle + '</span>';
        translated = translated.replace(regex, britishTitles);
      };
    };

    const clockRegex = new RegExp(`(\\d{1,2}):(\\d{1,2})`, 'g');
    translated = translated.replace(clockRegex, `<span class="highlight">$1.$2</span>`);

    return translated;
  };

  britishToAmerican(text) {
    const americanSpelling = Object.keys(americanToBritishSpelling);
    const britishSpelling = Object.values(americanToBritishSpelling);
    const americanTitles = Object.keys(americanToBritishTitles);
    const britishTitles = Object.values(americanToBritishTitles);
    let translated = text;

    for (const prop in britishOnly) {
      const regex = new RegExp(`(?<=^|[.'"\\s])${prop}(?=[.'"\\s]|$)`, 'gi');
      if (translated.match(regex)) {
        const americanProp = '<span class="highlight">' + britishOnly[prop] + '</span>';
        translated = translated.replace(regex, americanProp);
      };
    };

    for (var i = 0; i < britishSpelling.length; i++) {
      const regex = new RegExp('\\b' + britishSpelling[i] + '\\b','gi');
      if (translated.match(regex)) {
        const americanSpellChange = '<span class="highlight">' + americanSpelling[i] + '</span>';
        translated = translated.replace(regex, americanSpellChange);
      };
    };

    for (var i = 0; i < britishTitles.length; i++) {
      const regex = new RegExp('\\b' + britishTitles[i] + '\\b','gi');
      if (translated.match(regex)) {
        let capTitle = americanTitles[i].charAt(0).toUpperCase() + americanTitles[i].slice(1);
        const americanTitleChange = '<span class="highlight">' + capTitle + '</span>';
        translated = translated.replace(regex, americanTitleChange);
      };
    };

    const clockRegex = new RegExp(`(\\d{1,2}).(\\d{1,2})`, 'g');
    translated = translated.replace(clockRegex, `<span class="highlight">$1:$2</span>`);

    return translated;
  };

  translator(locale, text) {
    let translation;
    const original = text;

    if (this.textChecker(text).error) return { error: this.textChecker(text).error };
    if (this.localeChecker(locale).error) return { error: this.localeChecker(locale).error };
 
    if (locale == 'american-to-british') {
      translation = this.americanToBritish(text);
    } else if (locale == 'british-to-american') {
      translation = this.britishToAmerican(text);
    };

    if (translation === text) {
      return { translation: 'Everything looks good to me!', text: original };
    } else {
      return { translation: translation, text: original };
    };
  };

=======
// 1. Reverse object key/value pairs
const reverseDict = (obj) =>
  Object.assign({}, ...Object.entries(obj).map(([k, v]) => ({ [v]: k })));

// 2. American/British dictionary
const americanBritishDict = {
  ...americanOnly,
  ...americanToBritishSpelling,
  ...americanToBritishTitles,
>>>>>>> c04fb1283481595eabd8b7ccbe1be22d8f6e6a69
};

// 3. British/American dictionary
const reverseAmericanToBritishSpelling = reverseDict(americanToBritishSpelling);
const britishToAmericanTitles = reverseDict(americanToBritishTitles);

const britishAmericanDict = {
  ...britishOnly,
  ...reverseAmericanToBritishSpelling,
  ...britishToAmericanTitles,
};

// 4. Translator logic
const translate = (str, locale) => {
  const lowerCasedOriginalStr = str.toLowerCase();
  const translationType = locale;

  const dict =
    translationType === 'american-to-british'
      ? americanBritishDict
      : britishAmericanDict;

  const timeRegex =
    translationType === 'american-to-british'
      ? /([1-9]|1[012]):[0-5][0-9]/g
      : /([1-9]|1[012]).[0-5][0-9]/g;

  const matchesMap = {};

  // 5. Search for titles/honorifics and add them to the matchesMap object
  Object.entries(americanToBritishTitles).map(([k, v]) => {
    if (lowerCasedOriginalStr.includes(k)) {
      let spl = v.split('');
      spl[0] = spl[0].toUpperCase();
      matchesMap[k] = spl.join('');
    }
  });

  // 6. Filter words with spaces from current dictionary
  const wordsWithSpace = Object.fromEntries(
    Object.entries(dict).filter(([k, v]) => k.includes(' '))
  );

  // 7. Search for spaced word matches and add them to the matchesMap object
  Object.entries(wordsWithSpace).map(([k, v]) => {
    if (lowerCasedOriginalStr.includes(k)) {
      matchesMap[k] = v;
    }
  });

  // 8. Search for individual word matches and add them to the matchesMap object
  lowerCasedOriginalStr
    .match(/(\w+([-'])(\w+)?['-]?(\w+))|\w+/g)
    .map((word) => {
      if (dict[word]) return (matchesMap[word] = dict[word]);
    });

  // 9. Search for time matches and add them to the matchesMap object
  const matchedTimes = lowerCasedOriginalStr.match(timeRegex);

  if (matchedTimes) {
    matchedTimes.map((e) => {
      if (translationType === 'american-to-british') {
        return (matchesMap[e] = e.replace(':', '.'));
      }
      return (matchesMap[e] = e.replace('.', ':'));
    });
  }

  // 10. No matches
  if (Object.keys(matchesMap).length === 0) return null;

  // Return logic
  const translation = replaceAll(str, matchesMap);

  const translationWithHighlight = replaceAllWithHighlight(str, matchesMap);

  return [translation, translationWithHighlight];
};

const replaceAll = (str, mapObj) => {
  const re = new RegExp(Object.keys(mapObj).join('|'), 'gi');

  return str.replace(re, (matched) => mapObj[matched.toLowerCase()]);
};

const replaceAllWithHighlight = (str, mapObj) => {
  const re = new RegExp(Object.keys(mapObj).join('|'), 'gi');

  return str.replace(re, (matched) => {
    return `<span class="highlight">${mapObj[matched.toLowerCase()]}</span>`;
  });
};

module.exports = translate;
