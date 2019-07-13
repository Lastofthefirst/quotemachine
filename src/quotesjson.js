const fs = require('fs-extra');

const Bahaquotes = JSON.parse(fs.readFileSync('bahaQuotes.json', 'utf8'));
const Abdulquotes = JSON.parse(fs.readFileSync('abdulQuotes.json', 'utf8'));
const Babquotes = JSON.parse(fs.readFileSync('babQuotes.json', 'utf8'));
const Gaurdianquotes = JSON.parse(fs.readFileSync('gaurdianQuotes.json', 'utf8'));
const UHJquotes = JSON.parse(fs.readFileSync('uhjQuotes.json', 'utf8'));



let fixed1 = Bahaquotes.map((el) => {return {quote: el.quote, source:el.author, author:"Baha'u'llah" }})
let fixed2 = Abdulquotes.map((el) => {return {quote: el.quote, source:el.author, author:"'Abdu'l-Baha'" }})
let fixed3 = Babquotes.map((el) => {return {quote: el.quote, source:el.author, author:"The Bab" }})
let fixed4 = Gaurdianquotes.map((el) => {return {quote: el.quote, source:el.author, author:"Shoghi Effendi" }})
let fixed5 = UHJquotes.map((el) => {return {quote: el.quote, source:el.author, author:"The Universal House of Justice" }})


const quotes = [...fixed1, ...fixed2, ...fixed3, ...fixed4, ...fixed5];
        
        
        const json = JSON.stringify(quotes);
fs.writeFile('quotes.json', json, 'utf8');