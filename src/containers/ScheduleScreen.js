import React, { Component } from 'react';
import {
  Text,
  View, StyleSheet
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip'

import { calendarBackground, calendarHighlight } from '../styles';
import ItemDate from '../components/ItemDate';
import ItemTask from '../components/ItemTask';

class ScheduleScreen extends Component {
  state = {}
  render() {
    return (
      <View style={styles.container}>
        <CalendarStrip
          style={styles.calendar}
          calendarColor={calendarBackground}
          highlightDateNumberStyle={{ color: calendarHighlight }}
          highlightDateNameStyle={{ color: calendarHighlight }}
        />
        <ItemDate />
        <ItemTask />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  calendar: {
    height: 100,
    paddingTop: 10
  }
});

export default ScheduleScreen;