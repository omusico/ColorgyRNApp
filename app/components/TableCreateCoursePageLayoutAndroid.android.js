import { requireNativeComponent, PropTypes, View } from 'react-native';

var iface = {
  name: 'TableCreateCoursePageLayoutAndroid',
  propTypes: {
    ...View.propTypes,
    toolbarTitle: PropTypes.string,
    toolbarHeight: PropTypes.number,
    toolbarPaddingTop: PropTypes.number
  },
};

export default requireNativeComponent('RCTTableCreateCoursePageLayoutAndroid', iface);
