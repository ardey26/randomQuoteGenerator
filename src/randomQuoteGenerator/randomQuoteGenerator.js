import React from 'react';
const quotes = require('./quotes.json');

class RandomQuoteGenerator extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      quote: quotes[Math.floor(Math.random() * (quotes.length))].Quote,
      author: quotes[Math.floor(Math.random() * (quotes.length))].Author,
      twitterUrl: "https:/twitter.com/intent/tweet"
    }
    this.randomQuoteGenerator = this.randomQuoteGenerator.bind(this);
  };
  handleTweet = () => {
    const quote = this.state.quote;
    const author =  this.state.author;
    this.setState({
      quote: this.state.quote,
      author: this.state.author,
      twitterUrl: `https://twitter.com/intent/tweet?text=%22${quote}%22%20-%20${author}`
    })
  }
  randomQuoteGenerator = () => {
    const randomNum = Math.floor(Math.random() * (quotes.length));
    this.setState({
      quote: quotes[randomNum].Quote,
      author: quotes[randomNum].Author,
    })
  }
    render(){
      return(
        <div className="jumbotron jumbotron-fluid" id="quotes">
          <div className="container">
          <h1 className="display-4"> "{this.state.quote}" </h1>
          <br />
          <h2 className="lead"> -{this.state.author} </h2>
          <br />
          <button onClick={this.randomQuoteGenerator} className="btn btn-outline-light btn-lg"> Get Random Quote! </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href = {this.state.twitterUrl} target="_blank"><button onClick={this.handleTweet} className="btn btn-outline-light btn-lg"> Tweet This! </button></a>
          </div>
        </div>
      )
    }
}

export default RandomQuoteGenerator;