import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux'
import { purple, white, lightPurp } from '../utils/colors';
import { NavigationActions } from 'react-navigation'
import { addDeck } from '../actions'
import CustomButton from './CustomButton';

class NewDeck extends Component {

  state = {
    deckName: ''
  }

  onTextChanged = (text) => {
    this.setState(() => ({
      deckName: text
    }))
  }

  onSubmit = () => {
    const { deckName } = this.state
    const deck = {
      title: deckName,
      questions: []
    }
    this.props.dispatch(addDeck({
      deck
    }))


    this.toHome()

    this.setState(() => ({
      deckName: null
    }))
  }

  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({ key: 'NewDeck' }))
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>What do you want to call your new deck?</Text>
        <TextInput style={styles.textInput}
          onChangeText={text => this.onTextChanged(text)}
          value={this.state.deckName}
          placeholder="Enter your deck name"
          placeholderTextColor={lightPurp}
        />
        <CustomButton
          onPress={this.onSubmit}
          disabled={this.state.deckName === ''}>
          Create
          </CustomButton>
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
  heading: {
    paddingTop: 30,
    marginBottom: 40,
    color: purple,
    fontSize: 36,
    justifyContent: 'center',
    alignItems: 'center'
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

export default connect()(NewDeck)