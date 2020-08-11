import '../styles/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import quotations from './modules/_quotations';

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteText: "To be or not to be...",
      attribution: "some mad Dane"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    let rand = Math.floor(Math.random() * quotations.length);
    let randomQuote = quotations[rand];
    this.setState({
      quoteText: randomQuote.content,
      attribution: randomQuote.attribution
    });
  }

  render() {
    let tweetURL = "https://twitter.com/intent/tweet?text=%22" + this.state.quoteText + "%22  -- " + this.state.attribution;

    return (
      <div id="quote-box" className="quote-box">
        <div id="text" className="quote-box__quoteText">
          <p>&ldquo; {this.state.quoteText} &rdquo;</p>
        </div>
        <div id="author" className="quote-box__author">
          {'- ' + this.state.attribution}
        </div>
        <a href={tweetURL} id="tweet-quote" className="btn btn__twitter" title="Tweet this quote" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
        <a id="new-quote" className="btn btn__next-quote" href="#" onClick={this.handleClick}>Next Quote</a>
      </div>
    );
  }
}

ReactDOM.render(<QuoteBox />, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept();
}
