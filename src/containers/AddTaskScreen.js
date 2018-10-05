import React, { Component } from 'react';
import {
  Text, TextInput, TouchableOpacity,
  View, StyleSheet, Platform, Button
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip'
import TimePicker from 'react-native-modal-datetime-picker'

import {
  calendarBackground, calendarHighlight, categoryBirthday, categoryEvent,
  categoryPersonal, categoryShopping, categoryTodo
} from '../styles'
import ItemDate from '../components/ItemDate';
import PickCate from '../components/PickCategory';

import { connect } from 'react-redux'
import { addTask } from '../actions'

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// const getDateStringFromDateObj = (date) => (`${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`)

class AddTaskScren extends Component {
  state = {
    selectedDate: this.getDateStringFromDateObj(new Date()),
    isTimePickerVisible: false,
    selectedTime: new Date().toTimeString().substring(0, 5),
    currentCategory: 'To do',
    //number of days from 1/1/1970
    dayId: Math.floor(new Date().getTime() / (24 * 60 * 60 * 1000)),
    //number of milis from 1/1/1970
    taskId: new Date().getTime(),
    content: ''
  }

  componentDidMount() {
    this.props.navigation.setParams({ addTask: this.handleAddTask });
  }

  getDateStringFromDateObj(date) {
    return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
  }

  onDateSelected = (date) => {
    this.setState({
      selectedDate: this.getDateStringFromDateObj(date._d),
      dayId: Math.floor(date._d.getTime() / (24 * 60 * 60 * 1000))
    })
  }

  chooseColorByCateegory = (category) => {
    switch (category) {
      case 'To do': return categoryTodo
      case 'Shopping': return categoryShopping
      case 'Birthday': return categoryBirthday
      case 'Event': return categoryEvent
      case 'Personal': return categoryPersonal
    }
  }

  handleAddTask = () => {
    this.props.addTask({
      id: this.state.dayId,
      date: this.state.selectedDate,
      task: {
        id: this.state.taskId,
        category: this.props.currentCategory,
        content: this.state.content,
        time: this.state.selectedTime,
        isDone: false
      }
    })
    this.props.navigation.navigate('Schedule')
  }

  render() {
    return (
      <View style={styles.container}>
        <CalendarStrip
          style={styles.calendar}
          calendarColor={calendarBackground}
          highlightDateNumberStyle={{ color: calendarHighlight }}
          highlightDateNameStyle={{ color: calendarHighlight }}
          onDateSelected={this.onDateSelected}
        />
        <ItemDate date={this.state.selectedDate} />
        <Text style={styles.title}>Content</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid='rgba(0,0,0,0)'
          onChangeText={(content) => this.setState({ content })}
          autoCorrect={false} />
        <Text style={styles.title}>Time</Text>
        <TouchableOpacity
          onPress={() => this.setState({ isTimePickerVisible: true })}>
          <Text style={styles.time}>{this.state.selectedTime}</Text>
        </TouchableOpacity>
        <TimePicker
          mode='time'
          isVisible={this.state.isTimePickerVisible}
          onConfirm={(time) => {
            this.setState({
              isTimePickerVisible: false,
              selectedTime: time.toTimeString().substring(0, 5),
              taskId: time.getTime()
            })
          }}
          onCancel={() => this.setState({ isTimePickerVisible: false })} />
        <Text style={styles.title}>Category</Text>
        <PickCate
          onPickCategory={(currentCategory) => this.setState(
            {
              currentCategory
            })} />
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginHorizontal: 20,
          color: this.chooseColorByCateegory(this.props.currentCategory)
        }}>{`This task belongs to ${this.props.currentCategory} category`}</Text>
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
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
    marginStart: 20,
    marginTop: 10
  },
  input: {
    fontSize: 18,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    //for ios
    backgroundColor: 'white',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: 'gray',
    //for android
    elevation: 5
  },
  time: {
    fontSize: 18,
    color: calendarHighlight,
    fontWeight: 'bold',
    marginStart: 20,
    marginVertical: 10
  }
});

//tao 1 props cho AddTaskScreen
//props nay co ten la 'category', gia tri = store.currentCategory
const mapStateToProps = ({ currentCategory }) => ({ currentCategory })

export default connect(mapStateToProps, { addTask })(AddTaskScren);