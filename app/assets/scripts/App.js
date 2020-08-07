import '../styles/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import quotations from './modules/_quotations.js';

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
  }
  clickHandler() {

  }

  render() {
    return (
      <div id="quote-box" className="quote-box">
        <div id="text" className="quote-box__quoteText">
          <p>To be or not to be...</p>
        </div>
        <div id="author" className="quote-box__author">
          - some mad dane
        </div>
        <a href="#" id="tweet-quote" className="btn btn__twitter" title="Tweet this quote"><i className="fa fa-twitter" aria-hidden="true"></i></a>
        <a id="new-quote" className="btn btn__next-quote" href="#">Next Quote</a>

      </div>
    );
  }
}

ReactDOM.render(<QuoteBox />, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept();
}
