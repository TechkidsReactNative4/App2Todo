import React, { Component } from 'react';
import {
  Text, SectionList, Button,
  View, StyleSheet
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip'

import { calendarBackground, calendarHighlight } from '../styles';
import ItemDate from '../components/ItemDate';
import ItemTask from '../components/ItemTask';

import { data } from '../database.json'
import { connect } from 'react-redux'

class ScheduleScreen extends Component {
  state = {}

  renderItem({ item, section }) {
    return <ItemTask item={item} dayId={section.id} />
  }

  renderSectionHeader = ({ section: { date, data } }) => (
    // console.log(data)
    data.length !== 0 && <ItemDate date={date} />
  )

  render() {
    return (
      <View style={styles.container}>
        <CalendarStrip
          style={styles.calendar}
          calendarColor={calendarBackground}
          highlightDateNumberStyle={{ color: calendarHighlight }}
          highlightDateNameStyle={{ color: calendarHighlight }}
        />
        <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          sections={this.props.tasks}
          keyExtractor={(item) => item.id} />
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

const mapStateToProps = ({ tasks }) => ({ tasks })

export default connect(mapStateToProps)(ScheduleScreen);