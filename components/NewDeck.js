import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux'
import { purple, white, lightPurp } from '../utils/colors';
import { NavigationActions } from 'react-navigation'
import { addDeck } from '../actions'

class NewDeck extends Component {

  state = {
    deckName: null
  }

  onTextChanged = (text) => {
    this.setState(() => ({
      deckName: text
    }))
  }

  onSubmit = () => {
    const { deckName } = this.state
    const deck = {
      title: deckName
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
    this.props.navigation.dispatch(NavigationActions.back({key: 'NewDeck'}))
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
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={this.onSubmit}>
          <Text style={styles.submitBtnText}>Create</Text>
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
    // justifyContent: 'center',
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

export default connect()(NewDeck)