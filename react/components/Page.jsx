var React = require('react');
var Link = require('react-router').Link;
var Navbar = require('./Navbar.jsx');

var elements = (function() {
  var randomstring = require('randomstring');
  var elements = [];
  var i=100;
  while(i--) {
    elements.push(randomstring.generate());
  }
  return elements;
}());

var Page = React.createClass({

  getDefaultProps() {
    return {
      title: "Mozilla Clubs Resources"
    };
  },

  contextTypes: {
    router: React.PropTypes.object
  },

  render: function() {
    var routedContent = React.cloneElement(this.props.children, {
      elements: elements
    });

    if (routedContent.props && typeof document !== "undefined") {
      var title = routedContent.props.title;
      if (!title) { title = this.props.title; } else { title = this.props.title + " - " + title; }
      document.title = title;
    }

    return (
      <div>
        <header>
          <div className="container">
            <h1><Link to={'/'}>Mozilla Clubs Resources</Link></h1>
          </div>
        </header>
        <div className="content">
          <div className="container">
            <Navbar/>
            <section className="main">
            { routedContent }
            </section>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Page;
