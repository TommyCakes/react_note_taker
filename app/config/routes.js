var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Router = require('react-router');
//var Route = Router.route;
var Route = require('react-router').Route;

module.exports = (
  <Route path="/" component={Main}>

  </Route>
);
