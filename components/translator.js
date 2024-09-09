const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    
// create inverse dictionary method
swapRegion(dictionary){
    let swapped = {}

for ( let [key, value] of Object.entries(dictionary)){
    swapped[value] = key
}
    return swapped
}
// create american to british trans method
americanToBritish(text){
    const capitalize = (text) => text.replace(text[0], text[0].toUpperCase());

    Object.keys(americanOnly).forEach(key => {
        const regex = new RegExp(`\\b${key}\\b`, 'gi');
      text = text.replace(regex, `<span class="highlight">${americanOnly[key]}</span>`)
    })
    Object.keys(americanToBritishSpelling).forEach(key => {
        const regex = new RegExp(`\\b${key}\\b`, 'gi');
      text = text.replace(regex, `<span class="highlight">${americanToBritishSpelling[key]}</span>`)
    })
    Object.keys(americanToBritishTitles).forEach(key => {
        const regex = new RegExp(key, 'gi');
      text = text.replace(regex, `<span class="highlight">${capitalize(americanToBritishTitles[key])}</span>`)
    })

    
    text = text.replace(/(\d+):(\d+)/g, `<span class="highlight">$1.$2</span>`)

    return text
}

// create british to american trans method
britishToAmerican(text){
    const capitalize = (text) => text.replace(text[0], text[0].toUpperCase());

    let britishToAmericanSpelling = this.swapRegion(americanToBritishSpelling);
    let britishToAmericanTitles = this.swapRegion(americanToBritishTitles)

    Object.keys(britishOnly).forEach(key => {
        let regex = new RegExp(`\\b${key}\\b`, 'gi');
        text = text.replace(regex, `<span class="highlight">${britishOnly[key]}</span>`)
    })
    Object.keys(britishToAmericanSpelling).forEach(key => {
        let regex = new RegExp(`\\b${key}\\b`, 'gi');
        text = text.replace(regex, `<span class="highlight">${britishToAmericanSpelling[key]}</span>`)
    })
    Object.keys(britishToAmericanTitles).forEach(key => {
        let regex = new RegExp(key, 'gi');
        text = text.replace(regex, `<span class="highlight">${capitalize(britishToAmericanTitles[key])}</span>`)
    })

    text = text.replace(/(\d+).(\d+)/g, `<span class="highlight">$1:$2</span>`)

    return text
}
}

module.exports = Translator;