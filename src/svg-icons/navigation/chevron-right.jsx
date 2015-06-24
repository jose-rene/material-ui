let React = require('react');
let SvgIcon = require('../../svg-icon');

let NavigationChevronRight = React.createClass({

  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
      </SvgIcon>
    );
  }

});

module.exports = NavigationChevronRight;