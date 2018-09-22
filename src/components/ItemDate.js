import React, { Component } from 'react';
import {
  Text,
  View, StyleSheet
} from 'react-native';

class ItemDate extends Component {
  state = {}
  render() {
    return (
      <View
        style={styles.container}>
        <Text style={styles.dayOfWeek}>Wednesday</Text>
        <Text style={styles.date}>20 Sep 2018</Text>
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