import React, {
  PixelRatio,
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
    // Data
    // var {  } = this.props;
    // UI Props
    var { translucentStatusBar, statusBarHeight, windowWidth } = this.props;
    // UI State
    // var {  } = this.props;
    // Action Handlers
    // var {  } = this.props;

    var toolbarPaddingTop = translucentStatusBar ? statusBarHeight : 0;

    return (
      <TableCreateCoursePageLayoutAndroid
        style={{ flex: 1, backgroundColor: 'red' }}
        toolbarTitle="Hello"
        toolbarHeight={PixelRatio.getPixelSizeForLayoutSize(THEME.ANDROID_TITLE_BAR_HEIGHT + toolbarPaddingTop)}
        toolbarPaddingTop={PixelRatio.getPixelSizeForLayoutSize(toolbarPaddingTop)}
      />
    );
  }
});

var styles = StyleSheet.create({

});

export default TableCreateCoursePage;
