import { requireNativeComponent, PropTypes, View } from 'react-native';

var iface = {
  name: 'TableCreateCoursePageLayoutAndroid',
  propTypes: {
    ...View.propTypes,
    title: PropTypes.string
  },
};

export default requireNativeComponent('RCTTableCreateCoursePageLayoutAndroid', iface);
