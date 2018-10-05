import React, { Component } from 'react';
import {
  Text, TouchableOpacity,
  View, StyleSheet
} from 'react-native';
import RoundCheckbox from 'rn-round-checkbox';

import {
  categoryShopping, categoryBirthday, categoryEvent,
  categoryTodo, categoryPersonal, calendarHighlight
} from '../styles'

import { connect } from 'react-redux'
import { toggleTask, delTask } from '../actions'

class ItemTask extends Component {
  state = {
    taskDone: this.props.item.isDone
  }

  chooseColorByCateegory = () => {
    switch (this.props.item.category) {
      case 'To do': return categoryTodo
      case 'Shopping': return categoryShopping
      case 'Birthday': return categoryBirthday
      case 'Event': return categoryEvent
      case 'Personal': return categoryPersonal
    }
  }

  deleteTask = () => {
    this.props.delTask({
      dayId: this.props.dayId,
      taskId: this.props.item.id
    })
  }

  render() {
    console.log('==========');
    console.log(this.props.item.id);
    console.log(Math.floor(this.props.item.id / (24 * 60 * 60 * 1000)));

    return (
      <View style={styles.container}>
        <RoundCheckbox
          checked={this.state.taskDone}
          onValueChange={(newValue) => {
            this.setState({ taskDone: newValue })
            this.props.toggleTask({
              // dayId: Math.floor(this.props.item.id / (24 * 60 * 60 * 1000)),
              dayId: this.props.dayId,
              taskId: this.props.item.id
            })
          }}
          backgroundColor={calendarHighlight} />
        <Text style={styles.time}>{this.props.item.time}</Text>
        <TouchableOpacity
          style={[
            styles.task,
            { backgroundColor: this.props.item.isDone ? 'gray' : this.chooseColorByCateegory() }
          ]}
          onLongPress={this.deleteTask}>
          <Text style={styles.content}>{this.props.item.content}</Text>
          <Text style={styles.category}>{this.props.item.category}</Text>
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

export default connect(null, { toggleTask, delTask })(ItemTask);