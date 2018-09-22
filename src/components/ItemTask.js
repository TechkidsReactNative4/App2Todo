import React, { Component } from 'react';
import {
  Text, TouchableOpacity,
  View, StyleSheet
} from 'react-native';
import RoundCheckbox from 'rn-round-checkbox';

import { categoryShopping } from '../styles'

class ItemTask extends Component {
  state = {}
  render() {
    return (
      <View style={styles.container}>
        <RoundCheckbox />
        <Text style={styles.time}>09:00</Text>
        <TouchableOpacity style={styles.task}>
          <Text style={styles.content}>Tomatoes</Text>
          <Text style={styles.category}>Shopping</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center'
  },
  time: {
    color: 'gray',
    marginStart: 20,
    width: 40
  },
  task: {
    backgroundColor: categoryShopping,
    borderRadius: 10,
    padding: 15,
    marginStart: 20,
    flex: 1
  },
  content: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16
  },
  category: {
    color: 'white',
    marginTop: 5,
    fontSize: 12,
    opacity: 0.8
  }
})

export default ItemTask;