import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux'
import { purple, white, lightPurp, red, green, black } from '../utils/colors'
import CustomButton from './CustomButton'
import TextButton from './TextButton';

class QuizView extends Component {
  state = {
    currentQuestion: '',
    currentAnswer: '',
    totalCorrect: 0,
    count: 0,
    showAnswer: false,
    questionsLeft: []
  }

  componentDidMount () {
    const { quizDeck } = this.props
    const questions = [...quizDeck.questions]
    const firstQuestion = questions.pop()
    console.log("first q: ", firstQuestion)
    console.log("questions left: ", questions)

    this.setState(() => ({
      currentQuestion: firstQuestion.question,
      currentAnswer: firstQuestion.answer,
      count: 1,
      questionsLeft: questions
    }))
  }

  onCorrect = () => {
    this.nextQuestion()
  }


  onIncorrect = () => {
    this.nextQuestion()
  }

  nextQuestion = () => {
 //SETSTATE
  }

  showAnswer = () => {
    this.setState(() => ({
      showAnswer: true
    }))
  }

  render () {
    const { quizDeck } = this.props
    const { currentQuestion, currentAnswer, totalCorrect, count, showAnswer } = this.state
    console.log("Quiz state to render: ", this.state)
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{currentQuestion}</Text>
        {showAnswer === false && 
          <TextButton
          onPress={this.showAnswer}>
          Show Answer
        </TextButton>}

        {showAnswer === true &&
         <Text style={styles.answer}>{currentAnswer}</Text>}
        <View style={styles.btnContainer}>
        <CustomButton
          btnStyle={styles.correctBtn}
          textStyle={styles.btnText}
          onPress={this.onCorrect}
          disabled={false}>
          Correct
          </CustomButton>
        <CustomButton
          btnStyle={styles.incorrectBtn}
          textStyle={styles.btnText}
          onPress={this.onIncorrect}
          disabled={false}>
          Incorrect
          </CustomButton>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    padding: 15
  },
  btnContainer: {
    flex: 1,
    backgroundColor: white,
  },
  heading: {
    paddingTop: 30,
    marginBottom: 40,
    color: purple,
    fontSize: 36,
    justifyContent: 'center',
    alignItems: 'center'
  },
  correctBtn: {
    backgroundColor: green,
    paddingHorizontal: 40
  },
  incorrectBtn: {
    backgroundColor: red,
    paddingHorizontal: 40
  },
  btnText: {
    color: black
  },
  answer: {
    color: lightPurp,
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

function mapStateToProps (state, { navigation }) {
  const { deckId } = navigation.state.params
  const deck = state[deckId]
  console.log("mapstate deck:", deck)
  return {
    quizDeck: deck
  }
}

export default connect(mapStateToProps)(QuizView)