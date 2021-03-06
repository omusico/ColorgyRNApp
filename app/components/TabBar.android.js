import React from 'react-native';

var {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  PanResponder,
  Animated,
} = React;

import THEME from '../constants/THEME';
import Text from './Text';

var deviceWidth = Dimensions.get('window').width;

var styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },

  tabs: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: '#ccc',
  }
});

var TabBar = React.createClass({
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
      activeColor: 'blue'
    };
  },


  renderTabOption(name, tab) {
    var isTabActive = (this.props.activeTab === tab);
    var textStyle = {
      color: isTabActive ? this.props.color : this.props.color,
      opacity: isTabActive ? 0.87 : 0.54,
      fontWeight: isTabActive ? 'bold' : 'normal'
    };

    return (
      <TouchableOpacity style={[styles.tab]} key={name} onPress={() => this.props.goToTab(tab)}>
        <View>
          <Text style={[textStyle, this.props.textStyle]}>{name.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
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
      <View style={[styles.tabs, { backgroundColor }, this.props.style]}>
        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
        <Animated.View style={[tabUnderlineStyle, { left }, this.props.tabUnderlineStyle]} />
      </View>
    );
  },
});

export default TabBar;
