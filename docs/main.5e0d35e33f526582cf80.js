!function(t){function e(e){for(var r,a,u=e[0],c=e[1],l=e[2],s=0,p=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(f&&f(e);p.length;)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={0:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=c;i.push([8,1]),n()}({3:function(t,e,n){},8:function(t,e,n){"use strict";n.r(e);n(3);var r=n(0),o=n.n(r),i=n(2),a=n.n(i),u=[{attribution:"Homer Simpson",content:"Doh!"},{attribution:"John MacLane",content:"Yippee-ki-yay, motherfucker!"},{attribution:"Bruce Lee",content:"The successful warrior is the average man, with laser-like focus."},{attribution:"Steve Jobs",content:"Stay hungry, stay foolish."},{attribution:"Malcolm X",content:"The future belongs to those who prepare for it today."},{attribution:"J.R.R. Tolkien",content:"Little by little, one travels far."},{attribution:"Marcus Aurelius",content:"You have power over your mind – not outside events. Realize this, and you will find strength."},{attribution:"Wayne Gretzky",content:"You miss 100 percent of the shots you never take."},{attribution:"Henry Ford",content:"If you think you can do a thing or think you can’t do a thing, you’re right."},{attribution:"Friedrich Nietzsche",content:"That which does not kill us makes us stronger."}];function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=b(t);if(e){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?h(t):e}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(a,t);var e,n,r,i=s(a);function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t)).state={quoteText:"To be or not to be...",attribution:"some mad Dane"},e.handleClick=e.handleClick.bind(h(e)),e}return e=a,(n=[{key:"handleClick",value:function(t){t.preventDefault();var e=Math.floor(Math.random()*u.length),n=u[e];this.setState({quoteText:n.content,attribution:n.attribution})}},{key:"render",value:function(){var t="https://twitter.com/intent/tweet?text=%22"+this.state.quoteText+"%22  -- "+this.state.attribution;return o.a.createElement("div",{id:"quote-box",className:"quote-box"},o.a.createElement("div",{id:"text",className:"quote-box__quoteText"},o.a.createElement("p",null,"“ ",this.state.quoteText," ”")),o.a.createElement("div",{id:"author",className:"quote-box__author"},"- "+this.state.attribution),o.a.createElement("a",{href:t,id:"tweet-quote",className:"btn btn__twitter",title:"Tweet this quote",target:"_blank"},o.a.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"})),o.a.createElement("a",{id:"new-quote",className:"btn btn__next-quote",href:"#",onClick:this.handleClick},"Next Quote"))}}])&&l(e.prototype,n),r&&l(e,r),a}(o.a.Component);a.a.render(o.a.createElement(y,null),document.querySelector("#app"))}});