import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bahaquotes from './bahaQuotes.json';
import Abdulquotes from './abdulQuotes.json';
import Babquotes from './babQuotes.json';
import Gaurdianquotes from './gaurdianQuotes.json';
import UHJquotes from './uhjQuotes.json';


let fixed1 = Bahaquotes.map((el) => {return {quote: el.quote, source:el.author, author:"Baha'u'llah" }})
let fixed2 = Abdulquotes.map((el) => {return {quote: el.quote, source:el.author, author:"'Abdu'l-Baha'" }})
let fixed3 = Babquotes.map((el) => {return {quote: el.quote, source:el.author, author:"The Bab" }})
let fixed4 = Gaurdianquotes.map((el) => {return {quote: el.quote, source:el.author, author:"Shoghi Effendi" }})
let fixed5 = UHJquotes.map((el) => {return {quote: el.quote, source:el.author, author:"The Universal House of Justice" }})


const quotes = [...fixed1, ...fixed2, ...fixed3, ...fixed4, ...fixed5];

console.log(quotes.length);

function returnRandom(array){
  let random = Math.floor(Math.random() * Math.floor(array.length));
  return array[random];
}

let displayQuote = returnRandom(quotes);




function updateUsn(){
  let username = document.getElementById('inputuser').nodeValue;
}



function quoteBox(props){
  return (
    <div id="quote-box">
      <Quote />
    </div>
  )
}




function quoteText(){
  return (
    <div id='text' >"{displayQuote.quote}"</div>
  )
}

function authorName(){
  return (
    <div >-{displayQuote.author}<br />{displayQuote.source}</div>
  )
}

class Quote extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quote: displayQuote
    }
    this.getNewQuote = this.getNewQuote.bind(this);
  }
  getNewQuote(){
    
    this.setState({quote: returnRandom(quotes)})
  } 
  render(){ 
    const auth = this.state.quote.author;
    const qtext = this.state.quote.quote;
    const qsource = this.state.quote.source;
    return (<div><div>
      <p><b>{qtext}</b></p>
      <p>- {auth}</p>
      <p>{qsource}</p>
    </div>
    <button id="new-quote" onClick={this.getNewQuote}>This button gives a new quote</button>
    <a target="_blank"href="twitter.com/intent/tweet"><div id="tweet-quote">Tweet</div></a>

    </div>)
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {quoteBox()}
      </header>

    </div>
  );
}



export default App;
