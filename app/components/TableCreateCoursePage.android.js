import React, {
  PixelRatio,
  StyleSheet,
  View,
  Image,
  ScrollView,
  ToolbarAndroid,
  TouchableOpacity
} from 'react-native';
import {
  NestedScrollViewAndroid,
  TextInputLayoutAndroid
} from 'react-native-android-design-support';
import _ from 'underscore';
import stringHash from 'string-hash';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modalbox';
import WheelView from 'react-native-wheel';

import LOADING_STATE from '../constants/LOADING_STATE';
import THEME from '../constants/THEME';

import Text from './Text';
import TableCreateCoursePageLayoutAndroid from './TableCreateCoursePageLayoutAndroid';
import TextInput from './TextInput';
import Button from './Button';
import GhostButton from './GhostButton';

var CourseTimeBlock = React.createClass({
  weekDayTexts: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],

  getInitialState() {
    return {
      periodSelectWheelKey: 1000
    };
  },

  _openDatePeriodSelectModel() {
    this._setDatePeriodSelectModel();
  },

  _setDatePeriodSelectModel() {
    var periodCodes = _.toArray(this.props.periodData).map((d) => d.code);

    this.props.onSetOverlayElement(
      <Modal
        ref={(m) => {
          this.selectModel = m;
          if (m) m.open();
        }}
        swipeToClose={false}
        style={styles.timeSelectionModal}
      >
        <View style={styles.timeSelectionModalHead}>
          <Text style={styles.timeSelectionModalHeadText}>選擇課程節次</Text>
          <Button
            type="small"
            value="完成"
            onPress={() => {
              if (this.selectModel) this.selectModel.close();
            }}
          />
        </View>
        <View style={styles.timeSelectionModalContentSelectWheels}>
          <WheelView
            style={styles.timeSelectionModalContentSelectWheel}
            values={this.weekDayTexts}
            onItemChange={this.props.onDayChange}
            isLoop={false}
            textSize={20}
            selectedIndex={this.props.day}
          />
          <WheelView
            key={this.state.periodSelectWheelKey * 1}
            style={styles.timeSelectionModalContentSelectWheel}
            values={periodCodes.map((code) => `第 ${code} 節`)}
            onItemChange={(i) => { if (!this.state.changingWheel) this._handlePeriodStartChange(i + 1); }}
            isLoop={false}
            textSize={20}
            selectedIndex={this.props.periodStart - 1}
          />
          <WheelView
            key={this.state.periodSelectWheelKey * 2}
            style={styles.timeSelectionModalContentSelectWheel}
            values={periodCodes.map((code) => `到第 ${code} 節`)}
            onItemChange={(i) => { if (!this.state.changingWheel) this._handlePeriodEndChange(i + 1); }}
            isLoop={false}
            textSize={20}
            selectedIndex={this.props.periodEnd - 1}
          />
        </View>
      </Modal>
    );
  },

  _handlePeriodStartChange(ps) {
    this.props.onPeriodStartChange(ps);

    if (ps > this.props.periodEnd) {
      this.props.onPeriodEndChange(ps);
      this.setState({ periodSelectWheelKey: this.state.periodSelectWheelKey + 1 });
      this._setDatePeriodSelectModel();
    }
  },

  _handlePeriodEndChange(pe) {
    this.props.onPeriodEndChange(pe);

    if (pe < this.props.periodStart) {
      this.props.onPeriodStartChange(pe);
      this.setState({ periodSelectWheelKey: this.state.periodSelectWheelKey + 1 });
      this._setDatePeriodSelectModel();
    }
  },

  render() {
    var periodDesc = '';
    if (this.props.periodStart === this.props.periodEnd) {
      var period = this.props.periodData[this.props.periodStart.toString()];
      var periodCode = period && period.code;
      periodDesc = `第 ${periodCode} 節`;
    } else {
      var periodStart = this.props.periodData[this.props.periodStart.toString()];
      var periodStartCode = periodStart && periodStart.code;
      var periodEnd = this.props.periodData[this.props.periodEnd.toString()];
      var periodEndCode = periodEnd && periodEnd.code;
      periodDesc = `第 ${periodStartCode} 節到第 ${periodEndCode} 節`;
    }

    return (
      <View style={this.props.style}>
        <TextInput
          placeholder="上課地點"
          defaultValue={this.props.location}
          onChangeText={this.props.onLocationChange}
        />
        <TouchableOpacity
          onPress={this._openDatePeriodSelectModel}
        >
          <View style={{
            borderBottomWidth: 2,
            borderBottomColor: '#737373',

          }}>
            <Text>{`${this.weekDayTexts[this.props.day]} 的 ${periodDesc}`}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
});

let TableCreateCoursePage = React.createClass({
  getInitialState() {
    return {
      count: 1
    };
  },

  componentDidMount() {
    // HACK: Refresh the native view on mount
    setTimeout(() => {
      this.setState({ mounted: 1 });
    }, 100);
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 500);

    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 15000);

    setInterval(() => {
      this.setState({ countsss: this.state.count + 1 });
    }, 1000);
  },

  render() {
    // Data
    var {
      periodData,
      courseName,
      courseLecturer,
      courseTimes
    } = this.props;
    // UI Props
    var { translucentStatusBar, statusBarHeight, windowWidth } = this.props;
    // UI State
    var { saving } = this.props;
    // Action Handlers
    var {
      handleSave,
      handleCourseNameChange,
      handleCourseLecturerChange,
      handleCourseTimeChange,
      handleAddCourseTime,
      handleDeleteCourseTime,
      handleBack,
      onSetOverlayElement
    } = this.props;

    var toolbarPaddingTop = translucentStatusBar ? statusBarHeight : 0;
    var innerViewState = [
      this.state.mounted,
      this.state.count,
      periodData,
      courseTimes,
      saving,
      translucentStatusBar,
      statusBarHeight,
      windowWidth
    ];

    return (
      <TableCreateCoursePageLayoutAndroid
        style={{ flex: 1 }}
        toolbarTitle="Hello"
        toolbarTitleColor="#FFFFFFFF"
        toolbarExpandedTitleColor="#FFFFFF00"
        toolbarHeight={PixelRatio.getPixelSizeForLayoutSize(THEME.ANDROID_TITLE_BAR_HEIGHT + toolbarPaddingTop)}
        toolbarPaddingTop={PixelRatio.getPixelSizeForLayoutSize(toolbarPaddingTop)}
        contentScrimColor={THEME.DARK_GREY}
      >
        <NestedScrollViewAndroid
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingTop: 256 }}
        >
          {(() => {
            return courseTimes.map((courseTime, i, courseTimes) => {
              return (
                <View
                  key={i}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}
                >
                  <CourseTimeBlock
                    style={{
                      flex: 1,
                      marginLeft: 12
                    }}
                    key={i}
                    onSetOverlayElement={onSetOverlayElement}
                    periodData={periodData}
                    location={courseTime.location}
                    day={courseTime.day}
                    periodStart={courseTime.periodStart}
                    periodEnd={courseTime.periodEnd}
                    onLocationChange={(location) => handleCourseTimeChange(i, { location })}
                    onDayChange={(day) => handleCourseTimeChange(i, { day })}
                    onPeriodStartChange={(periodStart) => handleCourseTimeChange(i, { periodStart })}
                    onPeriodEndChange={(periodEnd) => handleCourseTimeChange(i, { periodEnd })}
                  />
                  <TouchableOpacity
                    style={{
                      width: 40,
                      height: 40,
                      marginLeft: 12,
                    }}
                    onPress={() => {
                      if (courseTimes.length > 1) handleDeleteCourseTime(i);
                    }}
                  >
                    <Icon
                      name="clear"
                      size={30}
                      color={(courseTimes.length > 1) ? '#999999' : 'transparent'}
                    />
                  </TouchableOpacity>
                </View>
              );
            });
          })()}
          <Button
            value="新增上課時間"
            onPress={handleAddCourseTime}
            style={styles.addCourseTimeButton}
          />
          <Button
            value="Save"
            onPress={handleSave}
            style={styles.addCourseTimeButton}
          />
        </NestedScrollViewAndroid>
        <View
          style={{
            paddingTop: (THEME.ANDROID_TITLE_BAR_HEIGHT + toolbarPaddingTop),
            backgroundColor: 'transparent'
          }}
          // HACK: Prevent disappearing bug
          // key={JSON.stringify(innerViewState)}
        >
          <View
            style={{
              marginLeft: 72,
              marginRight: 16,
              marginBottom: 8,
              height: 80,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <TextInputLayoutAndroid
              hint="新課程名稱"
            >
              <TextInput
                style={{
                  fontSize: 28,
                  fontWeight: 'bold'
                }}
                onChangeText={handleCourseNameChange}
                value={courseName}
              />
            </TextInputLayoutAndroid>
          </View>
          <View
            style={{
              marginLeft: 72,
              marginRight: 16,
              height: 72,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <TextInputLayoutAndroid
              hint="教師姓名"
            >
              <TextInput
                style={{
                  fontSize: 14
                }}
                onChangeText={handleCourseLecturerChange}
                value={courseLecturer}
              />
            </TextInputLayoutAndroid>
          </View>
        </View>
        <ToolbarAndroid
          navIcon={require('../assets/images/icon_arrow_back_white.png')}
          actions={[{ title: '返回', icon: require('../assets/images/icon_arrow_back_white.png'), onPress: this._handleBack, show: 'always' }]}
          // HACK: Prevent toolbar disappearing bug on Android < 22
          title={JSON.stringify(this.state) + JSON.stringify(this.props)}
        />
      </TableCreateCoursePageLayoutAndroid>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.backgroundColor
  },
  searchBar: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingLeft: 12,
    paddingRight: 12
  },
  manuallyCreateCourseButton: {
    margin: 12
  },
  timeSelectionModal: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 395,
    elevation: 24
  },
  timeSelectionModalHead: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12
  },
  timeSelectionModalHeadText: {
    flex: 10
  },
  timeSelectionModalContentSelectWheels: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  timeSelectionModalContentSelectWheel: {
    flex: 1
  },
  addCourseTimeButton: {
    marginVertical: 16,
    marginHorizontal: 16
  }
});


export default TableCreateCoursePage;
