import React, {
  PixelRatio,
  StyleSheet,
  View,
  Image,
  ScrollView,
  ToolbarAndroid,
  TouchableNativeFeedback
} from 'react-native';
import { NestedScrollViewAndroid } from 'react-native-android-design-support';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

import LOADING_STATE from '../constants/LOADING_STATE';
import THEME from '../constants/THEME';

import Text from './Text';
import TableCreateCoursePageLayoutAndroid from './TableCreateCoursePageLayoutAndroid';
import TitleBar from './TitleBar';

let TableCreateCoursePage = React.createClass({
  getInitialState() {
    return {
      count: 1
    };
  },
  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 3000);
  },

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
        style={{ flex: 1 }}
        toolbarTitle="Hello"
        toolbarTitleColor="white"
        toolbarExpandedTitleColor="purple"
        toolbarHeight={PixelRatio.getPixelSizeForLayoutSize(THEME.ANDROID_TITLE_BAR_HEIGHT + toolbarPaddingTop)}
        toolbarPaddingTop={PixelRatio.getPixelSizeForLayoutSize(toolbarPaddingTop)}
        contentScrimColor="#0000FF"
      >
        <ToolbarAndroid
          navIcon={require('../assets/images/icon_arrow_back_white.png')}
          actions={[{ title: '返回', icon: require('../assets/images/icon_arrow_back_white.png'), onPress: this._handleBack, show: 'always' }]}
          // HACK: Prevent toolbar disspearing bug on Android < 22
          title={JSON.stringify(this.state) + JSON.stringify(this.props)}
        />
        <View>
          <Text style={{ fontSize: 28 }}>Hi Hi!</Text>
        </View>
        <NestedScrollViewAndroid
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingTop: 300 }}
        >
          <Text style={{ fontSize: 28 }}>FL! {this.state.count}</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>Hi Hello!</Text>
          <Text style={{ fontSize: 28 }}>EOF!</Text>
        </NestedScrollViewAndroid>
      </TableCreateCoursePageLayoutAndroid>
    );
  }
});

var styles = StyleSheet.create({

});

export default TableCreateCoursePage;
