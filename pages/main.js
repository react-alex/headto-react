/**
 * @jsx React.DOM
 */

var React = require('react');
var ReactRouter = require('react-router-component');

var Link        = ReactRouter.Link;

var SearchBox = require('../components/searchbox');
var Title = require('../components/title');

module.exports = React.createClass({

  render: function() {
    return (
      <div className="MainPage container">
        <Title />
        <SearchBox />
      </div>
    );
  }
});