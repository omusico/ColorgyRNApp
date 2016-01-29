import React, {
  PropTypes,
  StyleSheet,
  View
} from 'react-native';

import THEME from '../constants/THEME';
import TitleBar from './TitleBar';

let TitleBarLayout = React.createClass({
  propTypes: {
    textColor: PropTypes.string,
    title: PropTypes.string,
    color: PropTypes.string,
    actions: PropTypes.array,
    enableOffsetTop: PropTypes.bool,
    offsetTop: PropTypes.number
  },

  getDefaultProps: function() {
    return {
      color: THEME.COLOR,
      offsetTop: 0
    };
  },

  render() {
    var offsetTop = this.props.enableOffsetTop ? this.props.offsetTop : 0;

    return (
      <View style={[styles.container, this.props.style]}>
        <View
          style={[styles.head, {
            backgroundColor: this.props.color,
            paddingTop: offsetTop
          }]}
        >
          <TitleBar
            title={this.props.title}
            actions={this.props.actions}
            textColor={this.props.textColor}
          >
          </TitleBar>
        </View>
        <View style={[styles.body, this.props.contentContainerStyle]}>
          {this.props.children}
        </View>
      </View>
    );
  },
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  head: {
    elevation: 4
  },
  body: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: THEME.BACKGROUND_COLOR
  }
});

export default TitleBarLayout;
