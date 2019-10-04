import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { purple, white, lightPurp } from '../utils/colors';
import DeckPanel from './DeckPanel'

class DeckItem extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params 
    return {
      title: `${deckId}`
    }
  }
  render() {
    const { display } = this.props
     return (
      <View style={styles.container}>
      <DeckPanel deckId={display.title}/>
      <View>
      <TouchableOpacity onPress={() => this.props.navigation.navigate(
              'NewCard',
              {/* { deckId: key } */}
            )}>
        <Text>Create New Card</Text>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(
              'StartQuiz',
              {/* { deckId: key } */}
            )}>
        <Text>Start Quiz</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15,
  },
})

function mapStateToProps (state, { navigation }) {
  const { deckId } = navigation.state.params
  const deck = state[deckId]
  console.log("Deck item: ", deck)
  return {
    display: deck
  }
}

export default connect(mapStateToProps)(DeckItem)