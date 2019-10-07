import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

class QuizView extends Component {
  state = {
    currentQuestion: '',
    currentAnswer: '',
    totalCorrect: 0,
    count: 0,
    showAnswer: false
  }

  componentDidMount() {
    //load first question into state
  }

  render() {
    const { quizDeck } = this.props
    const { currentQuestion, currentAnswer, totalCorrect, count, showAnswer } = this.state 
    return (
      <View>
        <Text>QuizView</Text>
      </View>
    )
  }
}

function mapStateToProps(state, { navigation }) {
  const { deckId } = navigation.state.params
  const deck = state[deckId]
  return {
    quizDeck: deck
  }
}

export default connect(mapStateToProps)(QuizView)