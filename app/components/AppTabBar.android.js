import React, {
  Dimensions,
  StyleSheet,
  View,
  TouchableHighlight,
  PanResponder,
  Animated,
  Image
} from 'react-native';
import Text from './Text';

import THEME from '../constants/THEME';

var deviceWidth = Dimensions.get('window').width;

var styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  tabContentWrapper: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabs: {
    height: THEME.ANDROID_APP_TAB_BAR_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopColor: '#ECECEC',
    borderTopWidth: 1,
    elevation: 7
  }
});

var AppTabBar = React.createClass({
  propTypes: {
    goToTab: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
    color: React.PropTypes.string,
    backgroundColor: React.PropTypes.string,
    activeColor: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      color: 'black',
      backgroundColor: 'white',
      activeColor: THEME.COLOR
    };
  },


  renderTabOption(name, i) {
    var isTabActive = (this.props.activeTab === i);
    var textStyle = {
      fontSize: 12,
      marginTop: 2,
      color: isTabActive ? THEME.COLOR : '#898989',
      opacity: isTabActive ? 0.87 : 0.54,
    };

    var icon = '';

    switch (i) {
      case 0:
        if (isTabActive) {
          icon = require('../assets/images/tab_icon_table_active.png');
        } else {
          icon = require('../assets/images/tab_icon_table.png');
        }
        break;
      // case 1:
      //   if (isTabActive) {
      //     icon = require('../assets/images/tab_icon_board_active.png');
      //   } else {
      //     icon = require('../assets/images/tab_icon_board.png');
      //   }
      //   break;
      case 1:
        if (isTabActive) {
          icon = require('../assets/images/tab_icon_chat_active.png');
        } else {
          icon = require('../assets/images/tab_icon_chat.png');
        }
        break;
      case 2:
        if (isTabActive) {
          icon = require('../assets/images/tab_icon_friend_active.png');
        } else {
          icon = require('../assets/images/tab_icon_friend.png');
        }
        break;
      case 3:
        if (isTabActive) {
          icon = require('../assets/images/tab_icon_more_active.png');
        } else {
          icon = require('../assets/images/tab_icon_more.png');
        }
        break;
    }

    return (
      <TouchableHighlight underlayColor="#EEEEEE" style={[styles.tab]} key={name} onPress={() => this.props.goToTab(i)}>
        <View style={styles.tabContentWrapper}>
          <Image source={icon} style={{ width: 22, height: 22 }} />
          <Text style={textStyle}>{name.toUpperCase()}</Text>
        </View>
      </TouchableHighlight>
    );
  },

  render() {
    var numberOfTabs = this.props.tabs.length;
    var tabUnderlineStyle = {
      position: 'absolute',
      width: deviceWidth / numberOfTabs,
      height: 2,
      backgroundColor: this.props.activeColor,
      bottom: 0,
    };

    var left = this.props.scrollValue.interpolate({
      inputRange: [0, 1], outputRange: [0, deviceWidth / numberOfTabs]
    });

    var backgroundColor = this.props.backgroundColor;

    return (
      <View style={[styles.tabs, { backgroundColor }]}>
        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
      </View>
    );
  },
});

export default AppTabBar;
