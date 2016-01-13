import React, {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableNativeFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

import LOADING_STATE from '../constants/LOADING_STATE';
import THEME from '../constants/THEME';

import Text from './Text';
import TableCreateCoursePageLayoutAndroid from './TableCreateCoursePageLayoutAndroid';

let TableCreateCoursePage = React.createClass({
  render() {
    return (
      <TableCreateCoursePageLayoutAndroid
        style={{ flex: 1, backgroundColor: 'red' }}
        title="Hello"
      />
    );
  }
});

var styles = StyleSheet.create({

});

export default TableCreateCoursePage;
