var React = require('react');
var request = require('superagent');
var sanitizeHtml = require('sanitize-html');
var configWPCom = require('../../config-wp-com');

var homepage = React.createClass({
  wpPageID: configWPCom.pageID.home,
  sanitizeHtmlConfig: {
    allowedTags: ['h2','a','li','p'],
    allowedAttributes: {
      'a': [ 'href' ]
    },
    allowedClasses: {
      'a': [ 'important-link' ]
    }
  },
  getInitialState() {
    return {
      wpPageLoaded: false
    };
  },
  getDefaultProps: function() {
    return {
      title: ""
    };
  },
  componentDidMount: function() {
    this.loadPage();
  },
  loadPage: function(){
    request
      .get(configWPCom.wpApiEndpoint+`posts/`+this.wpPageID)
      .accept(`json`)
      .end((err, res) => {
        if (err) { console.log(`error: `, err); }
        this.wpPage = JSON.parse(res.text);
        this.setState({wpPageLoaded: true});
      });
  },
  render: function() {
    var page = this.wpPage;
    var content = this.state.wpPageLoaded ? sanitizeHtml(page.content, this.sanitizeHtmlConfig) : null;
    
    return (
      <div className="homepage">
        { this.state.wpPageLoaded ?
          <div>
            <div dangerouslySetInnerHTML={{__html: content}} />
          </div>
          : <p>Loading...</p>
        }
      </div>
    );
  }

});

module.exports = homepage;
