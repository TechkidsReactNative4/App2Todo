import React, { Component } from 'react';
import {
  Text, FlatList, TouchableOpacity,
  View, StyleSheet
} from 'react-native';

import {
  categoryShopping, categoryBirthday, categoryEvent,
  categoryTodo, categoryPersonal, calendarHighlight
} from '../styles'

import { connect } from 'react-redux'
import { pickCategory } from '../actions'

const categories = [
  'To do', 'Shopping', 'Birthday', 'Event', 'Personal'
]

chooseColorByCateegory = (category) => {
  switch (category) {
    case 'To do': return categoryTodo
    case 'Shopping': return categoryShopping
    case 'Birthday': return categoryBirthday
    case 'Event': return categoryEvent
    case 'Personal': return categoryPersonal
  }
}

class PickCategory extends Component {
  state = {}

  renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.container,
      { backgroundColor: chooseColorByCateegory(item) }]}
      onPress={() => this.props.pickCategory(item)}>
      {/* onPress={() => this.props.onPickCategory(item)}> */}
      <Text style={{
        color: 'white',
        fontWeight: 'bold'
      }}>{item}</Text>
    </TouchableOpacity>
  )
  render() {
    return (
      <View>
        <FlatList
          style={{ marginHorizontal: 20, marginVertical: 10 }}
          data={categories}
          keyExtractor={(index) => index.toString()}
          renderItem={this.renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    marginEnd: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

//connect: 1: state, 2: action
export default connect(null, { pickCategory })(PickCategory);