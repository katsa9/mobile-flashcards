import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux'
import { purple, white, lightPurp } from '../utils/colors';
import { NavigationActions } from 'react-navigation'
import { addCard } from '../actions'

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
    this.props.navigation.dispatch(NavigationActions.back({key: 'Deck'}))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.inputLabel}>Question</Text>
        <TextInput style={styles.textInput}
          onChangeText={text => this.onQuestionChanged(text)}
          value={this.state.question}
          placeholder="Enter your question"
          placeholderTextColor={lightPurp}
        />
        <Text style={styles.inputLabel}>Answer</Text>
        <TextInput style={styles.textInput}
          onChangeText={text => this.onAnswerChanged(text)}
          value={this.state.answer}
          placeholder="Enter your answer"
          placeholderTextColor={lightPurp}
        />
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={this.onSubmit}>
          <Text style={styles.submitBtnText}>Add Card</Text>
        </TouchableOpacity>
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
  inputLabel: {
    color: purple,
    fontSize: 14,
  },
  submitBtn: {
    marginTop: 40,
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  submitBtnText: {
    color: white,
    fontSize: 20,
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderColor: lightPurp,
    borderWidth: 1,
    borderRadius: 2,
    alignSelf: 'stretch',
    textAlign: 'center',
    color: purple
  },
});

function mapStateToProps (state, { navigation }) {
  const { deckId } = navigation.state.params
  return {
    deckKey: deckId
  }
}

export default connect(mapStateToProps)(NewCard)