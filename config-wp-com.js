var URL_TO_WORDPRESS_BLOG = 'https://mozillaclubsresources.wordpress.com';

var WORDPRESS_COM_API_ENDPOINT = "https://public-api.wordpress.com/rest/v1.1/sites/";
var WORDPRESS_BLOG_ID = "mozillaclubsresources.wordpress.com";

module.exports = {
  localStorageKey: 'wp-auth-info',
  urlToWordPress: URL_TO_WORDPRESS_BLOG,
  wpApiEndpoint: WORDPRESS_COM_API_ENDPOINT + WORDPRESS_BLOG_ID + "/",
  pageID: {
    home: 3
  }
};
