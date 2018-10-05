import React, { Component } from 'react';
import {
  Text,
  View, StyleSheet
} from 'react-native';

class ItemDate extends Component {
  state = {}
  render() {
    // const dayOfWeek = this.props.date.split('-')[0]
    // const date = this.props.date.split('-')[1]

    const dayOfWeek = this.props.date
      .substring(0, this.props.date.indexOf(' '))
    const date = this.props.date
      .substring(this.props.date.indexOf(' ') + 1)

    return (
      <View
        style={styles.container}>
        <Text style={styles.dayOfWeek}>{dayOfWeek}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    marginStart: 20,
    alignItems: 'baseline'
  },
  dayOfWeek: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  date: {
    fontSize: 12,
    color: 'gray',
    marginStart: 20
  }
})

export default ItemDate;