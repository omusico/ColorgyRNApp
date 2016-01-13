import React, { requireNativeComponent, PropTypes, View, UIManager, findNodeHandle } from 'react-native';

var TableCreateCoursePageLayoutAndroid = React.createClass({
  propTypes: {
    ...View.propTypes,
    toolbarTitle: PropTypes.string,
    toolbarTitleColor: PropTypes.string,
    toolbarExpandedTitleColor: PropTypes.string,
    toolbarHeight: PropTypes.number,
    toolbarPaddingTop: PropTypes.number,
    contentScrimColor: PropTypes.string
  },

  getDefaultProps: function() {
    return {};
  },

  render: function() {
    return (
      <RCTTableCreateCoursePageLayoutAndroid {...this.props} />
    );
  }
});

var RCTTableCreateCoursePageLayoutAndroid = requireNativeComponent('RCTTableCreateCoursePageLayoutAndroid', TableCreateCoursePageLayoutAndroid, {
  nativeOnly: {}
});

export default TableCreateCoursePageLayoutAndroid;
