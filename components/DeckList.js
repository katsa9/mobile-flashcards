import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DeckItem from './DeckItem'

class DeckList extends Component {

  componentDidMount () {
    //Load decks
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(
              'Deck',
              {/* { deckId: key } */}
            )}>
        <Text>DeckList</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
export default DeckList