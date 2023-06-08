const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const britishOnly = require('./british-only.js');
const americanToBritishTitles = require('./american-to-british-titles.js');

// 1. Reverse object key/value pairs
const reverseDict = (obj) =>
  Object.assign({}, ...Object.entries(obj).map(([k, v]) => ({ [v]: k })));

// 2. American/British dictionary
const americanBritishDict = {
  ...americanOnly,
  ...americanToBritishSpelling,
  ...americanToBritishTitles,
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
