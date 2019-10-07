import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux'
import { purple, white, lightPurp } from '../utils/colors';
import { addCard } from '../actions'
import CustomButton from './CustomButton';

class NewCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  onQuestionChanged = (text) => {
    this.setState(() => ({
      question: text
    }))
  }
  onAnswerChanged = (text) => {
    this.setState(() => ({
      answer: text
    }))
  }

  onSubmit = () => {
    const { question, answer } = this.state
    const { deckKey } = this.props
    this.props.dispatch(addCard({
      question,
      answer,
      deckKey
    }))
    this.backToDeck()
    this.setState(() => ({
      question: '',
      answer: '',
    }))
  }

  backToDeck = () => {
    this.props.navigation.goBack()
  }

  render () {
    const { question, answer } = this.state
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput}
          onChangeText={text => this.onQuestionChanged(text)}
          value={this.state.question}
          placeholder="Enter your question"
          placeholderTextColor={lightPurp}
        />
        <TextInput style={styles.textInput}
          onChangeText={text => this.onAnswerChanged(text)}
          value={this.state.answer}
          placeholder="Enter your answer"
          placeholderTextColor={lightPurp}
        />
        <View style={styles.container}>
          <CustomButton
            onPress={this.onSubmit}
            disabled={question === '' || answer === ''}>
            Add Card
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
    alignItems: "center",
    padding: 15
  },
  textInput: {
    height: 40,
    borderColor: lightPurp,
    borderWidth: 1,
    borderRadius: 2,
    alignSelf: 'stretch',
    textAlign: 'center',
    color: purple,
    marginBottom: 20,
  },
});

function mapStateToProps (state, { navigation }) {
  const { deckId } = navigation.state.params
  return {
    deckKey: deckId
  }
}

export default connect(mapStateToProps)(NewCard)